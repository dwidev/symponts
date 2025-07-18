import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash2Icon } from "lucide-react";
import { useState } from "react";

export function DeleteRecentsDialog() {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="bg-delete w-6 h-6 rounded-sm"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <Trash2Icon className="w-4 h-4 text-white" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Apakah kamu yakin ingin menghapus?</DialogTitle>
            <DialogDescription>
              Tindakan ini tidak dapat dibatalkan. Tindakan ini akan menghapus
              data Anda secara permanen.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Batal</Button>
            </DialogClose>
            <Button
              variant="ghost"
              className="bg-delete text-white"
              onClick={() => setOpen(false)}
            >
              Hapus
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
