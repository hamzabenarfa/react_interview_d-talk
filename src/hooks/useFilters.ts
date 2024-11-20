import { useMemo, useState } from "react";

export const useFilters = (movies: any) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = useMemo(() => {
    return Array.from(new Set(movies.map((movie: any) => movie.category)));
  }, [movies]);

  const filteredMovies = useMemo(() => {
    return selectedCategories.length
      ? movies.filter((movie: any) =>
          selectedCategories.includes(movie.category)
        )
      : movies;
  }, [movies, selectedCategories]);

  return { categories, selectedCategories, setSelectedCategories, filteredMovies };
};
