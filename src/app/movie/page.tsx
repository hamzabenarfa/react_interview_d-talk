"use client";
import { useEffect, useState } from "react";
import { useFilters } from "@/hooks/useFilters";
import { usePagination } from "@/hooks/usePagination";

import PaginationComponent from "./_components/Pagination";
import MovieCard from "./_components/movie-card";
import { CategoryFilter } from "./_components/category-filter";

import { ErrorState } from "./_components/error";
import { ItemsPerPage } from "./_components/items-per-page";
import { LoadingSkeletonCard } from "./_components/movie-skeleton";
import moviesService from "@/service/movies.service";
import { useDispatch, useSelector } from "react-redux";


export default function Movies() {
  const moviesData = useSelector((state: RootState) => state.movies.movies);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  // Fetch movies data on component mount
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await moviesService.fetchMovies(dispatch);
        // setMoviesData(data);
      } catch (err) {
        setError("Error loading movies");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [dispatch]);


  const {
    categories,
    selectedCategories,
    setSelectedCategories,
    filteredMovies,
  } = useFilters(moviesData || []);

  const [itemsPerPage, setItemsPerPage] = useState(4);

  const {
    paginatedItems,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
  } = usePagination(filteredMovies, itemsPerPage);

  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value);
  };

  if (isLoading) return <LoadingSkeletonCard />;

  if (error) return <ErrorState message={error?.message} />;

  return (
    <div className="container mx-auto px-4 py-10 lg:px-4 max-w-7xl min-h-screen flex flex-col justify-between">
      <section className="">
        <h1 className="text-3xl font-bold text-left mb-6">Movies</h1>

        <header className="flex flex-col md:flex-row md:justify-between md:items-center items-start gap-4 md:gap-0 w-full">
          <CategoryFilter
            categories={categories}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />

          <ItemsPerPage
            itemsPerPage={itemsPerPage}
            onChange={handleItemsPerPageChange}
          />
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {paginatedItems.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </section>

      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        nextPage={nextPage}
        prevPage={prevPage}
        goToPage={goToPage}
      />
    </div>
  );
}
