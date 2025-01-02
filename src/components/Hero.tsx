import Section from "./Section"



export default function Hero(){


    return(

        <>
            <div className="bg-babyblue h-[120px] w-screen">THIS IS THE HOME PAGE</div>
            <Section className="bg-babyblue min-h-[520px]">
                <div className="grid h-full lg:grid-cols-12">
                    <div className="w-full mt-[70px] lg:col-span-7 text-navy">
                        <div className="p-[20px]">
                            <p>Welcome to EclipseCare</p>
                            <h1>Your Life Our Mission.</h1>
                            <p className="max-w-[530px]">We're committed to our family and providing the best outcomes possible for participants and their goals in society.</p>
                        </div>
                        <div className="p-[20px]">
                            <button className="button-light button-sm">Learn More</button>
                            <span className="ml-[10px]">Get Started</span>
                        </div>
                    </div>
                    <div className="w-full lg:col-span-5 relative hidden lg:block">
                        <div className="bg-[url('src/assets/hero-img.png')] top-[20px] right-[-40px] relative min-h-[460px] min-w-[590px] bg-no-repeat rounded-lg"></div>
                    </div>
                </div>
            </Section>
        </>
    )
}