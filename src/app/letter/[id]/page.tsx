import LetterDetail from "@/components/letterDetail";
import axios, { AxiosError } from "axios";

async function getLetter(id: string) {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/letter?id=${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        status: error.response?.status,
        message: error.response?.data?.error || "Unknown error"
      };
    }
    return { status: 500, message: "Internal error occurred" };
  }
}

interface LetterPageProps {
  params: { id: string };
}

export default async function Letter({ params }: LetterPageProps) {
  const { id } = params;
  const letter = await getLetter(id);

  if (letter.status > 400) {
    return (
      <h1 className="mt-24 mx-auto max-w-[814px] p-6 text-4xl font-bold text-center md:text-8xl">
        Letter tidak ditemukan :(
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
