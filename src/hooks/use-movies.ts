import { setMovies } from "@/redux/reducers/moviesReducer";
import moviesService from "@/service/movies.service";
import { Movies } from "@/types/movie.type";
import { RootState } from "@reduxjs/toolkit/query";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// export const useMovies = () => {
//   const dispatch = useDispatch();
//   const moviesData = useSelector((state: any) => state.movies.movies); // Access movies from Redux store
//   const isLoading = !moviesData; // Loading if moviesData is not yet available
//   const error = null; // Implement error handling if needed

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const movies = await moviesService.fetchMovies(dispatch); // Fetch movies and dispatch to Redux
//         dispatch(setMovies(movies)); // Store movies in Redux
//       } catch (err) {
//         console.error("Failed to fetch movies:", err);
//       }
//     };

//     if (!moviesData) {
//       fetchMovies(); // Fetch movies if they are not already available
//     }
//   }, [dispatch, moviesData]); // Dependency array ensures fetching is triggered only once

//   return { moviesData, isLoading, error };
// };
// export const useDeleteMovie = () => {
//   const dispatch = useDispatch();
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: (movieId: string) =>
//       moviesService.deleteMovie(movieId, dispatch),
//     onSuccess: (movieId) => {
//       // Remove the deleted movie from the cached movies data
//       queryClient.setQueryData(["movies"], (oldMovies: any[] | undefined) => {
//         return oldMovies?.filter((movie) => movie.id !== movieId);
//       });
//     },
//   });
// };
