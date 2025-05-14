import { Skeleton } from "../ui/skeleton";

export default function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      {/* Gambar */}
      <Skeleton className="aspect-[3/4] w-full rounded-t-lg" />
      
      {/* Konten */}
      <div className="p-4 space-y-3">
        {/* Judul */}
        <Skeleton className="h-5 w-full rounded-md" />
        
        {/* Status dan Type */}
        <div className="flex gap-2">
          <Skeleton className="h-4 w-16 rounded-full" />
          <Skeleton className="h-4 w-12 rounded-full" />
        </div>
        
        {/* Rating */}
        <Skeleton className="h-4 w-10 rounded-full" />
        
        {/* Genre */}
        <div className="flex flex-wrap gap-2 pt-2">
          <Skeleton className="h-4 w-16 rounded-full" />
          <Skeleton className="h-4 w-14 rounded-full" />
          <Skeleton className="h-4 w-12 rounded-full" />
        </div>
      </div>
    </div>
  );
}

// Versi alternatif untuk loading di tempat lain
export function SkeletonList() {
  return (
    <div className="grid gap-4 max-[400px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {[...Array(12)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}
