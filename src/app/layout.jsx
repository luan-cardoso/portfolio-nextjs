import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Luan Cardoso",
  description:
    "Portfólio online de Luan Cardoso, desenvolvedor de software e graduando em Engenharia de Software.",
  icons: {
    icon: "/bat.png",
    shortcut: "/bat.png",
    apple: "/bat.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={karla.className}>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
