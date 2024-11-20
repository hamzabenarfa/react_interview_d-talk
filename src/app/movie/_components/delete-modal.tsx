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
import { useState } from "react";
import moviesService from "@/service/movies.service";
import { useDispatch } from "react-redux";

interface DeleteModalProps {
  movieTitle: string;
  id: string;
}

const DeleteModal = ({ movieTitle, id }: DeleteModalProps) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = async () => {
    try {
      await moviesService.deleteMovieById(dispatch, id); // Delete the movie
      setOpen(false); // Close the modal after successful deletion
    } catch (error) {
      console.error("Failed to delete movie:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button size="icon" variant="destructive" >
          <Trash2 className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Deletion</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Are you sure you want to delete the movie : &quot;{movieTitle}&quot;?
        </DialogDescription>
        <div className="mt-4 flex justify-between gap-4">
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
