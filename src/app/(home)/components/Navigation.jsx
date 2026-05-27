"use client";
import { Gaegu } from "next/font/google";
import Badge from "../../../../shared/components/Badge";

const gaegu = Gaegu({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Navigation() {
  return (
    <nav className="h-[10vh] px-20 flex justify-between items-center shadow">
      <h1 className={`${gaegu.className} text-2xl letter-spacing-1`}>
        luan.dev
      </h1>
      <Badge bg="#dc143c">
        <p>luan.cardoso0029@gmail.com</p>
      </Badge>
    </nav>
  );
}
