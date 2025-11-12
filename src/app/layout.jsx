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
        <div className="max-w-[1280px] mx-auto px-10 max-sm:px-5">
          {children}
        </div>
      </body>
    </html>
  );
}
