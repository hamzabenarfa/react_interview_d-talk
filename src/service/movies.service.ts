import { Movies } from "../types/movie.type";
import { Dispatch } from "redux";
import { deleteMovie, setMovies } from "@/redux/reducers/moviesReducer";
import { movies$ } from "../data/movies";

class MoviesService {
  async fetchMovies(dispatch: Dispatch) {
    try {
      const data = await movies$; // fetch the data from movies$ promise
      dispatch(setMovies(data)); // set the movies in the Redux store
      return data;
    } catch (error) {
      console.error("Error fetching movies", error);
    }
  }

  deleteMovieById(dispatch: Dispatch, movieId: string) {
    dispatch(deleteMovie(movieId)); // remove a movie by id from the Redux store
  }
}

const moviesService = new MoviesService();
export default moviesService;
