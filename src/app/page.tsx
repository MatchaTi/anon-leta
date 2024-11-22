import Post from "@/types/post";
import axios from "axios";

async function getPosts() {
  const response = await axios.get("http://localhost:3000/api/send-song");
  return response.data;
}

export default async function Home() {
  const posts: Post = await getPosts();
  console.log(posts);
  return (
    <div className=''>
      {posts.posts.map(({ _id, description }) => (
        <div key={_id}>{description}</div>
      ))}
    </div>
  );
}
