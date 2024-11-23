import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mx-auto p-6 absolute top-0 left-0 right-0 max-w-[2000px] md:px-24 bg-red-500">
      <Link href='/' className="flex items-center gap-6 text-2xl font-bold">
        <span>Anon Leta</span>
      </Link>
    </nav>
  )
}
