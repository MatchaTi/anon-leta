"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Send() {
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");
  const [tracks, setTracks] = useState([]);
  const [recipient, setRecipient] = useState("");
  const [id_track, setId_track] = useState("");
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
        id_track,
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
          <button type="button" onClick={searchSong} className="py-4 px-8 border-stone-900 border-[3px] rounded-lg">Cari Lagu</button>
        </div>
        {tracks.length > 0 && (
          <>
            <h2>Tracks</h2>
            <select
              className="placeholder:text-black text-blue-500"
              onChange={(e) => {
                const selectedId = e.target.value;
                if (selectedId) {
                  setId_track(selectedId);
                }
              }}
            >
              <option value="">Pilih Track</option>
              {tracks.map((track) => (
                <option key={track.id} value={track.id} className="text-black">
                  {track.name}
                </option>
              ))}
            </select>
          </>
        )}
        <button type='submit' className="w-full py-4 px-8 bg-stone-900 text-stone-100 rounded-lg">Kirim Ungkapan</button>
      </form>

    </section>
  );
}

export default Send;
