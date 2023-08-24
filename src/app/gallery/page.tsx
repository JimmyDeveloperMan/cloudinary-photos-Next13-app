import cloudinary from "cloudinary";
import UploadButton from "./components/UploadButton";
import { SearchResult } from "../../../type";
import ImageGrid from "@/components/ImageGrid";
import CloudinaryImgsUi from "../../components/CloudinaryImgsUi";
import GalleryGrid from "./components/GalleryGrid";

export default async function GalleryPage() {
  // fetch all gallerys from a cloudy server
  const results = (await cloudinary.v2.search
    .expression("resource_type:image ")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(50)
    .execute()) as { resources: SearchResult[] };

  return (
    <>
      <section>
        <div className="flex flex-col gap-8 ">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold">gallery</h1>
            <UploadButton />
          </div>
          <GalleryGrid images={results.resources} />
          {/* <ImageGrid
            images={results.resources}
            getImage={(imageData: SearchResult) => {
              return (
                <CloudinaryImgsUi
                  key={imageData.public_id}
                  alt={imageData.public_id}
                  imgData={imageData}
                  width="400"
                  height="300"
                  sizes="100vw"
                />
              );
            }}
          /> */}
        </div>
      </section>
    </>
  );
}
