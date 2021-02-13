import React from 'react'
import {Card} from 'antd';

// const Img = 1

export const ImageCardList = ({url, key}) => {
  return (
    <>
      <Card>
        hoverable
        style={{width:"100vw"}}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      </Card>
      <img src={url} alt={key}/>
    </>
  )
}
