import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section from './components/Section';
import Header from './components/Header';
import Menu from './components/Menu';
import MenuHeading from './components/MenuHeading';
import SubMenu from './components/SubMenu';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';




function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="h-[7000px]">
      <Header>
        <Menu>
          <MenuHeading label="More">
            <SubMenu></SubMenu>
          </MenuHeading>
          <MenuHeading label="Find Support">
            <SubMenu></SubMenu>
          </MenuHeading>
          <MenuHeading label="Home" children=""></MenuHeading>
        </Menu>
      </Header>

      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
