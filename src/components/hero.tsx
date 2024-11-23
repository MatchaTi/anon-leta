import Link from 'next/link'
import PostCard from './postCard'

export default function Hero() {
  return (
    <section className="relative p-6 h-screen flex flex-col justify-center md:px-24">
      <p className="text-8xl">"</p>
      <h1 className="-mt-12 mb-6 text-4xl font-bold md:text-8xl md:max-w-[1070px]">Ungkapkan rasa tanpa nama, biarkan hati yang berbicara.</h1>
      <div className="flex items-center gap-6">
        <Link href='/send' className="py-4 px-8 bg-stone-900 text-stone-100 rounded-xl">
          Ungkapkan Rasa
        </Link>
        <Link href='/send' className="py-4 px-8 bg-stone-100 border-stone-900 border-[3px] rounded-xl">
          Sawer Kami dong :)
        </Link>
      </div>
      <div className="hidden absolute top-1/2 right-0 -translate-y-1/2 translate-x-20 -rotate-[30deg] md:block">
        <PostCard background="bg-lime-200" description="Halo kamu yang ada disana" recipient="Raana" image="gambar" titleSong="Algernon" artist="Yorushika" />
      </div>
      <div className="hidden absolute translate-y-32 bottom-0 right-96 md:block">
        <PostCard description="Halo kamu yang ada disana" recipient="Raana" image="gambar" titleSong="Algernon" artist="Yorushika" />
      </div>
    </section>
  )
}
