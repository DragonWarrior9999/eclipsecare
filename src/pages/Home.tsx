import Section from '../components/Section';

export default function Home(){


    return (
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
                            <button className="button-light">Learn More</button>
                            <span className="ml-[10px]">Get Started</span>
                        </div>
                    </div>
                    <div className="w-full lg:col-span-5 relative">
                        <div className="bg-[url('src/assets/hero-img.png')] top-[20px] right-[-40px] relative min-h-[460px] min-w-[590px] bg-no-repeat rounded-lg"></div>
                    </div>
                </div>
            </Section>
            <Section className="min-h-[500px] mt-[20px]">
                <div className="border border-pink text">
                    <h2>Lorem ipsum odor amet.</h2>
                    <p className="max-w-[740px]">Tempus nisl vivamus efficitur etiam libero. Ac odio class nullam eu viverra porta fusce diam! Velit fringilla quis, scelerisque interdum sapien molestie facilisis pharetra.</p>
                </div> 
                <div className="mt-[10px] text flex-col flex md:flex-row justify-center gap-8 border border-orange-400">
                        <div className="text w-full md:max-w-[300px] rounded-lg min-h-[200px] border border-white">
                            <h3>Connect</h3>
                            <p className="mt-[20px]">Tempus nisl vivamus efficitur etiam libero. Ac odio class nullam eu viverra porta fusce diam! Velit fringilla quis.</p>
                        </div>
                        <div className="text w-full md:max-w-[300px] rounded-lg min-h-[200px] border border-white">
                            <h3>Book</h3>
                            <p className="mt-[20px]">Tempus nisl vivamus efficitur etiam libero. Ac odio class nullam eu viverra porta fusce diam! Velit fringilla quis.</p>
                        </div>
                        <div className="text w-full md:max-w-[300px] rounded-lg min-h-[200px] border border-white">
                            <h3>Manage</h3>
                            <p className="mt-[20px]">Tempus nisl vivamus efficitur etiam libero. Ac odio class nullam eu viverra porta fusce diam! Velit fringilla.</p>
                        </div>
                </div>
            </Section>
        </>
    )
}