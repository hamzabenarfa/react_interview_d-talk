"use client";
import { useState } from "react";
import { useMovies } from "@/hooks/use-movies";
import { useFilters } from "@/hooks/useFilters";
import { usePagination } from "@/hooks/usePagination";

import Pagination from "./_components/Pagination";
import MovieCard from "./_components/movie-card";
import { CategoryFilter } from "./_components/category-filter";
import LoadingMovie from "./_components/loading";
import { ErrorState } from "./_components/error";
import { ItemsPerPage } from "./_components/items-per-page";

export default function Movies() {
  const { moviesData, isLoading, error } = useMovies();
  const {
    categories,
    selectedCategories,
    setSelectedCategories,
    filteredMovies,
  } = useFilters(moviesData || []);

  const [itemsPerPage, setItemsPerPage] = useState(4);

  const { paginatedItems, currentPage, totalPages, nextPage, prevPage } =
  usePagination(filteredMovies, itemsPerPage);


  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value);

  };

  if (isLoading) return <LoadingMovie />;

  if (error) return <ErrorState message={error?.message} />;

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4 lg:px-0 max-w-7xl">
        <h1 className="text-3xl font-bold text-left mb-6">Movies</h1>

        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-0 w-full">
  <CategoryFilter
    categories={categories}
    selectedCategories={selectedCategories}
    setSelectedCategories={setSelectedCategories}
  />

  <ItemsPerPage
    itemsPerPage={itemsPerPage}
    onChange={handleItemsPerPageChange}
  />
</div>


        {/* Movie Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {paginatedItems.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>

        {/* Pagination Controls */}
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
