import Section from '../components/Section';
import SplitBanner from '../components/SplitBanner';

export default function Home(){


    return (
        <>
            <div className=" border border-orange-500 h-[120px] w-screen">THIS IS THE HOME PAGE</div>
            <Section className="min-h-[500px]">
                <div className="grid h-full lg:grid-cols-12">
                    <div className="w-full mt-[70px] lg:col-span-7 bg-red-500">
                        <div className="border border-white text">
                            <p>Welcome to EclipseCare</p>
                            <h1>Your Life Our Mission.</h1>
                            <p className="border border-white max-w-[530px]">We're committed to our family and providing the best outcomes possible for participants and their goals in society.</p>
                            <div className="mt-[20px]">
                                <button>Learn More</button>
                                <span className="ml-[10px]">Get Started</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:col-span-5 bg-blue-500">
                        <div className="min-w-[400px] top-[70px] min-h-[300px] mt-[70px] border border-white rounded-lg"></div>
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
            <Section className="min-h-[500px] mt-[30px]">
                <div className="p-[60px]">
                    <SplitBanner image="left" className="rounded-lg border border-white min-h-[400px]">
                        <h2>Iaculis arcu maecenas</h2>
                        <p>Potenti vel curae erat, egestas odio aenean. Iaculis arcu maecenas blandit adipiscing ultricies ac; ultrices leo curabitur. Nisi felis eros potenti diam vehicula mattis senectus suspendisse. Nisl luctus elit fringilla euismod aenean dis felis erat.</p>
                    </SplitBanner>
                </div>
            </Section>
        </>
    )
}