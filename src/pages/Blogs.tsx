import Section from '../components/Section';
import Split from '../components/Split';
import Quads from '../components/Quads';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Form from '../components/Form';

import img_spending from '../assets/spending-support.jpg';
import img_gaming from '../assets/gaming-drug.jpg';

import img_set_goals from '../assets/set_goals.jpg';
import img_school_to_work from '../assets/school_to_work.jpg';
import img_money_management from '../assets/money_management.jpg';
import img_debunking_myths from '../assets/debunking_myths.jpg';
import img_essential_skills from '../assets/6_essentialSkills.jpg';
import img_not_meeting_needs from '../assets/not_meeting_needs.jpg';


import img_hero from '../assets/pen-fire.png';

import { Link } from 'react-router-dom';

export default function Blogs(){


    return(
        <>
            <Hero img_src={img_hero}>
                <div className="text-center sm:text-left text">
                    <h1 className="text-h1-sm sm:text-h1-base">Blogs.</h1>
                    <p></p>
                </div>
            </Hero>
            <Section className="min-h-[300px]">
                <h1 className="pt-[20px] text-center sm:text-left text-h1-sm sm:text-h1-base">Our Latest.</h1>
                <Split left_span="6" right_span="6" className="w-full gap-6" responsive="md"
                left={
                    <Quads className="gap-6"
                        top_left={
                            <Link to="/Blogs/6EssentialSkillsForIndependentLiving">
                            <div className="cards-services min-h-[300px]">
                                <div className="border w-full min-h-[120px]"
                                    style={{
                                        backgroundImage: `url(${img_essential_skills})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                </div>
                                <h4>6 Essential Skills for Independent Living.</h4>
                            </div>
                            </Link>
                        }
                        top_right={
                            <Link to="/Blogs/HowToBudget">
                                <div className="min-h-[300px] cards-services">
                                    <div className="border w-full min-h-[120px]"
                                        style={{
                                            backgroundImage: `url(${img_money_management})`,
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center'
                                        }}
                                    >
                                    </div>
                                    <h4>Money Management: <br/>How to Budget.</h4>
                                </div>
                            </Link>
                        }
                        bottom_left={
                            <Link to="/Blogs/TipsOnTransitioning">
                            <div className="cards-services min-h-[300px]">
                                <div className="border w-full min-h-[120px]"
                                    style={{
                                        backgroundImage: `url(${img_school_to_work})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                </div>
                                <h4>Tips on transitioning from school to work with NDIS support.</h4>
                            </div>
                            </Link>
                        }
                        bottom_right={
                            <Link to="/Blogs/HowToSetGoals">
                            <div className="cards-services min-h-[300px]">
                                <div className="border w-full min-h-[120px]"
                                    style={{
                                        backgroundImage: `url(${img_set_goals})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                </div>
                                <h4>How to set goals.</h4>
                            </div>
                            </Link>
                        }
                    ></Quads>
                }
                right={
                    <Quads className="gap-6"
                        top_left={
                            <Link to="/Blogs/PlanReview">
                            <div className="cards-services min-h-[300px]">
                                <div className="border w-full min-h-[120px]"
                                    style={{
                                        backgroundImage: `url(${img_spending})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                </div>
                                <h4>How to prepare you NDIS plan review.</h4>
                            </div>
                            </Link>
                        }
                        top_right={
                            <Link to="/Blogs/MythsDebunked">
                            <div className="cards-services min-h-[300px]">
                                <div className="border w-full min-h-[120px]"
                                    style={{
                                        backgroundImage: `url(${img_debunking_myths})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                </div>
                                <h4>Common NDIS myths debunked!</h4>
                            </div>
                            </Link>
                        }
                        bottom_left={
                            <Link to="/Blogs/NotMeetingNeeds">
                            <div className="cards-services min-h-[300px]">
                                <div className="border w-full min-h-[120px]"
                                    style={{
                                        backgroundImage: `url(${img_not_meeting_needs})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                </div>
                                <h4>What to do if your NDIS plan isn't meeting your needs.</h4>
                            </div>
                            </Link>
                        }
                        bottom_right={
                            <Link to="/Blogs/AccessSpecialist">
                            <div className="cards-services min-h-[300px]">
                                <div className="border w-full min-h-[120px]"
                                    style={{
                                        backgroundImage: `url(${img_gaming})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                </div>
                                <h4>How to Access Specialist Disability Accommodation?</h4>
                            </div>
                            </Link>
                        }
                    ></Quads>
                }
                ></Split>
            </Section>
            <Form></Form>
            <Footer></Footer>
        </>
    )
}