import { useState, useEffect } from "react";
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
    const [lastScrollPosition, setLastScrollPosition] = useState(window.scrollY);
    

    useEffect(()=>{
        //nest the if condition below within the up and down if statement
        document.addEventListener('scroll', (e)=>{
            if(window.scrollY >= lastScrollPosition){
                console.log('scrolling down');
                console.log(window.scrollY);
                console.log(lastScrollPosition);
                //console.log(e);
            }else{
                console.log('scrolling up');
                console.log(window.scrollY);
                console.log(lastScrollPosition);
            }
            setLastScrollPosition(window.scrollY);
            //if(window.scrollY > 800){
                //setHideHeader(true);
            //}else{
                //setHideHeader(false);
            //}
        })
    }, [])

    return (
        <div className={`w-screen border border-red-500 fixed transform transition duration-2 ${hideHeader? '-translate-y-[200px]': 'translate-y-0'}`}>
            <Section className="min-h-[110px]">
                <div className="flex items-center w-full bg-red-400 h-full w-full">
                    <div className={`border border-white bg-[url('src/assets/logo-primary.svg')] bg-center bg-green-400 bg-no-repeat bg-contain w-[280px] min-h-[90px]`}></div>
                    {/*<img src={logo} className=" bg-green-500 object-contain w-[200px] border border-white" style={{width: "300"}}></img>*/}
                    {children}
                </div>
            </Section>

        </div>
    )
}