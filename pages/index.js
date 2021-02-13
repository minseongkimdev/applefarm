import Head from 'next/head'

import AppLayouts from '../src/components/AppLayouts';
import Layout from '../src/components/Layout';
import Footer from '../src/components/Footer'
import Nav from '../src/components/Nav'
import { Flex, WhiteSpace } from 'antd-mobile';
import styled from '@emotion/styled';
import Banner from '../src/components/Banner';
import ImageCard from '../src/components/ImageCard';
import {Affix, Button} from 'antd';

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);

export default function Home() {
  return (
    <>
      <Head>
        <title> Apple Farm Beta</title>
      </Head>
      <Nav/>
      <Banner/>
      <ImageCard/>
      <ImageCard/>
      <ImageCard/>
      <Layout>
        </Layout>
    </>
  );
}
