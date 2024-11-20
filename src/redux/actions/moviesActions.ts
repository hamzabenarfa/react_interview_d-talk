import { PayloadAction } from "@reduxjs/toolkit";
import { Movies } from "@/types/movie.type";

export const setMovies = (movies: Movies[]): PayloadAction<Movies[]> => ({
  type: "movies/setMovies",
  payload: movies,
});

export const updateMovie = (movie: Movies): PayloadAction<Movies> => ({
  type: "movies/updateMovie",
  payload: movie,
});

export const deleteMovie = (id: string): PayloadAction<string> => ({
  type: "movies/deleteMovie",
  payload: id,
});
