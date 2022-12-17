import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import App from '../App'
import Home from '../Home'
import Login from '../Login'
import List from '../pages/List'
import User from '../pages/User'
import Config from '../pages/Config'
import { createBrowserHistory } from "history";
import { Switch } from 'antd'
import { Navigate } from 'react-router-dom'
import Option5 from '../pages/Option5'

const BaseRouter  = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' exact element={<App />} >
            <Route path='/list' exact element={<List />}></Route>
            <Route path='/user' exact element={<User />}></Route>
            <Route path='/config' exact element={<Config />}></Route>

            <Route path='/option1' element={<User/>}></Route>
            <Route path='/option2' element={<List/>}></Route>
            <Route path='/option3' element={<Option5/>}></Route>
            <Route path='/option4' element={<Option5/>}></Route>
            <Route path='/option5' element={<List/>}></Route>
            <Route path='/option6' element={<User/>}></Route>
            <Route path='/option7' element={<Config/>}></Route>
            <Route path='/option8' element={<List/>}></Route>
            <Route path='/option9' element={<User/>}></Route>
          </Route>
          <Route path='/login' exact element={<Login />}></Route>
          <Route path='/home' exact element={<Navigate to='/list' />}></Route>
        </Routes>
    </Router>
  )
}

export default BaseRouter