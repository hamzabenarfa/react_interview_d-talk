"use client"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    nextPage: () => void;
    prevPage: () => void;
  }


const Pagination = ({ currentPage, totalPages, nextPage, prevPage }: PaginationProps) => {
    return (
      <div className="flex justify-between mt-4">
        <Button
          onClick={prevPage}
          disabled={currentPage === 1}
          variant={currentPage === 1 ? "outline" : "secondary"}
          className={cn("px-4 py-2  rounded cursor-pointer" , currentPage === 1 && "cursor-not-allowed")}
        >
          Previous
        </Button>
        <p>
          Page {currentPage} of {totalPages}
        </p>
        <Button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          variant={currentPage === totalPages ? "outline" : "secondary"}
          className={cn("px-4 py-2 rounded cursor-pointer", currentPage === totalPages && "cursor-not-allowed")}
        >
          Next
        </Button>
      </div>
    );
  };
  
  export default Pagination;
  