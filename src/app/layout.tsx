import { UserProvider } from "@/context/authContext";
import "./globals.css";
import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <Header />
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
