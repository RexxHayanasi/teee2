import { Skeleton } from "../ui/skeleton";

export default function SkeletonCard() {
  return (
    <Card className="h-full rounded-lg overflow-hidden border-border/50">
      {/* Gambar */}
      <Skeleton className="aspect-[3/4] w-full rounded-t-lg" />
      
      {/* Konten */}
      <div className="p-4 space-y-3">
        {/* Judul */}
        <Skeleton className="h-6 w-full rounded-md" />
        
        {/* Status dan Type */}
        <div className="flex gap-2">
          <Skeleton className="h-4 w-16 rounded-full" />
          <Skeleton className="h-4 w-12 rounded-full" />
        </div>
        
        {/* Rating */}
        <Skeleton className="h-4 w-10 rounded-full" />
        
        {/* Genre */}
        <div className="flex flex-wrap gap-2 pt-2">
          <Skeleton className="h-4 w-14 rounded-full" />
          <Skeleton className="h-4 w-10 rounded-full" />
        </div>
      </div>
    </Card>
  );
}
