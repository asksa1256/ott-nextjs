import React from "react";
import type { AppProps } from "next/app";
import "@/styles/global.css";
import Header from "@/components/Header";
import Container from "@/components/Container";
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}
