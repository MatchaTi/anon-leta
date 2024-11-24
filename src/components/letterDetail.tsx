
import Link from 'next/link';

function cn(...cns: Array<string>) {
  return cns.join(' ');
}

interface LetterDetailProps {
  recipient: string;
  description: string;
  id_track: string;
  bgColor?: string;
}

const randomColors = [
  "bg-red-200",
  "bg-yellow-200",
  "bg-green-200",
  "bg-blue-200",
  "bg-purple-200",
  "bg-pink-200",
  "bg-orange-200",
  "bg-cyan-200",
  "bg-lime-200",
  "bg-emerald-200",
  "bg-sky-200",
  "bg-violet-200",
]

const letterDetailStyles = () => {
  const randomColor = randomColors[Math.floor(Math.random() * randomColors.length)];

  return cn(randomColor);
}

export default function LetterDetail({ recipient, description, id_track, bgColor = "bg-red-200" }: LetterDetailProps) {
  return (
    <section className="mt-24 mx-auto max-w-[814px] p-6">
      <h1 className="mb-12 text-4xl font-bold md:text-8xl">Hai, {recipient}</h1>
      <p className="mb-6 text-2xl">Ada seseorang yang mengirim untukmu sebuah pesan dan lagu, mereka ingin kamu untuk membaca dan mendengar lagunya yang mungkin relate :)</p>
      <div className={`mb-6 p-8 shadow-xl ${letterDetailStyles()}`}>
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
