import AppLayouts from '../src/components/AppLayouts';
import Head from 'next/head';
import Layout from '../src/components/Layout'
import { Flex, WhiteSpace, Button} from 'antd-mobile';
import styled from '@emotion/styled';
import Nav from '../src/components/Nav';

const SinginBackgroundImage = styled.div`
    position: absolute;
    background: url('https://images.unsplash.com/photo-1571857089849-f6390447191a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3934&q=80');
    width:100vw;
    filter: grayscale(50%);
    background-position: center center;
    background-size: cover;    
    height:100vh;
    background-color: rgba( 0, 0, 0, 0.3 );
    /* src: 'https://images.unsplash.com/photo-1571857089849-f6390447191a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3934&q=80'; */
`;

export default function signin() {
  return (
    <>
            <Head>
                <title> 로그인 | Apple Farm</title>
            </Head>
            <Layout>

        <Flex style={{height:"100vh"}} direction="column" align="center"justify="center">
          <SinginBackgroundImage>
          <div>
          <Flex style={{marginTop:"30vh", height:"30vh"}} direction="column" justify="center" align="center" >
          <Flex.Item>
            <h2 style={{color:"white", width:"300px"}}>
            애플 계정으로만
            </h2>
            <h2 style={{marginTop:"-10px",color:"white"}}>
            시작하실 수 있습니다.
            </h2>

            </Flex.Item>
          <Flex.Item>
            <Button style={{width:"300px"}} type="default">
            애플계정으로 로그인  
            </Button>
          </Flex.Item>
          <Flex.Item>
            <Button style={{marginTop:"-20px", width:"300px"}} type="primary">
            애플계정으로 회원가입
            </Button>
            </Flex.Item>
          </Flex>
          </div>
          </SinginBackgroundImage>
        </Flex>

            </Layout>



      </>
  );
}
