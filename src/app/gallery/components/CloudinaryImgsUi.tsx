"use client";
import { CldImage } from "next-cloudinary";
import { Heart } from "lucide-react";

import { useEffect, useState, useTransition } from "react";
import { SearchResult } from "../../../../type";
import { setAsFavoriteAction } from "./Actions";
import { useRouter } from "next/navigation";

export default function CloudinaryImgsUi(
  props: any & { imgData: SearchResult; path: string }
) {
  const { imgData } = props;

  const [transition, startTransition] = useTransition();

  const isFavorited = imgData.tags.includes("favorite");
  console.log(imgData);

  return (
    <div className="relative">
      <CldImage {...props} className="" />

      <Heart
        className={`absolute top-2 right-2 hover:text-red-500 cursor-pointer transition ${
          isFavorited ? "text-red-500" : "text-white"
        }`}
        onClick={() => {
          startTransition(() => {
            setAsFavoriteAction(imgData.public_id, !isFavorited, props.path);
          });
        }}
      />
    </div>
  );
}
