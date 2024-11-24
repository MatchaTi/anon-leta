import Hero from "@/components/hero";
import PostCard from "@/components/postCard";
import { ILetter } from "@/types/letter";
import axios from "axios";

async function getLetters() {
  const response = await axios.get("http://localhost:3000/api/send-song");
  console.log(response.data);
  return response.data.letters || [];
}

export default async function Home() {
  const letters: ILetter[] = await getLetters();
  console.log(letters);

  return (
    <div className='overflow-hidden'>
      <Hero />

      <section className="grid p-6 gap-8 place-items-center sm:grid-cols-2 lg:px-24 lg:grid-cols-4 lg:mt-40 ">
        {letters?.length > 0 ? (
          letters.map(({ _id, recipient, id_track, description }) => (
            <PostCard
              key={_id}
              description={description}
              recipient={recipient}
              image="gambar"
              titleSong="Algernon"
              artist="Yorushika"
              link={_id}
            />
          ))
        ) : (
          <p>Tidak ada surat tersedia.</p>
        )}

      </section>
    </div>
  );
}
