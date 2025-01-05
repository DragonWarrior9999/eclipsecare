import Hero from "../../components/Hero"
import Section from '../../components/Section';
import SplitBanner from '../../components/SplitBanner';
import Split from '../../components/Split';
import { Link } from 'react-router-dom';
import Quads from '../../components/Quads';
import Form from '../../components/Form';
import HeroV2 from "../../components/HeroV2";
import TwoCards from "../../components/twocards";



export default function BehaviourSupport(){


    return(
        <>
            <HeroV2>
                <div className="text">
                    <h1>Behaviour Support.</h1>
                    <p>as asdsa ds ds ds asd sad as das dadsdsadas sad</p>
                </div>
            </HeroV2>
            <Section className="bg-violet-300">
                <div className={`md:grid grid-cols-12 `}>
                    <div className={`col-span-8 min-h-[500px] bg-yellow-400`}>
                        <div className={`article-text min-h-[300px] border border-yellow-300`}>
                            <h2>Promoting Positive Change</h2>
                            <br/>
                            <p>Our Behavior Support services are designed to empower individuals with disabilities to lead more fulfilling and independent lives by addressing challenging behaviors in a supportive and person-centered way. We work collaboratively with participants, their families, and support teams to develop individualized behavior support plans that focus on understanding the underlying causes of behaviors and implementing strategies to foster positive change. Our team of qualified specialists is dedicated to creating safe and respectful environments where participants can thrive.</p>
                            <br/>
                            <p className="">At the heart of our approach is a commitment to evidence-based practices that promote skill development, emotional regulation, and community inclusion. We provide ongoing training, guidance, and support to ensure these strategies are effectively implemented and adapted as needed. Whether it’s through reducing barriers to daily activities, improving communication, or enhancing relationships, our Behavior Support services are tailored to help participants achieve their unique goals and reach their full potential.</p>

                        </div>
                    </div>
                    <div className={`col-span-4 border border-pink-400`}>
                        
                    </div>
                </div>
            </Section>
            <Section className="min-h-[400px]">
                <TwoCards 
                right={
                    <div></div>
                }
                left={
                    <div></div>
                }></TwoCards>
            </Section>
        </>

    )
}