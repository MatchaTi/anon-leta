"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  async function searchRecipient(e: React.FormEvent) {
    e.preventDefault();

    router.push(`/search?q=${search}`);
  }

  return (
    <nav className='mx-auto p-6 flex items-center gap-6 absolute top-0 left-0 right-0 z-10 max-w-[2000px] lg:px-24 lg:grid lg:grid-cols-12 '>
      <Link href='/' className='flex items-center gap-6 text-2xl font-bold'>
        <span>AnonLeta.</span>
      </Link>
      <form
        action=''
        onSubmit={searchRecipient}
        className='w-full lg:col-start-4 lg:col-span-6'
      >
        <input
          type='text'
          className='w-full py-4 px-8 rounded-full bg-stone-100 border-stone-900 border-[3px]'
          placeholder='Cari penerima...'
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div className='hidden w-full col-span-3 items-center gap-12 justify-end lg:flex'>
        <Link
          href='/send'
          className='flex items-center gap-6 text-2xl font-bold'
        >
          Ungkapkan Rasa
        </Link>
        <Link href='/' className='flex items-center gap-6 text-2xl font-bold'>
          Sawer Kami
        </Link>
      </div>
    </nav>
  );
}
