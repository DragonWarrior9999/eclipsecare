import Section from '../components/Section';
import SplitBanner from '../components/SplitBanner';
import Split from '../components/Split';
import { Link } from 'react-router-dom';
import Quads from '../components/Quads';

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
                            <span className="underline ml-[10px]">Get Started</span>
                        </div>
                    </div>
                    <div className="w-full lg:col-span-5 relative hidden lg:block">
                        <div className="bg-[url('src/assets/hero-img.png')] top-[20px] right-[-40px] relative min-h-[460px] min-w-[590px] bg-no-repeat rounded-lg"></div>
                    </div>
                </div>
            </Section>
            <Section className="pt-[60px] pb-[50px] bg-white text-navy min-h-[500px] mt-[20px]">
                <div className="border border-pink text">
                    <h2>Lorem ipsum odor amet.</h2>
                    <p className="max-w-[740px]">Tempus nisl vivamus efficitur etiam libero. Ac odio class nullam eu viverra porta fusce diam! Velit fringilla quis, scelerisque interdum sapien molestie facilisis pharetra.</p>
                </div> 
                <div className="mt-[10px] text flex-col flex md:flex-row justify-center gap-8">
                        <div className="text w-full md:max-w-[300px] rounded-lg min-h-[200px] border border-white cards">
                            <h3>Connect</h3>
                            <p className="mt-[20px] text-[1.6rem]">Tempus nisl vivamus efficitur etiam libero. Ac odio class nullam eu viverra porta fusce diam! Velit fringilla quis nullam eu viverra porta fusce. viverra porta fusce</p>
                        </div>
                        <div className="text w-full md:max-w-[300px] rounded-lg min-h-[200px] border border-white cards">
                            <h3>Book</h3>
                            <p className="mt-[20px] text-[1.6rem]">Tempus nisl vivamus efficitur etiam libero. Ac odio class nullam eu viverra porta fusce diam! Velit fringilla quis nullam eu viverra porta fusce. nullam eu viverra</p>
                        </div>
                        <div className="text w-full md:max-w-[300px] rounded-lg min-h-[200px] border border-white cards">
                            <h3>Manage</h3>
                            <p className="mt-[20px] text-[1.6rem]">Tempus nisl vivamus efficitur etiam libero. Ac odio class nullam eu viverra porta fusce diam! Velit fringilla nullam eu viverra porta fusce. nullam eu viverra porta </p>
                        </div>
                </div>
            </Section>
            <Section className="min-h-[450px] mt-[30px] bg-primarydark">
                <div className="p-[40px]">
                    <SplitBanner img_src="src/assets/smiling-women.jpg" image="left" className="bg-white text-navy rounded-lg min-h-[350px]">
                        <h1 className="mt-[35px]">Iaculis ar maecenas</h1>
                        <p className="max-w-[460px]">Potenti vel curae erat, egestas odio aenean. Iaculis arcu maecenas blandit adipiscing ultricies ac; ultrices leo Iaculis arcu maecenas blandit</p>
                    </SplitBanner>
                </div>
            </Section>
            <Section className="min-h-[540px] pt-[20px] bg-babyblue text-navy">
                <div className="bg-white p-[60px]">
                    <div>
                        <h2>Some helpful links to get you started</h2>
                        <p>Check out our blogs too...</p>
                    </div>
                    <Split className="min-h-[200px]" left_span='6' right_span='6'
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
                                <div className="mt-[10px] border border-orange rounded-lg h-[250px] bg-cover bg-right bg-no-repeat bg-[url('src/assets/laptop-lady.jpg')]"></div>
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
        </>
    )
}