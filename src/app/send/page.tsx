"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Send() {
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");
  const [tracks, setTracks] = useState([]);
  const [recipient, setRecipient] = useState("");
  const [postTrack, setPostTrack] = useState({});
  const router = useRouter();

  async function searchSong() {
    const data = await axios.get(`http://localhost:3000/api/search-song?search=${search}`)
    setTracks(data.data);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!description) return alert("Please enter a description");

    try {
      const res = await axios.post("http://localhost:3000/api/send-song", {
        recipient,
        id_track: postTrack.id,
        description,
      });

      if (res.data.status === 200) router.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className="mt-24 mx-auto max-w-[814px] p-6 md:px-24">
      <h1 className="mb-12 text-4xl font-bold md:text-8xl">Ungkapkan</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6 flex flex-col gap-2">
          <label>Nama Penerima</label>
          <input
            type='text'
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="py-4 px-8 rounded-lg bg-stone-100 border-stone-900 border-[3px]"
            placeholder="Teruntuk"
          />
        </div>
        <div className="mb-6 flex flex-col gap-2">
          <label>Deskripsi</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="py-4 px-8 resize-none h-60 rounded-lg bg-stone-100 border-stone-900 border-[3px]"
            placeholder="Isi ungkapanmu disini..."
          />
        </div>
        <div className="mb-6 flex flex-col gap-2">
          <label>Lagu</label>
          <input
            type="text"
            placeholder="Cari Lagu"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="py-4 px-8 rounded-lg bg-stone-100 border-stone-900 border-[3px]"
          />
          <button type="button" onClick={searchSong} className="py-4 px-8 border-stone-900 border-[3px] rounded-lg hover:bg-stone-900 hover:text-stone-100">Cari Lagu</button>
        </div>
        {tracks.length > 0 && (
          <>
            <div className="">
              <div className="flex items-center gap-6">
                <h2>Judul Terpilih:</h2>
                <button type="button">
                  {postTrack ? postTrack.name : "Pilih Track"}
                </button>
              </div>
              <ul className="mb-6 bg-white border mt-2 rounded shadow-lg max-h-60 overflow-y-auto w-full">
                {tracks.map((track) => (
                  <li
                    key={track.id}
                    className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => setPostTrack(track)}
                  >
                    <img src={track.album.images[0].url} alt={track.name} width={40} height={40} className="mr-2 rounded" />
                    <span>{track.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
        <button type='submit' className="w-full py-4 px-8 bg-stone-900 text-stone-100 rounded-lg">Kirim Ungkapan</button>
      </form>

    </section>
  );
}

export default Send;