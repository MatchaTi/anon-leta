"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");

  async function searchRecipient(e: React.FormEvent) {
    e.preventDefault();

    const params = new URLSearchParams(searchParams);

    if (search) {
      params.set("q", search);
    } else {
      params.delete("q");
    }

    router.push(`/search?q=${search}`);
  }

  return (
    <nav className='mx-auto p-6 flex items-center justify-between gap-6 absolute top-0 left-0 right-0 z-10 max-w-[2000px] lg:px-24'>
      <Link href='/' className='flex items-center gap-6 text-2xl font-bold'>
        <span>AnonLeta.</span>
      </Link>
      <form action='' onSubmit={searchRecipient} className='w-full'>
        <input
          type='text'
          className='w-full py-4 px-8 rounded-full bg-stone-100 border-stone-900 border-[3px]'
          placeholder='Cari penerima...'
          onChange={(e) => setSearch(e.target.value)}
          defaultValue={searchParams.get("search")?.toString()}
        />
      </form>
      <div className='w-full hidden items-center gap-4 justify-end lg:flex'>
        <Link
          href='/send'
          className='flex items-center gap-6 text-2xl font-bold'
        >
          <span>Ungkapkan Rasa</span>
        </Link>
        <Link href='/' className='flex items-center gap-6 text-2xl font-bold'>
          <span>Sawer Kami</span>
        </Link>
      </div>
    </nav>
  );
}
