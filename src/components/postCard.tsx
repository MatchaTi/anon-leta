import Image from "next/image";
import Link from "next/link";

function cn(...cns: Array<string>) {
  return cns.join(' ');
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

const postCardStyles = () => {
  const randomColor = randomColors[Math.floor(Math.random() * randomColors.length)];

  return cn(randomColor);
}

interface IPostCard {
  description: string;
  recipient: string;
  image: string;
  titleSong: string;
  artist: string;
  link: string;
}

export default function PostCard({ description, recipient, image, titleSong, artist, link }: IPostCard) {
  return (
    <div className={`p-6 h-[410px] flex flex-col justify-between w-full ${postCardStyles()} max-w-[350px] shadow-lg`}>
      <div className="w-full overflow-hidden">
        <Link href={`${link ? '/letter/' + link : '/'}`} className="mb-4 w-full text-3xl leading-relaxed text-balance md:text-5xl">{description}</Link>
        <p className="mb-4">Untuk {recipient}</p>
      </div>
      <Link href={`${link ? '/letter/' + link : '/'}`} className="p-4 flex gap-6 items-center bg-stone-100 rounded-lg">
        <div className="h-16 min-w-16 max-w-16 overflow-hidden rounded-lg bg-stone-50">
          <img src={image ? image : ""} alt="gambar" className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="font-bold md:text-2xl">{titleSong}</h3>
          <p>{artist}</p>
        </div>
      </Link>
    </div>
  );
}
