"use client"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
  goToPage: (page: number) => void; 
}

const PaginationComponent = ({ currentPage, totalPages, nextPage, prevPage, goToPage }: PaginationProps) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <Pagination>
      <PaginationContent className="flex justify-between w-full">
        <PaginationItem>
          <PaginationPrevious
            onClick={prevPage}
            href="#"
            disabled={currentPage === 1}
            className={cn(currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer")}
          />
        </PaginationItem>

        <div className="flex items-center space-x-2">
          {pageNumbers.map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                onClick={() => goToPage(page)} 
                isActive={currentPage === page} 
               
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
        </div>

        <PaginationItem>
          <PaginationNext
            onClick={nextPage}
            href="#"
            disabled={currentPage === totalPages}
            className={cn(currentPage === totalPages ? "cursor-not-allowed" : "cursor-pointer")}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
