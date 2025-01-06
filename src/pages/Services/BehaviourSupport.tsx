import Hero from "../../components/Hero"
import Section from '../../components/Section';
import SplitBanner from '../../components/SplitBanner';
import Split from '../../components/Split';
import { Link } from 'react-router-dom';
import Quads from '../../components/Quads';
import Form from '../../components/Form';
import HeroV2 from "../../components/HeroV2";
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


export default function BehaviourSupport(){


    return(
        <>
            <HeroV2>
                <div className="text">
                    <p>Our services</p>
                    <h1>Behaviour Support.</h1>
                    <p>Compassionate care for lasting, positive outcomes.</p>
                </div>
            </HeroV2>
            <Section className="pt-[40px] pb-[30px]">
                <div className={`md:grid grid-cols-12 `}>
                    <div className={`col-span-9 min-h-[500px] `}>
                        <div className={`article-text min-h-[300px] border`}>
                            <h2>Promoting Positive Change</h2>
                            <br/>
                            <p>Our Behavior Support services are designed to empower individuals with disabilities to lead more fulfilling and independent lives by addressing challenging behaviors in a supportive and person-centered way. We work collaboratively with participants, their families, and support teams to develop individualized behavior support plans that focus on understanding the underlying causes of behaviors and implementing strategies to foster positive change. Our team of qualified specialists is dedicated to creating safe and respectful environments where participants can thrive.</p>
                            <br/>
                            <p className="">At the heart of our approach is a commitment to evidence-based practices that promote skill development, emotional regulation, and community inclusion. We provide ongoing training, guidance, and support to ensure these strategies are effectively implemented and adapted as needed. Whether it’s through reducing barriers to daily activities, improving communication, or enhancing relationships, our Behavior Support services are tailored to help participants achieve their unique goals and reach their full potential.</p>

                        </div>
                    </div>
                    <div className={`col-span-3 border`}
                    style={{
                        backgroundImage: `url(${img_behaviour})`,
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
                img_left={img_living}
                heading_left="Living Support"
                img_right={img_spending}
                heading_right="Spending Support"
                ></TwoCards>
            </Section>
            <Services></Services>
        </>

    )
}