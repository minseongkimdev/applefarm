import React,{useState} from 'react';
import Link from 'next/link';

import {Drawer} from 'antd';
import { NavBar, Icon , Button} from 'antd-mobile';
import {MenuOutlined} from '@ant-design/icons'

export default function Nav(){ 


  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const onClickDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
    <NavBar
      mode="light"
      icon={<MenuOutlined type="left" />}
      onLeftClick={ showDrawer }

    >
      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
              <Link href="/signin">
          <a href="signin">로그인 / 회원가입</a>
        </Link>

      </Drawer>

      <Link href="/">
          <a href="/">AppleFarm</a>
        </Link>


    </NavBar>
    </div>
  );
}