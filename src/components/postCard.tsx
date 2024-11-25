import getSpotifyAccessToken from "@/lib/spotify";
import { cn } from "@/lib/utils";
import axios from "axios";
import Link from "next/link";

export async function getTrackDetails(trackId: string, token: string) {
  try {
    if (!trackId) {
      return {
        name: "Unknown",
        artist: "Unknown",
        image: "",
      };
    }
    const response = await axios.get(
      `https://api.spotify.com/v1/tracks/${trackId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return {
      name: response.data.name,
      artist: response.data.artists[0].name,
      image: response.data.album.images[2]?.url,
    };
  } catch (error) {
    console.error(error);
    return {
      name: "Unknown",
      artist: "Unknown",
      image: "",
    };
  }
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
];

const postCardStyles = () => {
  const randomColor =
    randomColors[Math.floor(Math.random() * randomColors.length)];

  return cn(randomColor);
};

interface IPostCard {
  idLetter: string;
  description: string;
  recipient: string;
  idTrack: string;
}

export default async function PostCard({
  idLetter,
  description,
  recipient,
  idTrack,
}: IPostCard) {
  const accessToken = await getSpotifyAccessToken();
  const trackDetails = await getTrackDetails(idTrack, accessToken);
  return (
    <div
      className={`p-6 h-[410px] flex flex-col justify-between w-full ${postCardStyles()} max-w-[350px] shadow-lg`}
    >
      <div className='w-full overflow-hidden'>
        <Link
          href={`${idLetter ? "/letter/" + idLetter : "/"}`}
          className='block mb-4 w-full max-h-[190px] overflow-hidden text-3xl leading-relaxed hyphens-auto md:text-5xl'
        >
          {description}
        </Link>
        <p className='mb-4'>Untuk {recipient}</p>
      </div>
      <Link
        href={`${idLetter ? "/letter/" + idLetter : "/"}`}
        className='p-4 flex gap-6 items-center bg-stone-100 rounded-lg'
      >
        <div className='h-16 min-w-16 max-w-16 overflow-hidden rounded-lg bg-stone-50'>
          <img
            src={trackDetails.image ? trackDetails.image : "/vercel.svg"}
            alt='gambar'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='overflow-hidden'>
          <h3 className='font-bold text-ellipsis truncate md:text-2xl'>
            {trackDetails.name}
          </h3>
          <p>{trackDetails.artist}</p>
        </div>
      </Link>
    </div>
  );
}
