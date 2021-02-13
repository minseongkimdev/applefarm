import Head from 'next/head';
import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';

function MyApp({ Component, pageProps }) {
  
  return (
    <>
    <Head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, minimum-scale=1"/>
    <meta content="yes" name="apple-mobile-web-app-capable" />
<meta content="minimum-scale=1.0, width=device-width, maximum-scale=1, user-scalable=no" name="viewport" />

    <title>Apple Farm</title>
    </Head>
  <Component {...pageProps} />
    </>
  );
}

export default MyApp
