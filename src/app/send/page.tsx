"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Send() {
  const [description, setDescription] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!description) return alert("Please enter a description");

    try {
      const res = await axios.post("http://localhost:3000/api/send-song", {
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
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}

export default Send;
