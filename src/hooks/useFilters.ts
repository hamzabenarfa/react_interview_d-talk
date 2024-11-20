import { Movies } from "@/types/movie.type";
import { useMemo, useState } from "react";

export const useFilters = (movies: Movies[]) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = useMemo(() => {
    return Array.from(new Set(movies.map((movie: Movies) => movie.category)));
  }, [movies]);

  const filteredMovies = useMemo(() => {
    return selectedCategories.length
      ? movies.filter((movie: Movies) =>
          selectedCategories.includes(movie.category)
        )
      : movies;
  }, [movies, selectedCategories]);

  return { categories, selectedCategories, setSelectedCategories, filteredMovies };
};
