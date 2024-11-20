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
      const index = state.movies.findIndex((movie) => movie.id === action.payload.id);
      if (index !== -1) {
        state.movies[index] = action.payload;
      }
    },
    deleteMovie(state, action: PayloadAction<string>) {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload);
    },
  },
});

export const { setMovies, updateMovie, deleteMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
