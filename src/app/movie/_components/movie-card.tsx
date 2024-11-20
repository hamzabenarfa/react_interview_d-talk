import { Movies } from "@/types/movie.type";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Gauge from "./Gauge";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown } from "lucide-react";

import { useToggleLikeDislike } from "@/hooks/use-movies";
import DeleteModal from "./delete-modal";

interface MovieCardProps {
  movie: Movies;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const totalVotes = movie.likes + movie.dislikes;
  const likePercentage = totalVotes > 0 ? (movie.likes / totalVotes) * 100 : 0;

  const { mutate: likeMovie } = useToggleLikeDislike();
  const { mutate: dislikeMovie } = useToggleLikeDislike();

  const handleLike = () => likeMovie({ movie, action: "like" });
  const handleDislike = () => dislikeMovie({ movie, action: "dislike" });

  return (
    <Card className="w-full max-w-sm flex flex-col justify-between">
      <CardHeader className="flex items-center justify-between flex-row">
        <div>
          <CardTitle className="text-2xl font-bold text-balance">
            {movie.title}
          </CardTitle>
          <CardDescription className="text-yellow-400  font-semibold">
            {movie.category}
          </CardDescription>
        </div>
        <Gauge percentage={likePercentage} />
      </CardHeader>

      <CardFooter className="flex justify-between  items-center ">
        <div className="flex">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className=" flex items-center justify-center"
          >
            <ThumbsUp className="w-5 h-5" />{" "}
            <span className=" -ml-1">{movie.likes} Likes</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDislike}
            className=" flex items-center justify-center"
          >
            <ThumbsDown className="w-5 h-5" />
            <span className=" -ml-1">{movie.dislikes} Dislikes</span>
          </Button>
        </div>
        <DeleteModal movieTitle={movie.title} id={movie.id} />
      </CardFooter>
    </Card>
  );
};

export default MovieCard;
