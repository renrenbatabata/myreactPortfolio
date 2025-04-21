import Container from "@/component/cotainer";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Container>
        <body>
          <Main />
          <NextScript />
        </body>
      </Container>
    </Html>
  );
}
