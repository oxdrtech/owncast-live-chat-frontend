import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import "../styles/globals.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import type { Metadata } from "next";
import { useTheme } from '@/styles/useThemes';

export const metadata: Metadata = {
  title: "Owncast Live Chat",
  description: "A live chat application with Owncast streaming platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <MantineProvider theme={useTheme} defaultColorScheme="auto">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
