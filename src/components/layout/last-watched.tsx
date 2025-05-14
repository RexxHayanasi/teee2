"use client";

import {
  getSavedEpisode,
  deleteAllEpisode,
} from "@/src/helpers/storage-episode.ts"; // <- sesuai file kamu
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { subtitle, title } from "./primitives";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function LastWatched() {
  const lastWatched = getSavedEpisode();

  const handleDeleteAllEpisode = () => {
    deleteAllEpisode();
    toast("Riwayat tontonan dihapus", {
      description: "Silakan muat ulang halaman untuk melihat perubahan.",
      action: {
        label: "Muat Ulang",
        onClick: () => {
          if (typeof window !== "undefined") {
            window.location.reload();
          }
        },
      },
    });
  };

  return (
    <>
      <CardHeader className={title({ className: "text-center", size: "xl" })}>
        Terakhir Ditonton
      </CardHeader>

      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <div
          className={`${
            lastWatched.length > 0 ? "flex space-x-2" : "py-4 text-center"
          }`}
        >
          {lastWatched.length > 0 ? (
            lastWatched.map((episode) => (
              <Card
                key={episode.id}
                className="items-center duration-300 hover:bg-muted/40"
              >
                <Link href={episode.episode}>
                  <Image
                    src={episode.poster}
                    className="rounded-t-lg object-cover max-[640px]:h-52 max-[640px]:w-full sm:h-80 sm:w-full md:h-72 md:w-64 lg:h-72 lg:w-72 xl:h-96 xl:w-full"
                    width={200}
                    height={100}
                    loading="lazy"
                    alt={`Poster ${episode.title}`}
                  />
                </Link>
                <CardDescription
                  className={subtitle({
                    className: "my-3 text-center",
                  })}
                >
                  <ScrollArea>
                    <p className="w-60 p-2">{episode.title}</p>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                </CardDescription>
              </Card>
            ))
          ) : (
            <>Belum ada episode yang ditonton.</>
          )}
        </div>

        <ScrollBar orientation="horizontal" />

        {lastWatched.length > 0 && (
          <AlertDialog>
            <AlertDialogTrigger className="mx-2 my-4 flex justify-end">
              <Button variant="secondary">Hapus Semua Riwayat</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Yakin ingin menghapus?</AlertDialogTitle>
                <AlertDialogDescription>
                  Tindakan ini tidak dapat dibatalkan. Semua riwayat tontonan akan dihapus permanen dari perangkat.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Batal</AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteAllEpisode}>
                  Lanjutkan
                </AlertDialogAction>
              </AlertDialogFoote
r>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </ScrollArea>
    </>
  );
}

