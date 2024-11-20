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
import { useDispatch } from "react-redux";
import { useState } from "react";
import moviesService from "@/service/movies.service";


interface MovieCardProps {
  movie: Movies;
}

const MovieCard = ({ movie }: MovieCardProps) => {

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const totalVotes = movie.likes + movie.dislikes;
  const likePercentage = totalVotes > 0 ? (movie.likes / totalVotes) * 100 : 0;

  const handleLike = async (movieId: string) => {
    setIsLoading(true);
    await moviesService.toggleLikeDislike(movie, "like", dispatch);
    setIsLoading(false);
  };

  const handleDislike = async (movieId: string) => {
    setIsLoading(true);
    await moviesService.toggleLikeDislike(movie, "dislike", dispatch);
    setIsLoading(false);
  };

  const handleDelete = async (movieId: string) => {
    setIsLoading(true);
    await moviesService.deleteMovie(movieId, dispatch);
    setIsLoading(false);
  };

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
          <Button variant="ghost" onClick={() => handleLike(movie.id)} className="p-2">
            <ThumbsUp className="w-5 h-5" /> <span>{movie.likes} Likes</span>
          </Button>
          <Button variant="ghost" onClick={() => handleDislike(movie.id)} className="p-2">
            <ThumbsDown className="w-5 h-5" />{" "}
            <span>{movie.dislikes} Dislikes</span>
          </Button>
        </div>
        <Button
          onClick={() => handleDelete(movie.id)}
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
