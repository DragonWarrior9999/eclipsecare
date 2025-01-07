import Section from '../../components/Section';
import HeroV2 from "../../components/HeroV2";
import TwoCards from "../../components/TwoCards";
import Services from "../../components/Services";
import Footer from '../../components/Footer';


import img_behaviour from '../../assets/behaviour-support.jpg';
import img_living from '../../assets/living-support.jpg';
import img_spending from '../../assets/spending-support.jpg';


export default function LivingSupport(){


    return(
        <>
            <HeroV2>
                <div className="text">
                    <p>Our services</p>
                    <h1>Living Support.</h1>
                    <p>Supported Living Support (SIL)</p>
                </div>
            </HeroV2>
            <Section className="pb-[30px] pt-[30px] text-navy">
                <div className={`md:grid grid-cols-12 `}>
                    <div className={`article-text col-span-9 min-h-[500px] `}>
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
            <Services></Services>
            <Section className="min-h-[400px] bg-babyblue text-navy">
                <TwoCards 
                img_left={img_behaviour}
                heading_left="Some other"
                img_right={img_spending}
                heading_right="Links"
                ></TwoCards>
            </Section>
            <Footer></Footer>
        </>

    )
}