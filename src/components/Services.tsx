
import Section from '../components/Section';
import Split from '../components/Split';
import Quads from '../components/Quads';
import { Link } from 'react-router-dom';

import img_behaviour from '../assets/behaviour-support.jpg';
import img_living from '../assets/living-support.jpg';
import img_spending from '../assets/spending-support.jpg';
import img_skills from '../assets/skills-dev.jpg';
import img_gaming from '../assets/gaming-drug.jpg';
import img_transport from '../assets/transport-management.jpg';
import img_court from '../assets/court-assistance.jpg';
import img_group from '../assets/4_people.jpg';



export default function Services(){

    return (
        <Section className="min-h-[300px] pb-[20px]">
            <p>EclipseCare Services</p>
            <h1>Our Services.</h1>
            <Split left_span="6" right_span="6" className="w-full gap-6" responsive="md"
            left={
                <Quads className="gap-6"
                    top_left={
                        <Link to="/Services/BehaviourSupport"><div className="cards-services min-h-[300px]">
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
                        </Link>
                    }
                    top_right={
                        <Link to="/Services/LivingSupport"><div className="min-h-[300px] cards-services">
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
                        </Link>
                    }
                    bottom_left={
                        <Link to="/Services/SkillsDev"><div className="cards-services min-h-[300px]">
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
                        </Link>
                    }
                    bottom_right={

                        <Link to="/Services/TransportManagement"><div className="cards-services min-h-[300px]">
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
                        </Link>
                    }
                ></Quads>
            }
            right={
                <Quads className="gap-6"
                    top_left={
                        <Link to="/Services/SpendingSupport"><div className="cards-services min-h-[300px]">
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
                        </Link>
                    }
                    top_right={
                        <Link to="/Services/GroupActivity"><div className="cards-services min-h-[300px]">
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
                        </Link>
                    }
                    bottom_left={
                        <Link to="/Services/CourtSupport"><div className="cards-services min-h-[300px]">
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
                        </Link>
                    }
                    bottom_right={
                        <Link to="/Services/GamingCounselling"><div className="cards-services min-h-[300px]">
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
                        </Link>
                    }
                ></Quads>
            }
            ></Split>
        </Section>
    )
}