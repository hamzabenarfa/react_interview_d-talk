import moviesService from "@/service/movies.service";
import { Movies } from "@/types/movie.type";
import { RootState } from "@reduxjs/toolkit/query";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

export const useMovies = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state: RootState) => state.movies);

  const { isLoading, error } = useQuery<Movies[], Error>({
    queryKey: ["movies"],
    queryFn: () => moviesService.fetchMovies(dispatch),
    // onSuccess: (data: Movies[]) => {
    //   dispatch(setMovies(data)); 
    // },
  });

  return { moviesData: movies, isLoading, error };
};

