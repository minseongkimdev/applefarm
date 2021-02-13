import React from 'react'
import {Card, Popover, Button, Input} from 'antd';
import {HeartOutlined, DownloadOutlined, EditOutlined, AliwangwangOutlined} from '@ant-design/icons';

// const Img = 1

const {Search} = Input

const content = (
  <div>
    <Button style={{display:"block"}}type="text">iPhone 12 Pro Max</Button>
    <Button style={{display:"block"}} type="text">iPhone 12 Pro</Button>
    <Button style={{display:"block"}} type="text">iPhone 12</Button>
    <Button style={{display:"block"}} type="text">iPhone 12 Mini</Button>
  </div>
);

export default function ImageCard({url, key}) {
  return (
    <>
      <Card
        style={{marginTop:"30px"}}
        cover={<img alt="example" src="https://images.unsplash.com/photo-1613144123668-d9c705841eba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80" />}
        bodyStyle={{padding: "0"}}
        actions={[
          <Button type="text" icon={<HeartOutlined/>}>392</Button>,
          <Button type="text" icon={<AliwangwangOutlined />}>12</Button>,
          <Popover content={content} trigger="click">
            <Button type="text" icon={<DownloadOutlined key="download" />}>4924</Button>
            </Popover>
        ]}
        >

      </Card>
    </>
  )
}
