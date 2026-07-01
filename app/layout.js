import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: {
    default: "Jay.J | Front End Developer",
    template: "%s | Jay.J",
  },
  description: "Jay.J의 프론트엔드 이력서와 블로그",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
