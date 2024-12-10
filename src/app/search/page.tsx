import PostCard from "@/components/postCard";
import { ILetter } from "@/types/letter";
import axios from "axios";

async function getSearchRecipient(search?: string) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/search-recipient?q=${search}`
    );
    return response.data;
  } catch (error) {
    console.error(error, "error page search cuyy");
  }
}

export default async function Search(props: {
  searchParams?: Promise<{
    q: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const result: ILetter[] = await getSearchRecipient(searchParams?.q);
  console.log(result, "result cuyyy");
  return (
    <section className='mt-24 mx-auto max-w-[814px] p-6'>
      <h1 className='mb-12 text-4xl font-bold md:text-8xl'>
        {searchParams?.q}
      </h1>
      <section className='grid gap-8 place-items-center sm:grid-cols-2 '>
        {result.length > 0 ? (
          result.map(({ _id, recipient, description, id_track }) => (
            <PostCard
              key={_id}
              idLetter={_id}
              recipient={recipient}
              description={description}
              idTrack={id_track}
            />
          ))
        ) : (
          <div>Penerima tidak ditemukan :(</div>
        )}
      </section>
    </section>
  );
}
