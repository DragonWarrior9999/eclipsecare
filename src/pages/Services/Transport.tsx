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
import Services from "../../components/Services";


import img_behaviour from '../../assets/behaviour-support.jpg';
import img_living from '../../assets/living-support.jpg';
import img_spending from '../../assets/spending-support.jpg';
import img_skills from '../../assets/skills-dev.jpg';
import img_gaming from '../../assets/gaming-drug.jpg';
import img_transport from '../../assets/transport-management.jpg';
import img_court from '../../assets/court-assistance.jpg';
import img_group from '../../assets/4_people.jpg';


export default function Transport(){


    return(
        <>
            <HeroV2>
                <div className="text">
                    <p>Our services</p>
                    <h1>Transport Management.</h1>
                    <p>Your Journey, Our Priority.</p>
                </div>
            </HeroV2>
            <Section className="pb-[30px] pt-[30px] text-navy">
                <div className={`md:grid grid-cols-12 `}>
                    <div className={`article-text col-span-9 min-h-[500px] `}>
                        <h2>How does transport management work?</h2>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at erat eget eros maximus cursus. Nunc vel turpis eget dui efficitur tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus at efficitur elit.</p>
                        <br/>
                        <ul><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                        <br/>
                            <li>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>- Vivamus aliquet nunc sit amet lorem suscipit, id ultrices libero feugiat.</li>
                            <li>- Integer faucibus nisl vel purus laoreet, nec hendrerit mi pellentesque.</li>
                        </ul>
                        <br/>
                        <ul><h3>Integer eget consequat nunc, at efficitur elit.</h3>
                        <br/>
                        Nam auctor tortor id felis tempus, sit amet viverra velit consequat. Donec aliquam risus vel risus congue, vitae gravida elit accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at erat eget eros maximus cursus. Nunc vel turpis eget dui efficitur tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus at efficitur elit.
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
            <Services></Services>
        </>

    )
}