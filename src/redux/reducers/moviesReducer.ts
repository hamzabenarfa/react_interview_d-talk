import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movies } from "@/types/movie.type";

interface MoviesState {
  movies: Movies[];
}

const initialState: MoviesState = {
  movies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<Movies[]>) {
      state.movies = action.payload;
    },

    updateMovie(state, action: PayloadAction<Movies>) {
      const index = state.movies.findIndex(
        (movie) => movie.id === action.payload.id
      );
      if (index !== -1) {
        state.movies[index] = action.payload;
      }
    },

    deleteMovie(state, action: PayloadAction<string>) {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },

    toggleLike(state, action: PayloadAction<string>) {
      const updatedMovies = state.movies.map((movie) => {
        if (movie.id === action.payload) {
          // If the movie was disliked before, reset the dislike
          return {
            ...movie,
            isLiked: !movie.isLiked,
            isDisliked: false, // Reset dislike when liking
            likes: movie.isLiked ? movie.likes - 1 : movie.likes + 1,
            dislikes: movie.isDisliked ? movie.dislikes - 1 : movie.dislikes,
          };
        }
        return movie;
      });
      state.movies = updatedMovies;
    },

    toggleDislike(state, action: PayloadAction<string>) {
      const updatedMovies = state.movies.map((movie) => {
        if (movie.id === action.payload) {
          // If the movie was liked before, reset the like
          return {
            ...movie,
            isDisliked: !movie.isDisliked,
            isLiked: false, // Reset like when disliking
            dislikes: movie.isDisliked ? movie.dislikes - 1 : movie.dislikes + 1,
            likes: movie.isLiked ? movie.likes - 1 : movie.likes,
          };
        }
        return movie;
      });
      state.movies = updatedMovies;
    },
  },
});

export const { setMovies, updateMovie, deleteMovie, toggleLike, toggleDislike } = moviesSlice.actions;

export default moviesSlice.reducer;
