import cloudinary from "cloudinary";
import CloudinaryImgsUi from "../gallery/components/CloudinaryImgsUi";
import { SearchResult } from "../../../type";
import ForceRefresh from "@/components/ForceRefresh";

export default async function FavoritePage() {
  // fetch all gallerys from a cloudy server
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags:favorite ")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(10)
    .execute()) as { resources: SearchResult[] };
  // console.log(results.resources);

  return (
    <>
      <section>
        <ForceRefresh />
        <div className="flex flex-col gap-8">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold">Favorites</h1>
          </div>
          <div className="grid grid-cols-4 gap-4 ">
            {results.resources.map((el, i) => {
              return (
                <CloudinaryImgsUi
                  path={"favorites"}
                  imgData={el}
                  key={el.public_id}
                  src={el.public_id}
                  alt={el.public_id}
                  width="400"
                  height="300"
                  sizes="100vw"
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
