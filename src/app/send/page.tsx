"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import Image from "next/image";

function Send() {
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");
  const [tracks, setTracks] = useState([]);
  const [recipient, setRecipient] = useState("");
  const [id_track, setId_track] = useState("");
  const router = useRouter();

  async function searchSong() {
    const data = await axios.get(`http://localhost:3000/api/search-song?search=${search}`)
    console.log(data.data);
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
      console.log(res.data);

      if (res.data.status === 200) router.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Send Song</h1>
      <input
        type="text"
        placeholder="Search Song"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="placeholder:text-black text-blue-500"
      />
      <button onClick={searchSong}>Search</button>
      <form onSubmit={handleSubmit}>
        <h2>Name</h2>
        <input
          type='text'
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="placeholder:text-black text-blue-500"
        />
        <h2>Description</h2>
        <input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="placeholder:text-black text-blue-500"
        />
        <button type='submit'>Send</button>
      </form>

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
    </div>
  );
}

export default Send;
