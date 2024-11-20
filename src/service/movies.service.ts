import { Movies } from "../types/movie.type";
import { AppDispatch } from "@/redux/store";
import { deleteMovie, setMovies, updateMovie } from "@/redux/actions/moviesActions";
import { movies$ } from "../data/movies"; 

class MoviesService {
  async fetchMovies(dispatch: AppDispatch): Promise<Movies[]> {
    const movies = await movies$; 
    dispatch(setMovies(movies)); 
    return movies;
  }

  async deleteMovie(movieId: string, dispatch: AppDispatch): Promise<void> {
  
    setTimeout(() => {
      dispatch(deleteMovie(movieId)); 
    }, 100);
  }

  async toggleLikeDislike(movie: Movies, action: "like" | "dislike", dispatch: AppDispatch): Promise<void> {
    const updatedMovie = {
      ...movie,
      likes: action === "like" ? movie.likes + 1 : movie.likes,
      dislikes: action === "dislike" ? movie.dislikes + 1 : movie.dislikes,
    };
    dispatch(updateMovie(updatedMovie)); 
  }
}

const moviesService = new MoviesService();
export default moviesService;
