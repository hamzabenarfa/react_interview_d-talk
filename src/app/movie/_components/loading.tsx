import { SkeletonCard } from "./movie-skeleton";

const LoadingMovie = () => {
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {Array.from({ length: 4 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
     );
}
 
export default LoadingMovie;