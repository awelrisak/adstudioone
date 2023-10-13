import Image from "next/image";

import FilePreviewer from "@/components/FilePreviewer";

export default function Home() {
  return (
    <div>
      <h2 className="text-white text-xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
        Explore image display.
      </h2>
      <p className="mb-4 text-gray-300 tracking-tight font-light md:text-lg lg:text-xl">
        Discover How Your Images Appear Across Resolutions, from Low Pixel Density to High.
      </p>

      <FilePreviewer />
    </div>
  );
}
