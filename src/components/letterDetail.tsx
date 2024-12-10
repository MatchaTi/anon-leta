"use client";

import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

interface LetterDetailProps {
  recipient: string;
  description: string;
  id_track: string;
  createdAt: string;
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

function hashStringToColor(input: string): string {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = input.charCodeAt(i) + ((hash << 5) - hash);
  }
  const colorIndex = Math.abs(hash) % randomColors.length;
  return randomColors[colorIndex];
}

export default function LetterDetail({
  recipient,
  description,
  id_track,
  createdAt,
}: LetterDetailProps) {
  const [isCopied, setIsCopied] = useState(false);

  const backgroundColor = hashStringToColor(recipient);

  function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  }

  return (
    <section className='mt-24 mx-auto max-w-[814px] p-6'>
      <h1 className='mb-6 text-4xl font-bold md:text-8xl md:mb-12'>
        Hai, {recipient}
      </h1>
      <p className='mb-6 lg:text-2xl'>
        Ada seseorang yang mengirim untukmu sebuah pesan dan lagu, mereka ingin
        kamu untuk membaca dan mendengar lagunya yang mungkin relate :)
      </p>
      <div className={`mb-6 p-8 shadow-xl ${backgroundColor}`}>
        <p className='mb-4 text-3xl md:text-5xl'>{description}</p>
        <iframe
          src={`https://open.spotify.com/embed/track/${id_track}?utm_source=generator`}
          width='100%'
          height='352'
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          loading='lazy'
        ></iframe>
      </div>
      <p className='mb-20 text-xl text-stone-700'>
        Pesan dikirim pada {formatDate(createdAt)}
      </p>
      <div className='flex flex-col justify-center items-center gap-2'>
        <p>Ungkapkan rasa tanpa nama, biarkan hati yang berbicara.</p>
        <Link
          href='/send'
          className='py-4 px-8 bg-stone-900 text-stone-100 rounded-xl hover:bg-stone-700 active:bg-stone-500'
        >
          Ungkapkan Rasa
        </Link>
        <button
          type='button'
          disabled={isCopied}
          onClick={copyLink}
          className={`${
            isCopied && "cursor-not-allowed"
          } py-3 px-6 border-2 border-stone-900 bg-stone-100 rounded-xl hover:bg-stone-900 hover:text-stone-100`}
        >
          {isCopied ? "Link disalin!" : "Bagikan Pesan"}
        </button>
      </div>
    </section>
  );
}
