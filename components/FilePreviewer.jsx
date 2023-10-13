"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import FileDropZone from "@/components/FileDropZone";

export default function FilePreviewer() {
  const [image, setImage] = useState("");
  const [width, setWidth] = useState(375);

  const handleDrop = (event) => {
    event.preventDefault();
    if (event.dataTransfer?.files?.[0]) {
      const imageURL = URL.createObjectURL(event.dataTransfer?.files?.[0]);
      setImage(imageURL);
    }
  };

  const handleChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };

  const handleSlideChange = (event) => {
    setWidth(event.target.value);
  };

  return (
    <div className="relative min-h-screen max-w-7xl mx-auto flex flex-col gap-7 md:gap-10 ">
      <FileDropZone handleChange={handleChange} handleDrop={handleDrop} />

      {image && (
        <div className="relative flex w-fit gap-4 h-[75px]">
          <div className="flex gap-1 h-[100%]">
            <p className="flex h-full items-center justify-center font-bold text-neutral-600">
              75px
            </p>
            <div className="w-0.5 h-full bg-neutral-800" />
          </div>

          <div className="relative h-[75px]" style={{ width: `${width}px` }}>
            <Image src={image} alt="your design image" fill />
          </div>
        </div>
      )}
      {image && (
        <div className="flex gap-2 items-center">
          <span className="text-white text-base font-semibold tracking-tight">
            0
          </span>
          <input
            type="range"
            min="0"
            max="1024"
            value={width}
            onChange={handleSlideChange}
            className="slider w-[100%] grow cursor-pointer "
          />
          <span className="text-white text-base font-semibold tracking-tight">
            1024
          </span>
        </div>
      )}
    </div>
  );
}
