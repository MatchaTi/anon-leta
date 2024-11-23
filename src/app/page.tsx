import Hero from "@/components/hero";
import { ILetter } from "@/types/letter";
import axios from "axios";
import Link from "next/link";

async function getLetters() {
  const response = await axios.get("http://localhost:3000/api/send-song");
  console.log(response.data);
  return response.data.letters || [];
}

export default async function Home() {
  const letters: ILetter[] = await getLetters();

  return (
    <div className='overflow-hidden'>
      <Hero />
      <Link href='/send'>Send</Link>

      {letters?.length > 0 ? (
        letters.map(({ _id, recipient, id_track, description }) => (
          <div key={_id} className="mb-12">
            <h2 className="mb-4 text-3xl md:text-5xl">{description}</h2>
            <p className="mb-4 text-xl text-stone-700">{recipient}</p>
            <iframe
              key={_id}
              src={`https://open.spotify.com/embed/track/${id_track}?utm_source=generator`}
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy">
            </iframe>
            <Link href={`/letter/${_id}`} className="py-4 px-8 bg-stone-900 text-stone-100 rounded-xl">
              Lihat Pesan
            </Link>
            <Link href='/send' className="py-4 px-8 bg-stone-100 border-stone-900 border-[3px] rounded-xl">
              Ungkapkan Rasa
            </Link>
          </div>
        ))
      ) : (
        <p>Tidak ada surat tersedia.</p>
      )}

    </div>
  );
}
