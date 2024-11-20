import { Movies } from "../types/movie.type";
import { AppDispatch } from "@/redux/store";
import {
  deleteMovie,
  setMovies,
} from "@/redux/actions/moviesActions";
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
}

const moviesService = new MoviesService();
export default moviesService;
