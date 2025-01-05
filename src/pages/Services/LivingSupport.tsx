import Hero from "../../components/Hero"
import Section from '../../components/Section';
import SplitBanner from '../../components/SplitBanner';
import Split from '../../components/Split';
import { Link } from 'react-router-dom';
import Quads from '../../components/Quads';
import Form from '../../components/Form';
import HeroV2 from "../../components/HeroV2";
import Article from "../../components/Article";
import TwoCards from "../../components/twocards";
import img_living from "../../assets/living-support.jpg";
import img_behaviour from "../../assets/behaviour-support.jpg";


export default function LivingSupport(){


    return(
        <>
            <HeroV2>
                <div className="text">
                    <p>Supported Living Support (SIL)</p>
                    <h1>Living Support.</h1>
                    <p>as asdsa ds ds ds asd sad as das dadsdsadas sad</p>
                </div>
            </HeroV2>
            <Section className="">
                <div className={`md:grid grid-cols-12 `}>
                    <div className={`article-text col-span-8 min-h-[500px] bg-yellow-400`}>
                        <h3>What is SIL?</h3>
                        <br/>
                        <p>Supported Independent Living refers to funding provided by the NDIS to assist participants with disabilities to live independently in their own homes or shared living arrangements. It covers support for daily tasks and activities, enabling individuals to build skills and live as autonomously as possible.</p>
                        <br/>
                        <ul><h3>Living Arrangements</h3>
                        <br/>
                            <li>- Typically provided in shared housing arrangements or group homes.</li>
                            <li>- Can also be offered for individuals living alone or with family.</li>
                            <li>- SIL services can adapt to your preferred living setup.</li>
                        </ul>
                        <br/>
                        <ul><h3>Who is eligible for SIL?</h3>
                        <br/>
                        Participants must demonstrate a need for substantial support with daily living activities. The NDIS assesses this based on:
                            <li>- The participant’s level of disability.</li>
                            <li>- Their goals and aspirations outlined in the NDIS plan.</li>
                        </ul>
                    </div>
                    <div className={`col-span-4 border border-pink-400`}>
                    </div>
                </div>
            </Section>
            <Section className="min-h-[400px]">
                <TwoCards 
                img_left={img_living}
                heading_left="Living Support"
                img_right={img_behaviour}
                heading_right="Living Support"
                ></TwoCards>
            </Section>
        </>

    )
}