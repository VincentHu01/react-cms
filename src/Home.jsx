import React, { Fragment, useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, message, theme } from 'antd';
import './Home.css'
import Logo from "./assets/logo.jpeg"
import {Outlet, useNavigate} from 'react-router-dom'
import Login from './Login'
import Avata from './pages/Avata';


const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3', '4', '5', '6'].map((key) => ({
  key,
  label: `Menu ${key}`,
}));



const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(3).fill(null).map((_, j) => {
      const subKey = index * 3 + j + 1;
      return {
        key: `option${subKey}`,
        label: `option${subKey}`,
      };
    }),
  };
});


const items3 = [
  {
    key: 'sub1',
    icon: React.createElement(UserOutlined),
    label: 'SubMenu 1',
    children: [
      {key: 'list', label: 'Content Manage'},
      {key: 'user', label: 'User Infomation'},
      {key: 'config', label: 'System Config'}
    ]
  },
  {
    key: 'sub2',
    icon: React.createElement(LaptopOutlined),
    label: 'SubMenu 2',
    children: [
      {key: 'option4', label: 'Option4'},
      {key: 'option5', label: 'Option5'},
      {key: 'option6', label: 'Option6'}
    ]
  },
  {
    key: 'sub3',
    icon: React.createElement(NotificationOutlined),
    label: 'SubMenu 3',
    children: [
      {key: 'option7', label: 'Option7'},
      {key: 'option8', label: 'Option8'},
      {key: 'option9', label: 'Option9'}
    ]
  }

]

const sideList = {
  '1' : items3,
  '2' : items2,
  '3' : items3,
  '4' : items2,
  '5' : items3,
  '6' : items2
}


export default function Home() {
      const navigate = useNavigate()
      const [side, setSide] = useState(1)
      const {
          token: { colorBgContainer },
        } = theme.useToken();

      const handleClick = (e) => {
        //console.log(e)
        let path = '/'+e.key
        //console.log(path)
        navigate(path)
      }
      const handleMenu = (e) => {
        console.log(e.key, side)
        setSide(e.key)
        setTimeout(()=>{
          console.log(e.key, side)
        }, 10)
      }

      


      return localStorage.getItem('token') ? (
        <div className='outer'>
        <Layout className='container'>
          <Header className="header" style={{backgroundColor: "white", height:"60px"}}>
            <img src={Logo} alt="" className='logo'/>
            <Menu theme="light" onClick={handleMenu} mode="horizontal" defaultSelectedKeys={['1']} items={items1} className="topMenu" style={{backgroundColor: "white", height:"100%", maxHeight:"100%"}}/>
            <Avata className='username'></Avata>
            {/* <Button className='logout' onClick={logout}>Logout</Button> */}
          </Header>
          <Layout>
            <Sider
              width={200}
              style={{
                 background: colorBgContainer,
              }}
            >
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{
                  height: '100%',
                  borderRight: 0,
                }}
                items={sideList[side]}
                onClick={handleClick}
              />
            </Sider>
            <Layout
              style={{
                padding: '0 24px 24px 15px',
              }}
            >
              <Breadcrumb
                style={{
                  margin: '0px 0px',
                }}
              >
                <Breadcrumb.Item>App</Breadcrumb.Item>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>

              </Breadcrumb>
              <Content
                style={{
                  padding: 24,
                  margin: 0, 
                  minHeight: 280,
                  background: colorBgContainer,
                }}
              >
                <Outlet/>
              </Content>
            </Layout>
          </Layout>
        </Layout>
        </div>
      ):(<Login/>);
}
