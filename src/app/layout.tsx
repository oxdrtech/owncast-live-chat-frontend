import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Owncast live chat",
  description: "Live chat with Owncast streaming platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
