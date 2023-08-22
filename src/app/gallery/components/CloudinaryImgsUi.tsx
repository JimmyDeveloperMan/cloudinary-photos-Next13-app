"use client";

import { CldImage } from "next-cloudinary";

export default function CloudinaryImgsUi(props: any) {
  return <CldImage {...props} className=""/>;
}
