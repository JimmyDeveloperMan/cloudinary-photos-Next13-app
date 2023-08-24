import { Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AddToAlbumDialog } from "./AddToAlbumDialog";
import { SearchResult } from "../../type";
import { useState } from "react";

export default function ImageMenu({ image }: { image: SearchResult }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          {/* <Button variant="outline"> */}
          <Menu />
          {/* </Button> */}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-fit">
          <DropdownMenuItem
            asChild
            className="cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <AddToAlbumDialog image={image} onClose={()=>setOpen(false)} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
// explane this asChild ?
