import React from 'react';

import { Col, Row, Layout, Menu, Breadcrumb, List, Card} from 'antd'
import {css} from '@emotion/react';
import Banner from './Banner';
import Footer from './Footer';

const {Header, Content} = Layout;
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];
export default function AppLayouts(){ 


  return (
    <>
    <Layout style={{height:"100vh", overflow:"auto"}}>
      <Header>Header</Header>
      <Content>
        <Banner/>
        <List
          style={{display:"inline-block", marginTop:"30px"}}
          grid ={{gutter:16, column :4}}
          dataSource={data}
          renderItem={item=>(
            <List.Item>
              <Card
                  hoverable
                  bodyStyle={{padding: "0"}}
              cover ={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}/>
            </List.Item>
          )}
          >

        </List>
        <Footer>Footer</Footer>
      </Content>
    </Layout>
  </>
    );
}