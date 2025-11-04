import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Luan Cardoso",
  description: "Desenvolvedor de Software Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={karla.className}>
      <body className="antialiased">
        <div className="max-w-[var(--breakpoint-desktop)] mx-auto px-10">
          {children}
        </div>
      </body>
    </html>
  );
}
