"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import FileDropZone from "@/components/FileDropZone";

import Resizer from "react-image-file-resizer";

export default function FilePreviewer() {
  const [actualImage, setActualImage] = useState("");
  const [resizedImage, setResizedImage] = useState("");
  const [isResizingImage, setIsResizingImage] = useState(false);
  const [imageResizeError, setImageResizeError] = useState("");
  


  const handleImageChange = (event) => {
    event.preventDefault();
    const file = event.target.files?.[0] || event.dataTransfer?.files?.[0]
    
    if(file){
      const fileType = file.type.split("/")?.[1]
      //generate image url
      const imageURL = URL.createObjectURL(file);
      setActualImage(imageURL)
      //resize image
      
      try{
        Resizer.imageFileResizer(
          file,
          390,
          75,
          fileType,
          100,
          0,
          (uri) => {
            setResizedImage(uri);            
           },
        );
      } catch(error){
        console.log(error)
        setImageResizeError(error?.message || JSON.stringify(error))
      }
                
     }
    
    
  };
  

  return (
    <div className="relative min-h-screen max-w-7xl mx-auto flex flex-col gap-7 md:gap-10 ">
      <FileDropZone 
         handleImageChange={handleImageChange}         
        />
      
      <p
        className="text-white text-lg"
      >
        
      </p>
      
     { 
       (actualImage && resizedImage) && (
          <div
            className="flex flex-col gap-11"
          >
             <div
        className="flex flex-col gap-3 w-[390px]"
      >
        <div
        className="relative bg-gray-6 border border-lime-500 w-[390px] h-[75px]"
      >
         <Image         
         src={actualImage}
           alt="acrual image"
           fill
           className="object-contain"
          />
        </div> 
        <p
          className="text-sm tracking-tight text-[#F5F5F5]"
        >
          When the image looks smaller, it's like a magic trick! But the picture's true size doesn't change. On screens with fewer <a href="https://elad.medium.com/understanding-the-difference-between-css-resolution-and-device-resolution-28acae23da0b" target="_blanket" className="font-bold text-lime-300">pixel density</a>, little things might not look very clear. On screens with high density pixels you can still see all the small details.

        </p>
      </div>
      
       <div
        className="flex flex-col gap-3 w-[390px]"
      >
        <div
        className="relative bg-gray-6 border border-lime-500 w-[390px] h-[75px]"
      >
         <Image         
           src={resizedImage}
           alt="acrual image"
           fill
           className="object-contain"
          />
        </div> 
        <p
          className="text-white"
        >
           The image is made truly smaller, like resizing a drawing. This helps show how a picture might not look very sharp on screens with fewer pixel density.
           
        </p>
      </div>
          </div>
       )
     }
            
    </div>
  );
}
