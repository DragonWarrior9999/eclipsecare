import { useState, useEffect, useRef } from "react";
import Section from './Section';
import { ReactNode } from 'react';
import logo from '../assets/logo-primary.svg';

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
    

    useEffect(()=>{
        //nest the if condition below within the up and down if statement
        function handleScroll(){
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
        <div className={`w-screen border border-red-500 fixed transform transition duration-2 ${hideHeader? '-translate-y-[200px]': 'translate-y-0'}`}>
            <Section className="h-[110px]">
                <div className="flex items-center justify-between w-full bg-red-400 h-full w-full">
                    <div className={`border border-white bg-[url('src/assets/logo-primary.svg')] bg-center bg-green-400 bg-no-repeat bg-contain w-full max-w-[300px] max-h-[100px] h-full`}></div>
                    {/*<img src={logo} className=" bg-green-500 object-contain w-[200px] border border-white" style={{width: "300"}}></img>*/}
                    <div className="hidden lg:flex items-center h-full">
                        {children}
                        <button className="ml-[20px]">Referral Form</button>
                        <button className="ml-[20px]">Get Started</button>
                    </div>
                </div>
            </Section>

        </div>
    )
}