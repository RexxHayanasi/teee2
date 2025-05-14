import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { subtitle, title } from "./primitives";

export default function AnimeSearchCard({
  anime
}: Readonly<{
  anime: any
}>) {
  if (!anime || anime.length === 0) {
    return (
      <div className="text-center py-10">
        <h3 className="text-xl font-semibold text-foreground/80">Anime tidak ditemukan!</h3>
        <p className="text-muted-foreground">Gunakan pencarian lain</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 max-[400px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {anime?.map((data: any) => (
        <Link 
          href={`/anime/${data.slug}`} 
          key={data?.title}
          className="group focus-visible:outline-none"
        >
          <Card className="h-full rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50 overflow-hidden">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={data.poster}
                alt={data.title}
                fill
                className="object-cover transition-opacity group-hover:opacity-90"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                quality={80}
              />
              {data.rating && (
                <div className="absolute bottom-2 left-2 bg-background/90 px-2 py-1 rounded-md text-sm font-semibold">
                  ⭐ {data.rating}
                </div>
              )}
            </div>
            
            <div className="p-4 space-y-2">
              <CardTitle className={`${title()} line-clamp-2 group-hover:text-primary transition-colors`}>
                {data.title}
              </CardTitle>
              
              <div className="flex items-center gap-2 text-sm">
                <span className={`${subtitle()} font-medium`}>
                  {data.status}
                </span>
                {data.type && (
                  <>
                    <span className="text-muted-foreground">•</span>
                    <span className={`${subtitle()} text-muted-foreground`}>
                      {data.type}
                    </span>
                  </>
                )}
              </div>
              
              {data.genres?.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {data.genres.slice(0, 3).map((genre: any) => (
                    <span 
                      key={genre.slug}
                      className={`${subtitle()} text-xs bg-muted px-2 py-1 rounded-full whitespace-nowrap`}
                    >
                      {genre.name}
                    </span>
                  ))}
                  {data.genres.length > 3 && (
                    <span className="text-xs text-muted-foreground">
                      +{data.genres.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
