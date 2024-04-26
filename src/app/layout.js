import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'ServiceXpress: On-demand Home Services',
  description: 'ServiceXpress offers fast and reliable home services including plumbing, electrical, and maintenance.',
  keywords: ['home services', 'on-demand service', 'plumbing', 'electrical', 'maintenance'],
  url: 'https://www.servicexpress.co.in',
  sitename: 'ServiceXpress'
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <link rel="icon" href="./favicon.ico" type="image/x-icon"></link>
    <link rel="stylesheet" href="./css/navbar.css" />
    <link rel="stylesheet" href="./main.css" />
    <link rel="stylesheet" href="./index.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
  </head>
 
      <body className={inter.className}>
      
        {children}</body>
    </html>
  );
}
