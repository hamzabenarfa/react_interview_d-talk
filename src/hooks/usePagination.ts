import { Movies } from "@/types/movie.type";
import { useState, useEffect } from "react";

export const usePagination = (items: Movies[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
    setPerPage(itemsPerPage);
  }, [itemsPerPage]); 

  const paginatedItems = items.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const totalPages = Math.ceil(items.length / perPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return {
    paginatedItems,
    totalPages,
    currentPage,
    nextPage,
    prevPage,
  };
};
