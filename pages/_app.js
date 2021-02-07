import "../styles/index.css";
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0.width=device-width" />
        <title>Contactame para desarrollar tu web</title>
        <meta
          key="description"
          name="description"
          content="Contactame soy desarrollador"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
