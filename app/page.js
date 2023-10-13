import Image from "next/image";

import FilePreviewer from "@/components/FilePreviewer";

export default function Home() {
  return (
    <div>
      <h2 className="text-white text-xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
        Preview <span className="text-lime-400">banner</span> design.
      </h2>
      <p className="mb-4 text-gray-300 tracking-tight font-light md:text-lg lg:text-xl">
        Pick a picture and see how it looks when it's big or small.
      </p>

      <FilePreviewer />
    </div>
  );
}
