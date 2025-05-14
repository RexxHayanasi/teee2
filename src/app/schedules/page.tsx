"use client";

import { useGetSchedulesQuery } from "@/redux/api/schedules-api";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function SchedulesPage() {
  const {
    data: dataSchedules,
    error: errorSchedules,
    isLoading: loadingSchedules,
  } = useGetSchedulesQuery(arguments);

  if (loadingSchedules) {
    return (
      <div className="container mx-auto grid gap-4 py-10 max-[640px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-6 w-24" />
            </CardHeader>
            <CardContent className="space-y-3">
              {[...Array(5)].map((_, j) => (
                <Skeleton key={j} className="h-4 w-full" />
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (errorSchedules) {
    return (
      <div className="container mx-auto py-10 text-center">
        <Card className="py-8">
          <CardTitle className="text-destructive">
            Gagal memuat jadwal
          </CardTitle>
          <p className="mt-2 text-muted-foreground">
            Silakan coba lagi beberapa saat
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => window.location.reload()}
          >
            Muat Ulang
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <>
      <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Jadwal Rilis Anime
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Pantau jadwal tayang anime favoritmu setiap minggu
          </p>
        </div>
      </section>

      <div className="container mx-auto grid gap-4 px-4 pb-16 sm:px-6 lg:px-8 max-[640px]:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {dataSchedules?.data?.map((data: any) => (
          <Card
            key={data?.day}
            className="transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-2xl font-bold">
                {data?.day}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {data?.anime_list?.map((anime: any) => (
                <Link
                  href={`/anime/${anime?.slug}`}
                  key={anime?.title}
                  className="group flex items-center justify-between rounded-md p-2 transition-colors hover:bg-accent"
                >
                  <span className="text-sm font-medium group-hover:text-primary">
                    {anime?.anime_name}
                  </span>
                  <ChevronRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
