import { Movies } from "@/types/movie.type";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Gauge from "./Gauge";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Trash2 } from "lucide-react";

import { useDeleteMovie, useToggleLikeDislike } from "@/hooks/use-movies";


interface MovieCardProps {
  movie: Movies;
}

const MovieCard = ({ movie }: MovieCardProps) => {

  const totalVotes = movie.likes + movie.dislikes;
  const likePercentage = totalVotes > 0 ? (movie.likes / totalVotes) * 100 : 0;

  const { mutate: likeMovie } = useToggleLikeDislike();
  const { mutate: dislikeMovie } = useToggleLikeDislike();
  const { mutate: deleteMovie } = useDeleteMovie();

  const handleLike = () => likeMovie({ movie, action: "like" });
  const handleDislike = () => dislikeMovie({ movie, action: "dislike" });
  const handleDelete = () => deleteMovie(movie.id);

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="flex items-center  justify-between flex-row">
        <div>
          <CardTitle className="text-2xl font-bold">{movie.title}</CardTitle>
          <CardDescription className="text-yellow-400  font-semibold">
            {movie.category}
          </CardDescription>
        </div>
        <Gauge percentage={likePercentage} />
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between gap-2 items-center">
        <div className="gap-1 flex">
          <Button variant="ghost" onClick={handleLike} className="p-2">
            <ThumbsUp className="w-5 h-5" /> <span>{movie.likes} Likes</span>
          </Button>
          <Button variant="ghost" onClick={handleDislike} className="p-2">
            <ThumbsDown className="w-5 h-5" />{" "}
            <span>{movie.dislikes} Dislikes</span>
          </Button>
        </div>
        <Button
          onClick={handleDelete}
          variant="destructive"
          size="icon"
        >
          <Trash2 className="w-5 h-5" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MovieCard;
