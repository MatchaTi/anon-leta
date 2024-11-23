import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Post from "@/types/post";
import axios from "axios";
import Link from "next/link";

async function getPosts() {
  const response = await axios.get("http://localhost:3000/api/send-song");
  return response.data;
}

export default async function Home() {
  const posts: Post = await getPosts();
  console.log(posts);
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Hero />
      <Link href='/send'>Send</Link>

      {posts.posts.map(({ _id, recipient, id_track, description }) => (
        <div key={_id}>
          <h2>{description}</h2>
          <p>{recipient}</p>
          <iframe key={_id}
            src={`https://open.spotify.com/embed/track/${id_track}?utm_source=generator`}
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
          </iframe>
        </div>
      ))}
    </div>
  );
}
