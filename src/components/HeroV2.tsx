import Section from "./Section"
import { ReactNode } from 'react';

import logo from '../assets/logo_bg.svg';

interface propsHero{
    children: ReactNode;
}

export default function HeroV2({children}: propsHero){


    return(

        <>
            <div className="bg-babyblue h-[120px] w-screen">THIS IS THE HOME PAGE</div>
            <Section className="bg-babyblue min-h-[450px] overflow-hidden">
                <div className="grid h-full lg:grid-cols-12">
                    <div className="w-full mt-[70px] lg:col-span-7 text-navy border">
                        {children}
                    </div>
                    <div className="w-full lg:col-span-5 relative hidden lg:block">
                        <img src={logo} className={`top-[-10px] right-[-60px] absolute min-w-[620px] bg-no-repeat rounded-lg border`}
                        ></img>
                    </div>
                </div>
            </Section>
        </>
    )
}