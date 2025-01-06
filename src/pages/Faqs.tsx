import Section from '../components/Section';
import SplitBanner from '../components/SplitBanner';
import Split from '../components/Split';
import { Link } from 'react-router-dom';
import Quads from '../components/Quads';
import Form from '../components/Form';
import Hero from '../components/Hero';

import img_living from '../assets/4_people.jpg';

export default function Faqs(){


    return(
        <>
            <Hero img_src=''>
                <div className="text">
                    <p>Learn about NDIS.</p>
                    <h1>Frequently Asked Questions about NDIS.</h1>
                    <p></p>
                </div>
            </Hero>
            <Section className="pb-[30px] pt-[30px] text-navy">
                <div className={`md:grid grid-cols-12 `}>
                    <div className={`article-text col-span-9 min-h-[500px] `}>

                    <h3>Who is Eligible for NDIS?</h3>
                    <p>Depending on verification through the NDIS portal, you may be eligible for NDIS-funded supports to help live an empowered life. We can assist in contacting your local NDIS office to create and submit an application.</p>
                    <br/>

                    <h3>Why Choose EclipseCare as my providers?</h3>
                    <p>At Eclipsecare we have our own stories and insights into why we provide the best support to participants and help live the most empowered lives. Our main aim is to provide a seamless transition into society for our participants.</p>
                    <br/>

                    <h3>What is your policy on handling complaints and feedback?</h3>
                    <p>Eclipsecare takes complaint handling very seriously and also values feedback as it assists in improving processes and management. if anyone has any urgent complaints they can email admin@eclipsecare.com.au or call Stefan on 0401 444 783.</p>
                    <br/>

                    <h3>What is involved in the support planning process?</h3>
                    <p>When planning supports for participants our dedicated directors personally sit down and speak with all relevant parties including family, plan nominees and specialists to provide the services that people actually want and need and not those they don't.</p>
                    <br/>

                    <h3>What are the Benefits of Support Coordination?</h3>
                    <p>Support coordination allows participants to access the best possible supports as required, allowing them to achieve more freedom and comfort, propelling their own personal development.</p>
                    <br/>

                    <h3>Where can I find more information about the NDIS?</h3>
                    <p>There are comprehensive guides on the NDIS website about all different factors and considerations in regards to NDIS standards.</p>
                    <br/>

                    <h3>Do you offer mental health support or counseling services?</h3>
                    <p>We offer a range of mental health services and support and work with allied health professionals to achieve positive counselling support assistance.</p>
                    <br/>

                    <h3>How much do your services cost?</h3>
                    <p>At Eclipsecare we follow NDIS guidelines and charge accordingly, with our dedicated financial management team managing affairs as required.</p>
                    <br/>

                    <h3>Are your support workers trained and accredited?</h3>
                    <p>All of the support workers working with Eclipsecare are internally trained by management and have external training through TAFE and institutions Eclipsecare is affiliated with.</p>
                    <br/>

                    <h3>How can I track my funding usage?</h3>
                    <p>Funding usage can be easily tracked by contacting a support coordinator, plan manager or NDIS head office.</p>
                    <br/>

                    <h3>How do I get started with your services?</h3>
                    <p>How do I get started with your services?</p>
                    <br/>

                    <h3>Are there programs for children and young adults?</h3>
                    <p>There are several programs for children and young adults which can be provided at discretion by Eclipsecare.</p>
                    <br/>


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
        </>
    )
}