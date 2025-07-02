import React from "react";
import type { AppProps } from "next/app";
import "@/styles/global.css";
import Header from "@/components/Header";
import Container from "@/components/Container";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Watchit</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <ThemeProvider>
        <Header />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}
