import Head from 'next/head';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  
  return (
    <>
    <Head>
    <meta charset="utf-8" />
    <title>Apple Farm</title>
    </Head>
  <Component {...pageProps} />
    </>
  );
}

export default MyApp
