import React from 'react';
import {jsx, css} from '@emotion/react'

import {Layout} from 'antd';

export default function Footer(){
  const {Footer} = Layout;
  return (
    <div>
      <Footer style={{ textAlign: 'center' }}>사과농장은 애플에서 운영하는 사이트가 아닙니다.</Footer>
    </div>
  );

}