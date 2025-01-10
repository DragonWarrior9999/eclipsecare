import Section from '../components/Section';
import SplitBanner from '../components/SplitBanner';
import Split from '../components/Split';
import Quads from '../components/Quads';
import Form from '../components/Form';
import Footer from '../components/Footer';
import UsefulLinks from '../components/UsefulLinks';


import img_hero from '../assets/hero-img.png';
import img_laptop from '../assets/laptop-lady.jpg';
import img_smiling from '../assets/smiling-women.jpg';

export default function Home(){


    return (
        <>
            <div className=" bg-babyblue h-[120px] w-screen">THIS IS THE HOME PAGE</div>
            <div className="h-[140px] lg:hidden"
                style={{
                    backgroundImage: `url(${img_hero})`,
                    backgroundSize: 'cover'
                }}
            ></div>
            <Section className=" min-h-[460px] lg:min-h-[520px] pb-[20px] bg-white sm:bg-babyblue">
                <div className=" grid h-full lg:grid-cols-12">
                    <div className=" w-full mt-[30px] sm:mt-[70px] lg:col-span-7 text-navy">
                        <div className="p-[20px]">
                            <p className="text-center sm:text-left">Welcome to EclipseCare</p>
                            <h1 className="sm:text-h1-base text-h1-sm text-center sm:text-left">Your Life Our Mission.</h1>
                            <p className="text-center sm:text-left max-w-[530px] mt-[15px]">We're committed to our family and providing the best outcomes possible for participants and their goals in society.</p>
                        </div>
                        <div className="text-center sm:text-left p-[20px]">
                            <button className=" sm:button-light button-dark button-sm">Learn More</button>
                            <span className="ml-[10px] hidden sm:inline">Get Started</span>
                        </div>
                        <div className="sm:hidden p-[20px] text-center sm:text-left"><span>Get Started</span></div>
                    </div>
                    <div className=" w-full lg:col-span-5 relative hidden lg:block">
                        <div className="  top-[20px] right-[-40px] relative min-h-[460px] min-w-[590px] rounded-lg"
                            style={{

                                backgroundImage: `url(${img_hero})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }}
                        ></div>
                    </div>
                </div>
            </Section>
            
            <Section className="pt-[60px] pb-[20px] bg-babyblue sm:bg-white text-navy min-h-[500px]">
                <div className="text">
                    <h2 className="text-h2-sm sm:text-h2-base text-center sm:text-left">Lorem ipsum odor amet.</h2>
                    <p className="max-w-[740px] mt-[15px] text-center sm:text-left">Tempus nisl vivamus efficitur etiam libero. Ac odio class nullam eu viverra porta fusce diam! Velit fringilla quis, scelerisque interdum sapien molestie facilisis pharetra.</p>
                </div> 
                <div className=" mt-[10px] sm:p-[20px] flex-col flex md:flex-row justify-center gap-10">
                        <div className=" w-full md:max-w-[320px] rounded-lg min-h-[200px] cards ">
                            <h3 className="text-h3-sm sm:text-h3-base">1. Connect</h3>
                            <p className="mt-[20px] ">Tempus nisl vivamus efficitur etiam libero. Ac odio class nullam eu viverra porta fusce diam! Velit fringilla quis nullam eu viverra porta fusce. viverra porta fusce</p>
                        </div>
                        <div className=" w-full md:max-w-[300px] rounded-lg min-h-[200px] cards ">
                            <h3 className="text-h3-sm sm:text-h3-base">2. Book</h3>
                            <p className="mt-[20px] ">Tempus nisl vivamus efficitur etiam libero. Ac odio class nullam eu viverra porta fusce diam! Velit fringilla quis nullam eu viverra porta fusce. nullam eu viverra</p>
                        </div>
                        <div className="  w-full md:max-w-[300px] rounded-lg min-h-[200px] cards">
                            <h3 className="text-h3-sm sm:text-h3-base">3. Manage</h3>
                            <p className="mt-[20px] ">Tempus nisl vivamus efficitur etiam libero. Ac odio class nullam eu viverra porta fusce diam! Velit fringilla nullam eu viverra porta fusce. nullam eu viverra porta </p>
                        </div>
                </div>
            </Section>

            <Section className="min-h-[400px] mt-[30px] pt-[10px] pb-[10px] bg-primarydark">
                <div className=" sm:p-[40px]">
                    <SplitBanner img_src={img_smiling} image="left" className="bg-white text-navy rounded-lg min-h-[320px] ">
                        <h1 className="sm:text-h1-base text-h1-sm mt-[30px] text-center sm:text-left">Iaculis ar maecenas</h1>
                        <p className="max-w-[460px] text-center sm:text-left">Potenti vel curae erat, egestas odio aenean. Iaculis arcu maecenas blandit adipiscing ultricies ac; ultrices leo Iaculis arcu maecenas blandit</p>
                        {/*MAKE THIS A BIGG AHH BUTTON */}
                        <div className=" text-center sm:text-left">

                        <button className="mt-[15px] button-sm bg-babyblue text-navy">Get Started</button>
                        </div>
                    </SplitBanner>
                </div>
            </Section>
            <UsefulLinks></UsefulLinks>

            <Section className="min-h-[620px] bg-white hidden sm:grid">
                <div className="pt-[40px] ">
                    <Quads
                        className=""
                        top_left={
                            <div className=" text">
                                <h2 className="text-h2-sm sm:text-h2-base">Accessing disability support services with NDIS funding</h2>
                                <p className="mt-[20px] text-[2rem] font-semibold">Anyone with self-managed or plan-managed NDIS funding can access disability support services on EclipseCare.</p>
                            </div>
                        } 
                        top_right={
                            <div className=" h-full">
                                <div className=" mt-[10px] rounded-lg h-[250px]"
                                    style={{
                                        backgroundImage: `url(${img_laptop})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'right'
                            }}
                                ></div>
                            </div>
                        } 
                        bottom_left={
                            <div className=" text">
                                <h3 className="text-h3-sm sm:text-h3-base">How to use NDIS disability support funding on EclipseCare.</h3>
                                <p>If you are self-managed or plan-managed you can use your funds to book a disability support worker directly through your EclipseCare account. When setting up your account, just provide EclipseCare with your funding details and we will handle the rest. Learn more about using your NDIS funding on EclipseCare.</p>
                            </div>
                        } 
                        bottom_right={
                            <div className=" text">
                                <h3 className="text-h3-sm sm:text-h3-base">What disability support can be booked on EclipseCare?</h3>
                                <p>Depending on your NDIS funding limits, you can hire disability who can provide services including: gardening, cleaning, cooking, transport, personal care, nursing services, speech therapy, occupational therapy, physiotherapy, and psychology support. Learn more about the services available on EclipseCare.</p>
                            </div>
                        } 
                    ></Quads>
                </div>
            </Section>
            <Section className="bg-babyblue p-[40px] hidden sm:block">
                    <Split responsive="md" className="s4-p min-h-[200px] bg-primarydark rounded-lg" left_span='6' right_span='6' 
                    left={
                        <div className=" text-white">
                            <h2 className="text-h2-sm sm:text-h2-base">Whatever you want to achieve, we’ll help you get there.</h2>
                        </div>
                    }
                    right={
                        <div className=" flex flex-wrap items-center gap-4 justify-end">
                            <button className="button-light button-lg">Find Support</button>
                            <button className="ml-[10px] button-light button-lg">Newsletter</button>
                        </div>
                    }
                ></Split>
            </Section>
            <Section className="bg-white min-h-[600px] md:pt-[60px] pb-[20px] ">
                <div className=" min-h-[400px] lg:grid grid-cols-12">
                    <div className=" flex justify-center lg:block col-span-6">
                        <Form></Form>
                    </div>
                    <div className=" col-span-6 p-[10px]">
                    </div>
                </div>
            </Section>
            <Footer></Footer>
        </>
    )
}