import { useState, useEffect, useRef } from "react";
import Section from './Section';
import { ReactNode } from 'react';
import logo from '../assets/logo-primary.svg';
import { Link } from 'react-router-dom';

interface propsHeader{
    children: ReactNode;
}

export default function Header({children}: propsHeader){

    //useEffect(()=>{
        //document.addEventListener('scroll', ()=>{
           //console.log(`X: ${window.scrollX}, Y:${window.scrollY}`);
        //})
    //}, [])
    const [hideHeader, setHideHeader] = useState(false);
    //const [lastScrollPosition, setLastScrollPosition] = useState(window.scrollY);
    const lastScrollPosition = useRef(0);
    const [reducedHeader, setReducedHeader] = useState(false);
    

    useEffect(()=>{
        //nest the if condition below within the up and down if statement
        

        function handleScroll(){

            if(lastScrollPosition.current > 5){
                setReducedHeader(true);
            }else{
                setReducedHeader(false);
            }

            if(window.scrollY > lastScrollPosition.current){
                //console.log('scrolling down');
                //console.log(window.scrollY);
                //console.log(lastScrollPosition.current);
                //console.log(e);
                if(window.scrollY > 600){
                    setHideHeader(true);
                }
            }else if(window.scrollY < lastScrollPosition.current){
                //console.log('scrolling up');
                //console.log(window.scrollY);
                //console.log(lastScrollPosition.current);
                
                setHideHeader(false);
            }
            //setLastScrollPosition(window.scrollY);
            lastScrollPosition.current = window.scrollY;
        }

        document.addEventListener('scroll', handleScroll);
            //if(window.scrollY > 800){
                //setHideHeader(true);
            //}else{
                //setHideHeader(false);
            //}
        
    }, [])

    return (
        <div className={`z-50 w-screen bg-white fixed transform transition duration-2 ${hideHeader? '-translate-y-[500px]': 'translate-y-0'}`}>
            <Section className={`transition-all duration-400 ${reducedHeader? 'h-[100px]': 'h-[130px]'}`}
            >
                <div className="flex items-center justify-between w-full h-full">
                        <div className={`transition-all duration-300 border border-white w-full max-h-[100px] h-full 
                            ${reducedHeader? 'max-w-[200px]' : 'max-w-[300px]'}
                            `}
                            style={{

                                backgroundImage: `url(${logo})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }}
                            >
                        </div>
                    {/*<img src={logo} className=" bg-green-500 object-contain w-[200px] border border-white" style={{width: "300"}}></img>*/}
                    <div className="hidden lg:flex items-center h-full">
                        {children}
                        <div className="w-[200px]"></div>
                        <Link to="/ReferralForm">
                        <button className="ml-[20px] button-dark button-sm">Get Started</button>
                        </Link>
                    </div>
                </div>
            </Section>

        </div>
    )
}