"use client"
import { useMovies } from "@/hooks/use-movies";
import { useFilters } from "@/hooks/useFilters";
import { usePagination } from "@/hooks/usePagination";
import MovieCard from "./movie-card";
import Pagination from "../components/Pagination";
import { SkeletonCard } from "./movie-skeleton";


export default function Home() {
  const { moviesData, isLoading, error } = useMovies();
  const { categories, selectedCategories, setSelectedCategories, filteredMovies } = useFilters(moviesData || []);
  const { paginatedItems, currentPage, totalPages, nextPage, prevPage, setPerPage } =
    usePagination(filteredMovies, 4);
    if (isLoading) {
      return (
        
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      );
    }
  
    if (error) {
      return <div className="text-red-500">Error: {error?.message}</div>;
    }

  return (
    <div className="p-8 md:mx-60">
      <h1 className="text-2xl font-bold">Movies</h1>
      <div className="flex gap-4 mt-4">
        {categories.map((category) => (
          <label key={category} className="flex items-center">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => {
                setSelectedCategories((prev) =>
                  prev.includes(category)
                    ? prev.filter((c) => c !== category)
                    : [...prev, category]
                );
              }}
            />
            <span className="ml-2">{category}</span>
          </label>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {paginatedItems.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
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
