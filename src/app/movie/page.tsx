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
    <div className="p-8 md:mx-40 lg:mx-20">
      <h1 className="text-2xl font-bold">Movies</h1>

      <CategoryFilter
        categories={categories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {paginatedItems.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
}
