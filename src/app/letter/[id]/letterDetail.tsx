import Link from 'next/link';

interface LetterDetailProps {
  recipient: string;
  description: string;
  id_track: string;
  bgColor?: string;
}

export default function LetterDetail({ recipient, description, id_track, bgColor = "bg-red-200" }: LetterDetailProps) {
  return (
    <section className="mt-24 mx-auto max-w-[814px] p-6">
      <h1 className="mb-12 text-4xl font-bold md:text-8xl">Hai, {recipient}</h1>
      <p className="mb-6 text-2xl">Ada seseorang yang mengirim untukmu sebuah pesan dan lagu, mereka ingin kamu untuk membaca dan mendengar lagunya yang mungkin relate :)</p>
      <div className={`mb-6 p-8 shadow-xl ${bgColor}`}>
        <p className="mb-4 text-3xl md:text-5xl">{description}</p>
        <iframe
          src={`https://open.spotify.com/embed/track/${id_track}?utm_source=generator`}
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy">
        </iframe>
      </div>
      <p className="mb-20 text-xl text-stone-700">Pesan dikirim pada 23 November 2024</p>
      <div className="flex flex-col justify-center items-center gap-2">
        <p>Ungkapkan rasa tanpa nama, biarkan hati yang berbicara.</p>
        <Link href='/send' className="py-4 px-8 bg-stone-900 text-stone-100 rounded-xl">
          Ungkapkan Rasa
        </Link>
      </div>
    </section>
  );
}
