"use client";
import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import { useState } from "react";
import { cva } from "class-variance-authority";

export default function EditPage({
  searchParams: { publicId },
}: {
  searchParams: { publicId: string };
}) {
  const [transformation, setTransformation] = useState<
    | undefined
    | "generative-fill"
    | "blur"
    | `removeBackground`
    | "pixelate"
    | "gray"
  >();

  return (
    <section>
      <div className="flex flex-col gap-8 ">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Edit {publicId}</h1>
        </div>
        <div className="flex gap-4">
          <Button onClick={() => setTransformation("generative-fill")}>
            Generative Fill
          </Button>
          <Button onClick={() => setTransformation("removeBackground")}>
            Remove Background
          </Button>
          <Button onClick={() => setTransformation("gray")}>Gray Scale</Button>
          <Button onClick={() => setTransformation("pixelate")}>
            Pixelate
          </Button>
          <Button onClick={() => setTransformation("blur")}>Blur</Button>
          <Button variant="ghost" onClick={() => setTransformation(undefined)}>
            Clear All
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div>
            <CldImage src={publicId} alt={publicId} width={500} height={500} />
          </div>
          {transformation === "generative-fill" && (
            <div>
              <CldImage
                src={publicId}
                alt={publicId}
                width={500}
                height={500}
                crop="pad"
                fillBackground
              />
            </div>
          )}
          {transformation === "blur" && (
            <div>
              <CldImage
                src={publicId}
                alt={publicId}
                width={500}
                height={500}
                crop="pad"
                blur={"300"}
              />
            </div>
          )}
          {transformation === "removeBackground" && (
            <div>
              <CldImage
                src={publicId}
                alt={publicId}
                width={500}
                height={500}
                removeBackground
              />
            </div>
          )}
          {transformation === "gray" && (
            <div>
              <CldImage
                src={publicId}
                alt={publicId}
                width={500}
                height={500}
                grayscale
              />
            </div>
          )}
          {transformation === "pixelate" && (
            <div>
              <CldImage
                src={publicId}
                alt={publicId}
                width={500}
                height={500}
                pixelate
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
