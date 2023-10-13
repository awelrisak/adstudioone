import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="px-6 py-3 mx-auto max-w-2xl">
      <h1 className="text-lg md:text-xl lg:text-2xl text-lime-400 font-bold tracking-tight flex items-center gap-4">
        <div className="relative w-9 h-9 md:w-14 md:h-14 rounded-full">
          <Image
            src="/logo.jpg"
            alt="logo"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <Link href="/">Ad Studio One</Link>
      </h1>
    </header>
  );
}
