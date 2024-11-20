"use client";
import { useMovies } from "@/hooks/use-movies";
import { useFilters } from "@/hooks/useFilters";
import { usePagination } from "@/hooks/usePagination";

import Pagination from "./_components/Pagination";
import MovieCard from "./_components/movie-card";
import { CategoryFilter } from "./_components/category-filter";
import LoadingMovie from "./_components/loading";
import { ErrorState } from "./_components/error";

export default function Movies() {
  const { moviesData, isLoading, error } = useMovies();
  const {
    categories,
    selectedCategories,
    setSelectedCategories,
    filteredMovies,
  } = useFilters(moviesData || []);

  const { paginatedItems, currentPage, totalPages, nextPage, prevPage } =
    usePagination(filteredMovies, 4);

  if (isLoading) return <LoadingMovie />;

  if (error) return <ErrorState message={error?.message} />;

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4 lg:px-0 max-w-7xl">
        <h1 className="text-3xl font-bold text-left mb-6">Movies</h1>

        <CategoryFilter
          categories={categories}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {paginatedItems.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </div>
    </div>
  );
}
