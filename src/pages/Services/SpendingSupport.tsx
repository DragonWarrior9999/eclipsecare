import Hero from "../../components/Hero"
import Section from '../../components/Section';
import SplitBanner from '../../components/SplitBanner';
import Split from '../../components/Split';
import { Link } from 'react-router-dom';
import Quads from '../../components/Quads';
import Form from '../../components/Form';
import HeroV2 from "../../components/HeroV2";
import TwoCards from "../../components/TwoCards";

import img_behaviour from '../../assets/behaviour-support.jpg';
import img_living from '../../assets/living-support.jpg';
import img_spending from '../../assets/spending-support.jpg';
import img_skills from '../../assets/skills-dev.jpg';
import img_gaming from '../../assets/gaming-drug.jpg';
import img_transport from '../../assets/transport-management.jpg';
import img_court from '../../assets/court-assistance.jpg';
import img_group from '../../assets/4_people.jpg';


export default function SpendingSupport(){


    return(
        <>
            <HeroV2>
                <div className="text">
                    <p>Our services</p>
                    <h1>Spending Support.</h1>
                    <p>Managing Money, Empowering Independence.</p>
                </div>
            </HeroV2>
            <Section className="pt-[30px] pb-[30px]">
                <div className={`md:grid grid-cols-12 `}>
                    <div className={`col-span-9 min-h-[500px]`}>
                        <div className={`article-text min-h-[300px]`}>
                            <h2>Spending Support</h2>
                            <br/>
                            <p>Our Behavior Support services are designed to empower individuals with disabilities to lead more fulfilling and independent lives by addressing challenging behaviors in a supportive and person-centered way. We work collaboratively with participants, their families, and support teams to develop individualized behavior support plans that focus on understanding the underlying causes of behaviors and implementing strategies to foster positive change. Our team of qualified specialists is dedicated to creating safe and respectful environments where participants can thrive.</p>
                            <br/>
                            <p className="">At the heart of our approach is a commitment to evidence-based practices that promote skill development, emotional regulation, and community inclusion. We provide ongoing training, guidance, and support to ensure these strategies are effectively implemented and adapted as needed. Whether it’s through reducing barriers to daily activities, improving communication, or enhancing relationships, our Behavior Support services are tailored to help participants achieve their unique goals and reach their full potential.</p>

                        </div>
                    </div>
                    <div className={`col-span-3 `}
                    style={{
                        backgroundImage: `url(${img_spending})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}
                    >
                    </div>
                </div>
            </Section>
            <Section className="min-h-[400px] bg-babyblue">
                <TwoCards 
                img_left={img_behaviour}
                heading_left="Behaviour Support"
                img_right={img_living}
                heading_right="Living Support"
                ></TwoCards>
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