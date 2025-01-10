import Section from "./Section"
import { ReactNode } from 'react';

interface propsHero{
    img_src: string | undefined;
    children: ReactNode;
}

export default function Hero({img_src, children}: propsHero){


    return(

        <>
            <div className="bg-babyblue h-[120px] w-screen">THIS IS THE HOME PAGE</div>
            <div className="h-[140px] lg:hidden"
                style={{
                    backgroundImage: `url(${img_src})`,
                    backgroundSize: 'cover'
                }}
            ></div>
            <Section className="bg-babyblue min-h-[200px] pb-[20px] pt-[20px]">
                <div className="grid h-full lg:grid-cols-12">
                    <div className="w-full mt-[30px] sm:mt-[70px] lg:col-span-7 text-navy">
                        {children}
                    </div>
                    <div className="w-full lg:col-span-5 relative hidden lg:block">
                        <div className={`top-[20px] right-[-40px] relative min-h-[460px] min-w-[590px] bg-no-repeat rounded-lg`}
                        style={{ backgroundImage: `url(${img_src})`,
                            backgroundSize: "cover",
                     }}
                        ></div>
                    </div>
                </div>
            </Section>
        </>
    )
}