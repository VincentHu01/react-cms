import React from 'react';
import { Dropdown, Button } from 'antd';
import {useNavigate} from 'react-router-dom';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { message, Space, Tooltip } from 'antd';
import './Avata.css'
import Profile from "../assets/hh.jpeg"

  

export default function Avata() { 
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('token')
        message.info('logout ...', 0.5)
        setTimeout(()=>{
          navigate('/login')
        }, 500)
    }
    

    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
      };

      const items = [
        {
          label: 'logout',
          key: '1',
        //   icon: <UserOutlined />,
        },
      ];
      const menuProps = {
        items,
        onClick: logout,
      };
    

    

    return (
        <Space wrap>
        
        <Dropdown menu={menuProps}>
          <Button >
            <Space >
              {/* <UserOutlined /> */}
              <div className='profile'>
                <img src={Profile} alt="" className='img' />
                <div className='username'>
                    {localStorage.getItem('username')}
                </div>
              </div>
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>

      </Space>
    );
}
