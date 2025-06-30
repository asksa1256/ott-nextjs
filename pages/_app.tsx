import React from "react";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import Container from "@/components/Container";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}
