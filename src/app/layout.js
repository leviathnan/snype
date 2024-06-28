import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../components/header'
import Projects from '../components/projects'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Snype Studios",
  description: "Video Editor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Projects />
        </body>
    </html>
  );
}
