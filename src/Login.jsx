import React from 'react';
import "./Login.css"
import Logo from "./assets/logo.jpeg"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate} from 'react-router-dom';
import history from './route/history'
// import { createBrowserHistory, createHashHistory } from 'history';
import { message } from 'antd';
//const history =  createBrowserHistory()

const Login = () => {   
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    if (values['username'] != undefined & values['password'] != undefined) {
      if(values['username'].length>0 & values['password'].length>0){
         localStorage.setItem("token", '123')
        console.log('set token: ', localStorage.getItem('token'))
        message.success('login...', 0.5)
        localStorage.setItem('username', values['username'])
        setTimeout(()=>{
          navigate('/home');
        }, 500)
      }
    } else {
      message.error('incorrect username or password', 1)
    }
  };

  return (
    <div className='login'>
      <div className='login-box'>

      <img src={Logo} alt="" />
     
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
       
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
       
      >
        <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" block>
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
      </div>
    </div>
  );
};
export default Login;

