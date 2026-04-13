"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Badge from "./Badge";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="h-[10vh] min-h-[10vh] px-20 flex justify-between items-center max-sm:px-5 shrink-0 ">
      <div className="flex gap-4">
        <Link
          id="link-style"
          href="/"
          className={pathname === "/" ? "link-active" : ""}
        >
          Home
        </Link>
        <Link
          id="link-style"
          href="/projects"
          className={pathname === "/projects" ? "link-active" : ""}
        >
          Projetos
        </Link>
      </div>
      <div className="text-sm max-sm:text-xs shadow-2xl">
        <Badge bg="#7c86ff">
          <p>luan.cardoso0029@gmail.com</p>
        </Badge>
      </div>
    </nav>
  );
}
