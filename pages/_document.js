import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  return() {
    <Html lang="es">
      <Body>
        <Head />
        <Main />
        <NextScript />
      </Body> 
    </Html>;
  }
}
