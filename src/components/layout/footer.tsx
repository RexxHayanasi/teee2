import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
      <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
        Built by&nbsp;
        <Link
          href="https://Instagram.com/rexxzynxd"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-foreground underline underline-offset-4"
        >
          RexxzynXD
        </Link>
        .&nbsp;can be used by everyone supported by the community &nbsp;
        <Link
          href="https://Instagram.com/archave_comunity"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-foreground underline underline-offset-4"
        >
          Archave Community 
        </Link>
      </p>
    </footer>
  );
}
