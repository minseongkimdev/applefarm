import React, {useState, useEffect} from 'react';

import { Col, Row, Layout, Menu, Breadcrumb, List, Card} from 'antd'
import {css} from '@emotion/react';
import Banner from './Banner';
import Footer from './Footer';
import ImageCard from './ImageCard';
import axios from 'axios';
import LoadingIndicator from './LoadingIndicator';
const {Header, Content} = Layout;
import InfinteScroll from 'react-infinite-scroll-component';
export default function AppLayouts() { 

  const [images, setImages] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  
  useEffect(() =>{
    fetchImages();
  },[]);
  
  const fetchImages = () => {
    setIsFetching(true)
    console.log("isFetching");
    console.log(isFetching);
    const apiRoot = "https://api.unsplash.com";
    const accessKey = 'K5zzrv5U0mOym08alsAn72y14wuctwKQAG2pPjXhLgw';
    console.log(`${apiRoot}/photos/random?client_id=${accessKey}&count=1`);
    axios
    .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=4`)
    .then(res => {
      setImages([...images, ...res.data])
      console.log("isFetching");
      setIsFetching(false)
      console.log(isFetching)
    })
  }


  return (
    <>
  
    <Banner/>
    <div>
    <InfinteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={!isFetching && fetchImages}
        loader={<LoadingIndicator/>}
        >
        <List
          style={{marginTop:"30px"}}
          grid ={{gutter:16, column :4}}
          dataSource={images}
          renderItem={item=>(
            <List.Item>
              <Card
                  headStyle={{height:"0"}}
                  title={<p>Title</p>}
                  hoverable
                  bodyStyle={{padding: "0"}}
              cover ={<img alt="example" src={item.urls.thumb} />}/>
            </List.Item>
          )}
          >
        </List>
      </InfinteScroll>
      </div>
    {/* </Layout> */}
  </>
    );
}