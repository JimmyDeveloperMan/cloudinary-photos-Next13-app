"use client";
import { CldImage } from "next-cloudinary";
import { useState } from "react";


export default function Home() {
  // const [imgId, setImgId] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
{/*      
      {imgId && (
        <CldImage
          width="400"
          height="300"
          src={imgId}
          sizes="100vw"
          alt="Description of my image"
        /> */}
      {/* )} */}
    </main>
  );
}
