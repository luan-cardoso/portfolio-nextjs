import { Karla, Yesteryear } from "next/font/google";
import "./globals.css";
import Navigation from "../../shared/components/Navigation";

const yesteryear = Yesteryear({ weight: "400", subsets: ["latin"], display: "swap" });
const karla = Karla({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Luan Cardoso",
  description:
    "Portfólio online de Luan Cardoso, Desenvolvedor de Software, graduando em Engenharia de Software.",
  icons: {
    icon: "/bat.png",
    shortcut: "/bat.png",
    apple: "/bat.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={karla.className}>
      <body className="overflow-hidden h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 min-h-0 overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
