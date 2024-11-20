import moviesService from "@/service/movies.service";
import { Movies } from "@/types/movie.type";
import { RootState } from "@reduxjs/toolkit/query";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

export const useMovies = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state: RootState) => state.movies);

  const { isLoading, error } = useQuery<Movies[], Error>({
    queryKey: ["movies"], // this is cache key
    queryFn: () => moviesService.fetchMovies(dispatch),
  });

  return { moviesData: movies, isLoading, error };
};

export const useToggleLikeDislike = () => {  const dispatch = useDispatch();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ movie, action }: { movie: Movies; action: "like" | "dislike" }) =>
      moviesService.toggleLikeDislike(movie, action,dispatch),
    onSuccess: (updatedMovie) => {
      // Update the cached movies data with the updated movie
      queryClient.setQueryData(["movies"], (oldMovies: Movies[] | undefined) => {
        return oldMovies?.map((m) => (m.id === updatedMovie.id ? updatedMovie : m));
      });
    },
  });
};

export const useDeleteMovie = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (movieId: string) => moviesService.deleteMovie(movieId,dispatch),
    onSuccess: (movieId) => {
      // Remove the deleted movie from the cached movies data
      queryClient.setQueryData(["movies"], (oldMovies: any[] | undefined) => {
        return oldMovies?.filter((movie) => movie.id !== movieId);
      });
    },
  });
};
