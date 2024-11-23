interface IPostCard {
  background?: string;
  description: string;
  recipient: string;
  image: string;
  titleSong: string;
  artist: string;
}

export default function PostCard({ background = "bg-yellow-200", description, recipient, image, titleSong, artist }: IPostCard) {
  return (
    <div className={`p-6 w-[350px] ${background} shadow-lg`}>
      <p className="mb-4 text-5xl leading-relaxed">{description}</p>
      <p className="mb-4">{recipient}</p>
      <div className="p-4 flex gap-6 items-center bg-stone-100 rounded-lg">
        <div className="h-16 aspect-square overflow-hidden rounded-lg bg-stone-50">gambar</div>
        <div>
          <h3 className="text-2xl font-bold">{titleSong}</h3>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
}
