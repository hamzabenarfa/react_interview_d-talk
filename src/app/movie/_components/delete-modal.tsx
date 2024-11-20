"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useDeleteMovie } from "@/hooks/use-movies";
import { useState } from "react";

interface DeleteModalProps {
  movieTitle: string;
  id: string;
}

const DeleteModal = ({ movieTitle, id }: DeleteModalProps) => {
  const { mutate: deleteMovie } = useDeleteMovie();
  const [open, setOpen] = useState(false);

  const onDelete = () => {
    deleteMovie(id);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button size="icon" variant="destructive">
          <Trash2 className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Deletion</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Are you sure you want to delete the movie "{movieTitle}"?
        </DialogDescription>
        <div className="mt-4 flex justify-between gap-4">
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={onDelete}>
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
