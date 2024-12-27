import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section from './components/Section';
import Header from './components/Header';
import Menu from './components/Menu';
import MenuHeading from './components/MenuHeading';
import About from './pages/About';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-[7000px]">
      <Header>
        <Menu>
          <MenuHeading>Our Services</MenuHeading>
          <MenuHeading>More</MenuHeading>
          <MenuHeading>Find Support</MenuHeading>
        </Menu>
      </Header>
      <About></About>
    </div>
  )
}

export default App
