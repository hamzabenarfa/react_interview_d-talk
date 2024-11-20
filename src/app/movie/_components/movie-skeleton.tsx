import { Skeleton } from "@/components/ui/skeleton";

export function LoadingSkeletonCard() {
  return (
    <div className="container mx-auto px-4 py-10 lg:px-4 max-w-7xl min-h-screen flex flex-col justify-between">
      <section className="">
        <Skeleton className="h-6 w-[200px]  mb-6" />

        <header className="flex flex-col md:flex-row md:justify-between md:items-center items-start gap-4 md:gap-0 w-full">
          <Skeleton className="h-8 w-[400px]" />

          <Skeleton className="h-8 w-[200px]" />
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div className="flex flex-col space-y-3" key={index}>
              <Skeleton className="h-[125px] w-full rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="flex items-center justify-between w-full">
        <Skeleton className="h-8 w-[100px]" />

        <div className="flex items-center space-x-2">
          <Skeleton className="w-8 h-8 bg-gray-300 rounded-md"></Skeleton>
          <Skeleton className="w-8 h-8 bg-gray-300 rounded-md"></Skeleton>
          <Skeleton className="w-8 h-8 bg-gray-300 rounded-md"></Skeleton>
        </div>
        <Skeleton className="h-8 w-[100px]" />
      </div>
    </div>
  );
}
