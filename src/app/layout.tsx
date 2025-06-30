import "~/styles/globals.css";
import "@mantine/core/styles.css";

import { type Metadata } from "next";
import { Montserrat } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import {
  createTheme,
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
} from "@mantine/core";

export const metadata: Metadata = {
  title: "scriptabot.com",
  description: "scriptabot.com, create a no-code Discord Bot in minutes.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const montserrat = Montserrat({
  subsets: ["latin"],
});

const theme = createTheme({
  defaultRadius: "md",
  primaryColor: "indigo",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" {...mantineHtmlProps} data-mantine-color-scheme="dark">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body className={montserrat.className}>
        <TRPCReactProvider>
          <MantineProvider theme={theme} forceColorScheme="dark">{children}</MantineProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
