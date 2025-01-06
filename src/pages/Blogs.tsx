import Section from '../components/Section';
import Split from '../components/Split';
import Quads from '../components/Quads';
import Hero from '../components/Hero';

import img_behaviour from '../assets/behaviour-support.jpg';
import img_living from '../assets/living-support.jpg';
import img_spending from '../assets/spending-support.jpg';
import img_skills from '../assets/skills-dev.jpg';
import img_gaming from '../assets/gaming-drug.jpg';
import img_transport from '../assets/transport-management.jpg';
import img_court from '../assets/court-assistance.jpg';
import img_group from '../assets/4_people.jpg';

import img_hero from '../assets/pen-fire.png';

export default function Blogs(){


    return(
        <>
            <Hero img_src={img_hero}>
                <div className="text">
                    <h1>Blogs.</h1>
                    <p></p>
                </div>
            </Hero>
            <Section className="min-h-[300px]">
                <p>EclipseCare Services</p>
                <h1>Our Services.</h1>
                <Split left_span="6" right_span="6" className="w-full gap-6" responsive="md"
                left={
                    <Quads className="gap-6"
                        top_left={
                            <div className="cards-services min-h-[300px]">
                                <div className="border w-full min-h-[120px]"
                                    style={{
                                        backgroundImage: `url(${img_behaviour})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                </div>
                                <h4>6 Essential Skills for Independent Living.</h4>
                            </div>
                        }
                        top_right={
                            <div className="min-h-[300px] cards-services">
                                <div className="border w-full min-h-[120px]"
                                    style={{
                                        backgroundImage: `url(${img_living})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                </div>
                                <h4>Money Management: <br/>How to Budget.</h4>
                            </div>
                        }
                        bottom_left={
                            <div className="cards-services min-h-[300px]">
                                <div className="border w-full min-h-[120px]"
                                    style={{
                                        backgroundImage: `url(${img_skills})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                </div>
                                <h4>Tips on transitioning from school to work with NDIS support.</h4>
                            </div>
                        }
                        bottom_right={
                            <div className="cards-services min-h-[300px]">
                                <div className="border w-full min-h-[120px]"
                                    style={{
                                        backgroundImage: `url(${img_transport})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                </div>
                                <h4>How to set goals.</h4>
                            </div>
                        }
                    ></Quads>
                }
                right={
                    <Quads className="gap-6"
                        top_left={
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
                        }
                        top_right={
                            <div className="cards-services min-h-[300px]">
                                <div className="border w-full min-h-[120px]"
                                    style={{
                                        backgroundImage: `url(${img_group})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                </div>
                                <h4>Common NDIS myths debunked!</h4>
                            </div>
                        }
                        bottom_left={
                            <div className="cards-services min-h-[300px]">
                                <div className="border w-full min-h-[120px]"
                                    style={{
                                        backgroundImage: `url(${img_court})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                </div>
                                <h4>What to do if your NDIS plan isn't meeting your needs.</h4>
                            </div>
                        }
                        bottom_right={
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
                        }
                    ></Quads>
                }
                ></Split>
            </Section>
        </>
    )
}