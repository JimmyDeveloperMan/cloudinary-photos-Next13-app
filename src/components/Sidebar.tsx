import React from "react";
import { Button } from "./ui/button";
import { Folder, Heart, Image as Images, Trash } from "lucide-react";
import Link from "next/link";
export default function Sidebar() {
  return (
    <div className={" w-1/4 pb-12  border-r border-slate-300"}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <div className="space-y-1">
            <Button asChild
              variant="secondary"
              className="w-full justify-start FLEX gap-2"
            >
              <Link href="/gallery">
                <Images />
                Gallery
              </Link>
            </Button>
            <Button asChild variant="ghost" className="w-full justify-start FLEX gap-2">
              <Link href="/albums">
                <Folder />
                Albums
              </Link>
            </Button>
            <Button asChild variant="ghost" className="w-full justify-start FLEX gap-2">
              <Link href="/favorites">
                <Heart />
                Favorites
              </Link>
            </Button>
            <Button  variant="ghost" className="w-full justify-start FLEX gap-2">
              <Trash />
              Deleted
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
