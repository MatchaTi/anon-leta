import LetterDetail from "@/components/letterDetail";
import axios, { AxiosError } from "axios";

async function getLetter(id: string) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/letter?id=${id}`
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        status: error.response?.status,
        message: error.response?.data?.error || "Unknown error",
      };
    }
    return { status: 500, message: "Internal error occurred" };
  }
}

type LetterPageProps = Promise<{
  id: string;
}>;

export default async function Letter(props: { params: LetterPageProps }) {
  const { id } = await props.params;
  const letter = await getLetter(id);

  if (letter.status > 400) {
    return (
      <h1 className='mt-24 mx-auto max-w-[814px] p-6 text-4xl font-bold text-center md:text-8xl'>
        Letter not found
      </h1>
    );
  }

  return (
    <LetterDetail
      recipient={letter.recipient}
      description={letter.description}
      id_track={letter.id_track}
      createdAt={letter.createdAt}
    />
  );
}
