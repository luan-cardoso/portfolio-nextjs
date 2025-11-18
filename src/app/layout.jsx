import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Luan Cardoso",
  description: "Portfolio online de Luan Cardoso, Desenvolvedor de Software, graduando em Engenharia de Software.",
  icons: {
    icon: "/bat.png",
    shortcut: "/bat.png",
    apple: "/bat.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={karla.className}>
      <body>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
