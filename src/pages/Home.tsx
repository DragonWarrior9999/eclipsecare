import Section from '../components/Section';
import SplitBanner from '../components/SplitBanner';
import Split from '../components/Split';
import Quads from '../components/Quads';
import Form from '../components/Form';
import img_hero from '../assets/hero-img.png';
import img_laptop from '../assets/laptop-lady.jpg';

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
                            <p className="max-w-[530px] mt-[15px]">We're committed to our family and providing the best outcomes possible for participants and their goals in society.</p>
                        </div>
                        <div className="p-[20px]">
                            <button className="button-light button-sm">Learn More</button>
                            <span className="ml-[10px]">Get Started</span>
                        </div>
                    </div>
                    <div className="w-full lg:col-span-5 relative hidden lg:block">
                        <div className=" top-[20px] right-[-40px] relative min-h-[460px] min-w-[590px] rounded-lg"
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
            
            <Section className="pt-[60px] pb-[20px] bg-white text-navy min-h-[500px] border">
                <div className="text">
                    <h2>Lorem ipsum odor amet.</h2>
                    <p className="max-w-[740px] mt-[15px]">Tempus nisl vivamus efficitur etiam libero. Ac odio class nullam eu viverra porta fusce diam! Velit fringilla quis, scelerisque interdum sapien molestie facilisis pharetra.</p>
                </div> 
                <div className="mt-[10px] text flex-col flex md:flex-row justify-center gap-10">
                        <div className="w-full md:max-w-[320px] rounded-lg min-h-[200px] cards">
                            <h3>1. Connect</h3>
                            <p className="mt-[20px] ">Tempus nisl vivamus efficitur etiam libero. Ac odio class nullam eu viverra porta fusce diam! Velit fringilla quis nullam eu viverra porta fusce. viverra porta fusce</p>
                        </div>
                        <div className="w-full md:max-w-[300px] rounded-lg min-h-[200px] cards">
                            <h3>2. Book</h3>
                            <p className="mt-[20px] ">Tempus nisl vivamus efficitur etiam libero. Ac odio class nullam eu viverra porta fusce diam! Velit fringilla quis nullam eu viverra porta fusce. nullam eu viverra</p>
                        </div>
                        <div className=" w-full md:max-w-[300px] rounded-lg min-h-[200px] cards">
                            <h3>3. Manage</h3>
                            <p className="mt-[20px] ">Tempus nisl vivamus efficitur etiam libero. Ac odio class nullam eu viverra porta fusce diam! Velit fringilla nullam eu viverra porta fusce. nullam eu viverra porta </p>
                        </div>
                </div>
            </Section>
            <Section className="min-h-[400px] mt-[30px] bg-primarydark">
                <div className="p-[40px]">
                    <SplitBanner img_src="src/assets/smiling-women.jpg" image="left" className="bg-white text-navy rounded-lg min-h-[320px] ">
                        <h1 className="mt-[30px]">Iaculis ar maecenas</h1>
                        <p className="max-w-[460px]">Potenti vel curae erat, egestas odio aenean. Iaculis arcu maecenas blandit adipiscing ultricies ac; ultrices leo Iaculis arcu maecenas blandit</p>
                        {/*MAKE THIS A BIGG AHH BUTTON */}
                        <button className="mt-[15px] button-sm bg-babyblue text-navy">Get Started</button>
                    </SplitBanner>
                </div>
            </Section>
            <Section className="min-h-[540px] pt-[20px] bg-babyblue text-navy">
                <div className="bg-white p-[60px]">
                    <div>
                        <h2>Some helpful links to get you started</h2>
                        <p>Check out our blogs too...</p>
                    </div>
                    <Split responsive="md" className="min-h-[200px]" left_span='6' right_span='6'
                        left={
                            <ul className="p-[20px] faq-list">
                                <li>Frequently Asked Questions</li>
                                <li>How to sign up as a client on EclispeCare</li>
                                <li>Risks of taking your booking away from EclipseCare</li>
                                <li>Insurance</li>
                            </ul>
                        } 
                        right={
                            <ul className="hidden md:block p-[20px] faq-list">
                                <li>Navigating NDIS</li>
                                <li>Writing a great job post to find a support worker</li>
                                <li>What to consider when looking for support</li>
                                <li>Building your support team</li>
                            </ul>
                        }
                    />
                </div>
            </Section>
            <Section className="min-h-[620px] bg-white">
                <div className="pt-[40px]">
                    <Quads
                        className=""
                        top_left={
                            <div className="text">
                                <h2>Accessing disability support services with NDIS funding</h2>
                                <p className="mt-[20px] text-[2rem] font-semibold">Anyone with self-managed or plan-managed NDIS funding can access disability support services on Mable.</p>
                            </div>
                        } 
                        top_right={
                            <div className="h-full">
                                <div className="mt-[10px] border border-orange rounded-lg h-[250px]"
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
                            <div className="text">
                                <h3>How to use NDIS disability support funding on Mable</h3>
                                <p>If you are self-managed or plan-managed you can use your funds to book a disability support worker directly through your Mable account. When setting up your account, just provide Mable with your funding details and we will handle the rest. Learn more about using your NDIS funding on Mable.</p>
                            </div>
                        } 
                        bottom_right={
                            <div className="text">
                                <h3>What disability support can be booked on Mable?</h3>
                                <p>Depending on your NDIS funding limits, you can hire disability who can provide services including: gardening, cleaning, cooking, transport, personal care, nursing services, speech therapy, occupational therapy, physiotherapy, and psychology support. Learn more about the services available on Mable.</p>
                            </div>
                        } 
                    ></Quads>
                </div>
            </Section>
            <Section className="bg-babyblue p-[40px]">
                    <Split responsive="md" className="s4-p min-h-[200px] bg-primarydark rounded-lg" left_span='6' right_span='6' 
                    left={
                        <div className="text-white">
                            <h2>Whatever you want to achieve, we’ll help you get there.</h2>
                        </div>
                    }
                    right={
                        <div className="flex flex-wrap items-center gap-4 justify-end">
                            <button className="button-light button-lg">Find Support</button>
                            <button className="ml-[10px] button-light button-lg">Newsletter</button>
                        </div>
                    }
                ></Split>
            </Section>
            <Section className="bg-white min-h-[600px] pt-[100px]">
                <div className="min-h-[400px] lg:grid grid-cols-12">
                    <div className="flex justify-center lg:block col-span-6">
                        <Form></Form>
                    </div>
                    <div className="col-span-6 border p-[10px] hidden">
                        <h1 className="max-w-[390px] text-navy">jwenwkn wj aswe asdks asas sa</h1>
                        <SplitBanner img_src="src/assets/theBoys.jpg" image="left" className="mt-[15px] border text-navy rounded-lg min-h-[200px]">
                            <p className="max-w-[460px]">Potenti vel curae erat, egestas odio aenean. Iaculis arcu maecenas blandit adipiscing ultricies ac; ultrices leo Iaculis arcu maecenas blandit</p>
                            {/*MAKE THIS A BIGG AHH BUTTON */}
                        </SplitBanner>
                        <SplitBanner img_src="src/assets/wheelchair_hand.jpg" image="left" className="mt-[10px] border text-navy rounded-lg min-h-[200px]">
                            <p className="max-w-[460px]">Potenti vel curae erat, egestas odio aenean. Iaculis arcu maecenas blandit adipiscing ultricies ac; ultrices leo Iaculis arcu maecenas blandit</p>
                            {/*MAKE THIS A BIGG AHH BUTTON */}
                        </SplitBanner>
                    </div>
                </div>
                
            </Section>
        </>
    )
}