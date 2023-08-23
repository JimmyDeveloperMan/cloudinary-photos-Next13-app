"use server";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

export async function setAsFavoriteAction(
  publicId: string,
  isFavorited: boolean,
  path: string
) {
  console.log(isFavorited);

  if (isFavorited) {
    await cloudinary.v2.uploader.add_tag("favorite", [publicId]);
  } else {
    await cloudinary.v2.uploader.remove_tag("favorite", [publicId]);
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  revalidatePath(path);
}
