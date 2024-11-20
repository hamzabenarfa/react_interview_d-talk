import { Movies } from "@/types/movie.type";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Gauge from "./Gauge";
import { ThumbsUp, ThumbsDown } from "lucide-react";

import { useDispatch } from "react-redux";
import { toggleDislike, toggleLike } from "@/redux/reducers/moviesReducer";
import ReactionButton from "./reaction-button";
import DeleteModal from "./delete-modal";

interface MovieCardProps {
  movie: Movies;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const totalVotes = movie.likes + movie.dislikes;
  const likePercentage = totalVotes > 0 ? (movie.likes / totalVotes) * 100 : 0;
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(toggleLike(movie.id));
  };

  const handleDislike = () => {
    dispatch(toggleDislike(movie.id));
  };

  return (
    <Card className="w-full max-w-sm flex flex-col justify-between">
      <CardHeader className="flex items-center justify-between flex-row">
        <div>
          <CardTitle className="text-2xl font-bold text-balance">
            {movie.title}
          </CardTitle>
          <CardDescription className="text-yellow-400 font-semibold">
            {movie.category}
          </CardDescription>
        </div>
        <Gauge percentage={likePercentage} />
      </CardHeader>

      <CardFooter className="flex justify-between items-center">
        <div className="flex">
          {/* Like Button */}
          <ReactionButton
            title="Likes"
            count={movie.likes}
            icon={ThumbsUp}
            onClick={handleLike}
            disabled={!!movie.isLiked} 
          />

          {/* Dislike Button */}
          <ReactionButton
            title="Dislikes"
            count={movie.dislikes}
            icon={ThumbsDown}
            onClick={handleDislike}
            disabled={!!movie.isDisliked} 
          />
        </div>
        <DeleteModal movieTitle={movie.title} id={movie.id} />
      </CardFooter>
    </Card>
  );
};

export default MovieCard;
