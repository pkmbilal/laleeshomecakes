import { CartProvider } from "@/components/CartContext";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Premium Cakes for Birthdays & Anniversaries | Lalees Home Cakes",
    template: "%s | Lalees Home Cakes",
  },
  description:
    "Handcrafted cakes made fresh for birthdays, anniversaries, custom occasions, cupcakes, and desserts.",
  openGraph: {
    title: "Lalees Home Cakes",
    description: "Fresh handmade cakes for your sweetest celebrations.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
