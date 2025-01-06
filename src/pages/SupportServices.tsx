import Section from '../components/Section';
import SplitBanner from '../components/SplitBanner';
import Split from '../components/Split';
import { Link } from 'react-router-dom';
import Quads from '../components/Quads';
import Form from '../components/Form';
import Hero from '../components/Hero';

import img_hero from '../assets/SupportServices.jpg';

import img_behaviour from '../assets/behaviour-support.jpg';
import img_living from '../assets/living-support.jpg';
import img_spending from '../assets/spending-support.jpg';
import img_skills from '../assets/skills-dev.jpg';
import img_gaming from '../assets/gaming-drug.jpg';
import img_transport from '../assets/transport-management.jpg';
import img_court from '../assets/court-assistance.jpg';
import img_group from '../assets/4_people.jpg';

export default function SupportServices(){


    return(
        <>
            <Hero img_src={img_hero}>
                <div className="text">
                    <p>Learn About NDIS</p>
                    <h1>Support Services.</h1>
                    <p>We provide care that’s as unique as you are, with a focus on your independence and happiness.</p>
                </div>
            </Hero>
            <Section className="">
                <div className={`md:grid grid-cols-12 `}>
                    <div className={`article-text col-span-9 min-h-[500px]`}>
                        <h2>What is Support Services?</h2>
                        <br/>
                        <p>NDIS support services help people with disabilities live better lives by providing the care and assistance they need. These services can include things like personal care, therapy, help with daily activities, and support to join community activities, all based on each person's unique needs.</p>
                        <br/>
                        <br/>
                        <h3>Who is eligible to recieve NDIS support services?</h3>
                        <br/>
                        To to eligible for NDIS support services, you must:
                        <ul className="pl-[20px] pt-[20px] space-y-6">
                            <li>1. Be under the age of 65 when you apply.</li>
                            <li>2. Be an Australian citizen, permanent resident, or hold a Protected Special Category Visa.</li>
                            <li>3. Have a permanent and significant disability that affects your ability to take part in everyday activities.</li>
                        </ul>
                        <br/>
                        <br/>
                        <h3>Who provides these Services?</h3>
                        <br/>
                        <p>NDIS services are provided by businesses, organizations, or individuals called NDIS providers. Providers like EclipseCare help with the supports in a participant's NDIS plan. Participants can choose the providers that suit them best.</p>                            
                    </div>
                    <div className={`col-span-3`}
                    style={{
                        backgroundImage: `url(${img_living})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}
                    >
                    </div>
                </div>
            </Section>
            <Section className="min-h-[300px]">
                <p>EclipseCare Services</p>
                <h1>Our Services.</h1>
                <Split left_span="6" right_span="6" className="w-full gap-6" responsive="md"
                left={
                    <Quads className="gap-6"
                        top_left={
                            <div className="border border-yellow-400 min-h-[300px] cards">
                                <div className="border w-full min-h-[180px]"
                                    style={{
                                        backgroundImage: `url(${img_behaviour})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                </div>
                                <h4>Behaviour Support</h4>
                            </div>
                        }
                        top_right={
                            <div className="border border-yellow-400 min-h-[300px] cards">
                                <div className="border w-full min-h-[180px]"
                                    style={{
                                        backgroundImage: `url(${img_living})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                </div>
                                <h4>Living Support</h4>
                            </div>
                        }
                        bottom_left={
                            <div className="border border-yellow-400 min-h-[300px] cards">
                                <div className="border w-full min-h-[180px]"
                                    style={{
                                        backgroundImage: `url(${img_skills})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                </div>
                                <h4>Skills Development</h4>
                            </div>
                        }
                        bottom_right={
                            <div className="border border-yellow-400 min-h-[300px] cards">
                                <div className="border w-full min-h-[180px]"
                                    style={{
                                        backgroundImage: `url(${img_transport})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                </div>
                                <h4>Transport Managment</h4>
                            </div>
                        }
                    ></Quads>
                }
                right={
                    <Quads className="gap-6"
                        top_left={
                            <div className="border border-yellow-400 min-h-[300px] cards">
                                <div className="border w-full min-h-[180px]"
                                    style={{
                                        backgroundImage: `url(${img_spending})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                </div>
                                <h4>Spending Support</h4>
                            </div>
                        }
                        top_right={
                            <div className="border border-yellow-400 min-h-[300px] cards">
                                <div className="border w-full min-h-[180px]"
                                    style={{
                                        backgroundImage: `url(${img_group})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                </div>
                                <h4>Group Activities</h4>
                            </div>
                        }
                        bottom_left={
                            <div className="border border-yellow-400 min-h-[300px] cards">
                                <div className="border w-full min-h-[180px]"
                                    style={{
                                        backgroundImage: `url(${img_court})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                </div>
                                <h4>Court Assistance</h4>
                            </div>
                        }
                        bottom_right={
                            <div className="border border-yellow-400 min-h-[300px] cards">
                                <div className="border w-full min-h-[180px]"
                                    style={{
                                        backgroundImage: `url(${img_gaming})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                </div>
                                <h4>Gaming and Drug Counselling</h4>
                            </div>
                        }
                    ></Quads>
                }
                ></Split>
            </Section>
        </>
    )
}