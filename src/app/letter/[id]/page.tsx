import axios from "axios";
import LetterDetail from "./letterDetail";

async function getLetter(id: string) {
  try {
    const response = await axios.get(`http://localhost:3000/api/letter?id=${id}`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      return { status: error.response.status, message: error.response.data.error || "Unknown error" };
    }
    return { status: 500, message: "Internal error occurred" };
  }
}

export default async function Letter({ params }: { params: { id: string } }) {
  const { id } = await params;
  const letter = await getLetter(id);

  if (letter.status > 400) return <h1 className="mt-24 mx-auto max-w-[814px] p-6 text-4xl font-bold text-center md:text-8xl">Letter not found</h1>;

  return (
    <LetterDetail
      recipient={letter.recipient}
      description={letter.description}
      id_track={letter.id_track}
      bgColor={letter.bgColor}
    />
  );
}
