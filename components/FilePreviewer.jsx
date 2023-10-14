"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import FileDropZone from "@/components/FileDropZone";

import Resizer from "react-image-file-resizer";

export default function FilePreviewer() {
  const [actualImage, setActualImage] = useState("");  
  const [resizedImage, setResizedImage] = useState("");
  const [isResizingImage, setIsResizingImage] = useState(false);
  const [error, setError] = useState("");
  


  const handleImageChange = (event) => {
    event.preventDefault();
    const file = event.target.files?.[0] || event.dataTransfer?.files?.[0]
    
    if(!file){
       setError("Please select image file.");
       return
    }
    
    if(!file?.type?.includes("image")){
      setError("Please select image file.");
      return
    }
    
      const fileType = file.type.split("/")?.[1]
      
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
        setError(error?.message || JSON.stringify(error))
      }
                
     
       
  };
  

  return (
    <>
    {
      error && (
        <div className="z-9999 mx-auto absolute top-3 w-[90%] flex items-center p-4 mb-4 bg-gray-800 text-red-400" role="alert">
  <svg className="flex-shrink-0 w-4 h-4" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span className="sr-only">Error</span>
  <div className="ml-3 text-sm font-medium">
    { error }
  </div>
  <button 
   onClick={() => setError("")}
  type="button" className="ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 inline-flex items-center justify-center h-8 w-8 bg-gray-800 text-red-400 hover:bg-gray-700" data-dismiss-target="#alert-2" ariaLabel="Close">
    <span className="sr-only">Close</span>
    <svg className="w-3 h-3" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
    </svg>
  </button>
</div>

      )
    }
  <div className="mt-5 relative flex flex-col gap-5 md:gap-10 ">
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
            className="mx-auto flex flex-wrap gap-10"
          >
          <div
        className="flex flex-col gap-3 w-[390px]"
      >
        
        <div
        className="relative bg-gray-6 border border-lime-500 w-[390px] h-[75px]"
      >
         <Image         
           src={actualImage}
           alt="actual image"
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
    </>
  );
}
