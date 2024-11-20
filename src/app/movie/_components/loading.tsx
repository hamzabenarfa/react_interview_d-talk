import { SkeletonCard } from "./movie-skeleton";

const LoadingMovie = () => {
  return (
    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
    //   {Array.from({ length: 4 }).map((_, index) => (
    //     <SkeletonCard key={index} />
    //   ))}
    // </div>
            <SkeletonCard  />

  );
};

export default LoadingMovie;
