import Hero from "../../components/Hero"
import Section from '../../components/Section';
import SplitBanner from '../../components/SplitBanner';
import Split from '../../components/Split';
import { Link } from 'react-router-dom';
import Quads from '../../components/Quads';
import Form from '../../components/Form';
import HeroV2 from "../../components/HeroV2";
import Article from "../../components/Article";
import TwoCards from "../../components/TwoCards";

import img_behaviour from '../../assets/behaviour-support.jpg';
import img_living from '../../assets/living-support.jpg';
import img_spending from '../../assets/spending-support.jpg';
import img_skills from '../../assets/skills-dev.jpg';
import img_gaming from '../../assets/gaming-drug.jpg';
import img_transport from '../../assets/transport-management.jpg';
import img_court from '../../assets/court-assistance.jpg';
import img_group from '../../assets/4_people.jpg';



export default function SkillsDev(){


    return(
        <>
            <HeroV2>
                <div className="text">
                    <p>Our services</p>
                    <h1>Skills Development</h1>
                    <p>Practical skills for a more confident and capable you.</p>
                </div>
            </HeroV2>
            <Section className="pb-[30px] pt-[30px] text-navy">
                <div className={`md:grid grid-cols-12 `}>
                    <div className={`article-text col-span-9 min-h-[500px] `}>
                        <h2>What is skills development?</h2>
                        <br/>
                        <p>Through hands-on guidance and consistent support, we aim to boost confidence and enable participants to navigate their world with greater ease. By mastering these essential skills, individuals gain the tools they need to live more independently, pursue their dreams, and actively participate in their communities.</p>
                        <br/>
                        <ul><h3>What Skills will I learn?</h3>
                        <br/>
                            <li>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>- Vivamus aliquet nunc sit amet lorem suscipit, id ultrices libero feugiat.</li>
                            <li>- Integer faucibus nisl vel purus laoreet, nec hendrerit mi pellentesque.</li>
                        </ul>
                        <br/>
                        <ul><h3>Who is eligible for skills development?</h3>
                        <br/>
                        Nam auctor tortor id felis tempus, sit amet viverra velit consequat. Donec aliquam risus vel risus congue, vitae gravida elit accumsan.
                            <li>- Nec placerat est nec ligula condimentum, at ultrices lectus interdum.</li>
                            <li>- nec placerat est nec ligula condimentum, at ultrices lectus interdum.</li>
                        </ul>
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
            <Section className="min-h-[400px] bg-babyblue text-navy">
                <TwoCards 
                img_left={img_behaviour}
                heading_left="Behaviour Support"
                img_right={img_spending}
                heading_right="Spending Support"
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