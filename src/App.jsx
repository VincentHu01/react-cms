import React from 'react'
import {Outlet} from 'react-router-dom'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import './Home.css'
import Logo from "./assets/logo.jpeg"
import Home from './Home'
import Login from './Login';


export default function App() {
  const token = localStorage["token"];

  console.log('token', {token})

  setTimeout(()=>{
    localStorage.removeItem('token')
  }, 600000)

  // if(!token||token==='null') {
  //   console.log('no token：',{token})
  //   return <Login/>
  // }
  return (
     <Home/>
  )
}
