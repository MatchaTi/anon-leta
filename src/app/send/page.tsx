"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

type IPostTrack = {
  id: string;
  name: string;
  album: {
    images: Array<{
      url: string;
    }>;
  };
};

function Send() {
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [tracks, setTracks] = useState<Array<IPostTrack>>([]);
  const [recipient, setRecipient] = useState("");
  const [postTrack, setPostTrack] = useState<IPostTrack>({
    id: "",
    name: "",
    album: {
      images: [],
    },
  });
  const router = useRouter();

  async function searchSong() {
    setIsLoading(true);
    const data = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/search-song?search=${search}`
    );
    setTracks(data.data);
    setIsLoading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!description) return alert("Please enter a description");

    try {
      setIsLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/send-song`,
        {
          recipient,
          id_track: postTrack.id,
          description,
        }
      );

      if (res.data.status === 200) router.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className='mt-24 mx-auto max-w-[814px] p-6'>
      <h1 className='mb-12 text-4xl font-bold md:text-8xl'>Ungkapkan</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-6 flex flex-col gap-2'>
          <label>Nama Penerima</label>
          <input
            type='text'
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className='py-4 px-8 rounded-lg bg-stone-100 border-stone-900 border-[3px]'
            placeholder='Teruntuk'
            required
          />
        </div>
        <div className='mb-6 flex flex-col gap-2'>
          <label>Deskripsi</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='py-4 px-8 resize-none h-60 rounded-lg bg-stone-100 border-stone-900 border-[3px]'
            placeholder='Isi ungkapanmu disini...'
            required
          />
        </div>
        <div className='mb-6 flex flex-col gap-2'>
          <label>Lagu</label>
          <input
            type='text'
            placeholder='Cari Lagu'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='py-4 px-8 rounded-lg bg-stone-100 border-stone-900 border-[3px]'
          />
          <button
            type='button'
            onClick={searchSong}
            disabled={isLoading || !search}
            className={`${
              (!search || isLoading) && "cursor-not-allowed"
            } py-4 px-8 border-stone-900 border-[3px] rounded-lg hover:bg-stone-900 hover:text-stone-100`}
          >
            {isLoading ? "Loading..." : "Cari lagu"}
          </button>
        </div>
        {tracks.length > 0 && (
          <>
            <div className=''>
              <div className='flex items-center gap-6'>
                <h2>Judul Terpilih:</h2>
                <button type='button'>
                  {postTrack ? postTrack.name : "Pilih Track"}
                </button>
              </div>
              <ul className='mb-6 bg-white border mt-2 rounded shadow-lg max-h-60 overflow-y-auto w-full'>
                {tracks.map((track) => (
                  <li
                    key={track.id}
                    className='flex items-center p-2 hover:bg-gray-200 cursor-pointer'
                    onClick={() => setPostTrack(track)}
                  >
                    <img
                      src={track.album.images[0].url}
                      alt={track.name}
                      width={40}
                      height={40}
                      className='mr-2 rounded'
                    />
                    <span>{track.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
        <button
          type='submit'
          disabled={!postTrack.id || isLoading}
          className={`${
            (!postTrack.id || isLoading) && "cursor-not-allowed"
          } w-full py-4 px-8 bg-stone-900 text-stone-100 rounded-lg`}
        >
          {!postTrack.id ? "Pilih lagu" : isLoading ? "Loading..." : "Kirim"}
        </button>
      </form>
    </section>
  );
}

export default Send;
