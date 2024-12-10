import Link from "next/link";

export default function Hero() {
  return (
    <section className='relative h-screen flex flex-col justify-center'>
      <h1 className='-mt-12 mb-6 text-4xl font-bold md:text-8xl md:max-w-[1070px]'>
        Ungkapkan rasa tanpa nama, biarkan hati yang berbicara.
      </h1>
      <div className='flex items-center gap-6'>
        <Link
          href='/send'
          className='py-4 px-8 bg-stone-900 text-stone-100 rounded-xl hover:bg-stone-700 active:bg-stone-500'
        >
          Ungkapkan Rasa
        </Link>
        <Link
          href='/send'
          className='py-4 px-8 bg-stone-100 border-stone-900 border-[3px] rounded-xl hover:bg-stone-900 hover:text-stone-100'
        >
          Sawer Kami dong :)
        </Link>
      </div>

      <div className='hidden absolute top-1/2 right-0 -translate-y-1/2 translate-x-20 -rotate-[30deg] lg:block'>
        <div
          className={`p-6 h-[410px] flex flex-col justify-between w-full bg-yellow-200 max-w-[350px] shadow-lg`}
        >
          <div className='w-full overflow-hidden'>
            <div className='mb-4 text-3xl w-full line-clamp-4 leading-relaxed md:text-5xl'>
              Hi! kamu yang disana
            </div>
            <p className='mb-4'>Untuk Seseorang</p>
          </div>
          <div className='p-4 max-w-full overflow-hidden flex gap-6 items-center bg-stone-100 rounded-lg'>
            <div className='h-16 min-w-16 max-w-16 overflow-hidden rounded-lg bg-stone-50'></div>
            <div className='overflow-hidden max-w-full'>
              <h3 className='font-bold w-full line-clamp-1 md:text-2xl'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel,
                ipsum!
              </h3>
              <p>Someone</p>
            </div>
          </div>
        </div>
      </div>
      <div className='hidden absolute translate-y-32 bottom-0 right-96 lg:block'>
        <div
          className={`p-6 h-[410px] flex flex-col justify-between w-full bg-lime-200 max-w-[350px] shadow-lg`}
        >
          <div className='w-full overflow-hidden'>
            <div className='mb-4 text-3xl w-full line-clamp-4 leading-relaxed md:text-5xl'>
              Hi! kamu yang disana
            </div>
            <p className='mb-4'>Untuk Seseorang</p>
          </div>
          <div className='p-4 max-w-full overflow-hidden flex gap-6 items-center bg-stone-100 rounded-lg'>
            <div className='h-16 min-w-16 max-w-16 overflow-hidden rounded-lg bg-stone-50'></div>
            <div className='overflow-hidden max-w-full'>
              <h3 className='font-bold w-full line-clamp-1 md:text-2xl'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel,
                ipsum!
              </h3>
              <p>Someone</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
