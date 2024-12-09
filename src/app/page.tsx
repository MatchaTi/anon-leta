import Hero from "@/components/hero";
import PostCard from "@/components/postCard";
import { ILetter } from "@/types/letter";
import axios from "axios";

export const revalidate = 10;
export const dynamic = "force-dynamic";

async function getLetters() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/send-song`
    );
    return response.data.letters || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Home() {
  const letters: ILetter[] = await getLetters();

  return (
    <div className='overflow-hidden p-6 lg:px-24'>
      <Hero />
      <h2 className='mb-12 text-4xl font-bold md:text-8xl'>Ungkapan</h2>
      <section className='grid gap-8 place-items-center sm:grid-cols-2 lg:grid-cols-4 lg:mt-40 '>
        {letters?.length > 0 ? (
          letters.map(({ _id, recipient, description, id_track }) => (
            <PostCard
              key={_id}
              idLetter={_id}
              description={description}
              recipient={recipient}
              idTrack={id_track}
            />
          ))
        ) : (
          <p>Tidak ada surat tersedia.</p>
        )}
      </section>
    </div>
  );
}
