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
import About from './pages/About';
import Services from './pages/Services/Services';
import BehaviourSupport from './pages/Services/BehaviourSupport';
import LivingSupport from './pages/Services/LivingSupport';
import SpendingSupport from './pages/Services/SpendingSupport';
import SkillsDev from './pages/Services/SkillsDev';
import Transport from './pages/Services/Transport';
import GetInvolved from './pages/GetInvolved';
import Careers from './pages/Careers';
import Blogs from './pages/Blogs';
import Events from './pages/Events';
import SupportServices from './pages/SupportServices';
import Faqs from './pages/Faqs';
import GamingDrug from './pages/Services/GamingDrug';
import CourtSupport from './pages/Services/courtsupport';
import GroupActivity from './pages/Services/GroupActivity';

import img_sub_menu_1 from './assets/4_people.jpg';
import img_sub_menu_2 from './assets/theBoys.jpg';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="h-[7000px]">

      <Router>

        <Header>
          <Menu>
            <Link to="/"><MenuHeading label="Home" children=""></MenuHeading></Link>
            <MenuHeading label="Find Support">
              <SubMenu img_src={img_sub_menu_2}
              left_children={
                <>
                  <ul className="sub-menu-ul">Support Coordination
                      <Link to="/Services/BehaviourSupport"><li>Behaviour Support</li></Link>
                      <Link to="/Services/SpendingSupport"><li>Spending Support</li></Link>
                      <Link to="/Services/LivingSupport"><li>Living Support (SIL)</li></Link>
                  </ul>
                  <ul className="sub-menu-ul">Other
                      <Link to="/Services/SkillsDev"><li>Skills Development</li></Link>
                      <Link to="/Services/TransportManagement"><li>Transport Management</li></Link>
                      <Link to="/Services/GamingCounselling"><li>Gaming and Drug Counselling</li></Link>
                  </ul>
                </>
              } 
              right_children={
                <>
                  <ul className="sub-menu-ul">NDIS
                      <Link to="NDIS/SupportServices"><li>Support Services</li></Link>
                      <Link to="NDIS/Faqs"><li>FAQs</li></Link>
                      <Link to=""><li>Pricing</li></Link>
                  </ul>
                    <ul className="sub-menu-ul">Activites
                        <Link to="/Services/GroupActivity"><li>Group Activities</li></Link>
                        <Link to="/Services/CourtSupport"><li>Court Assistance</li></Link>
                  </ul>
                </>
              }></SubMenu>
            </MenuHeading>
            <MenuHeading label="More">
              <SubMenu img_src={img_sub_menu_1}
              left_children={
                <>
                  <ul className="sub-menu-ul">Community
                      <Link to="/About">
                        <li>Our People</li>
                      </Link>
                      <Link to="/Community/GetInvolved"><li>Get Involved</li></Link>
                      <Link to="/Community/Careers"><li>Careers</li></Link>
                      <Link to=""><li>Mentor Stories</li></Link>
                  </ul>
                  <ul className="sub-menu-ul">News and Events
                      <Link to="/Latest/Blogs"><li>Blogs</li></Link>
                      <Link to="/Latest/Events"><li>Events</li></Link>
                      <Link to=""><li>Annual Review</li></Link>
                  </ul>
                </>
              }
              right_children={
                <ul className="sub-menu-ul">Resources
                    <Link to=""><li>Community resources</li></Link>
                    <Link to=""><li>Resources for Parents</li></Link>
                    <Link to=""><li>Insurance</li></Link>
                </ul>
              }
              ></SubMenu>
            </MenuHeading>
          </Menu>
        </Header>

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Services" element={<Services/>}></Route>
          <Route path="/Services/BehaviourSupport" element={<BehaviourSupport/>}></Route>
          <Route path="/Services/LivingSupport" element={<LivingSupport/>}></Route>
          <Route path="/Services/SpendingSupport" element={<SpendingSupport/>}></Route>
          <Route path="/Community/GetInvolved" element={<GetInvolved/>}></Route>
          <Route path="/Community/Careers" element={<Careers/>}></Route>
          <Route path="/Latest/Blogs" element={<Blogs/>}></Route>
          <Route path="/Latest/Events" element={<Events/>}></Route>
          <Route path="/NDIS/SupportServices" element={<SupportServices/>}></Route>
          <Route path="/NDIS/Faqs" element={<Faqs/>}></Route>
          <Route path="/Services/SkillsDev" element={<SkillsDev/>}></Route>
          <Route path="/Services/TransportManagement" element={<Transport/>}></Route>
          <Route path="/Services/GamingCounselling" element={<GamingDrug/>}></Route>
          <Route path="/Services/CourtSupport" element={<CourtSupport/>}></Route>
          <Route path="/Services/GroupActivity" element={<GroupActivity/>}></Route>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
