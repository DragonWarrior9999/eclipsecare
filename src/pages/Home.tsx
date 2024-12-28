import Section from '../components/Section';

export default function Home(){


    return (
        <>
            <div className=" border border-orange-500 h-[120px] w-screen">THIS IS THE HOME PAGE</div>
            <Section className="min-h-[500px]">
                <div className="grid h-full lg:grid-cols-12">
                    <div className="w-full mt-[70px] lg:col-span-7 bg-red-500">
                        <div className="border border-white p-[20px]">
                            <p>Welcome to EclipseCare</p>
                            <h1>Your Life Our Mission.</h1>
                            <p className="border border-white max-w-[530px]">We're committed to our family and providing the best outcomes possible for participants and their goals in society.</p>
                        </div>
                        <div className="p-[20px]">
                            <button>Learn More</button>
                            <span className="ml-[10px]">Get Started</span>
                        </div>
                    </div>
                    <div className="w-full lg:col-span-5 bg-blue-500">
                        <div className="min-w-[400px] top-[70px] min-h-[300px] mt-[70px] border border-white rounded-lg"></div>
                    </div>
                </div>
            </Section>
            <Section className="h-[500px]">
                <div className="md:flex justify-center gap-8 border border-orange-400">
                        <div className="w-full md:max-w-[300px] rounded-lg h-[250px] border border-white"></div>
                        <div className="w-full md:max-w-[300px] rounded-lg h-[250px] border border-white"></div>
                        <div className="w-full md:max-w-[300px] rounded-lg h-[250px] border border-white"></div>
                </div>
            </Section>
        </>
    )
}