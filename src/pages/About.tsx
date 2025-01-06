import Hero from "../components/Hero"
import img_hero from '../assets/gradient-sunset.png'
import Section from "../components/Section"
import Split from "../components/Split"
import Footer from "../components/Footer"

import img_pink_jacket from '../assets/pink-jacket.png';

export default function About(){

    return(
        <>
        <Hero img_src={img_hero}>
            <div className="p-[20px]">
                <p>About EclipseCare</p>
                <h1 className="max-w-[580px]">Empowering Participants and Society.</h1>
                <p className="max-w-[530px] mt-[20px]">We're a family run business helping participants realise their dreams and live empowering lives.</p>
            </div>
            <div className="p-[20px]">
                <button className="button-light button-sm">Referral Form</button>
                <span className="ml-[10px]">Discover More</span>
            </div>
        </Hero>

        <Section className="pb-[30px] pt-[30px] text-navy">
            <div className={`md:grid grid-cols-12 `}>
                <div className={`article-text col-span-7 min-h-[500px] `}>
                        <h2>Family care.</h2>
                        <br/>
                        <p>We are a professional family run disability company with expertise in mental health, drug and alcohol counselling and complex physical disabilities.</p>
                        <br/>
                        <p>Our customised care plans allow for a specialised approach to providing the best care for everyone.</p>
                        <ul className="">
                            <br/>
                            <li>- sdjn asj asdjsndajsnd asjdas asddjknj sjassdnj asjdknasdsa.</li>
                            <li>- sajkdn asjj djskdan jaskd sdjjj js jsd jssjakjs.</li>
                            <li>- asdjn asj asdjsndajsnd asjdas asddjknj sjassdnj asjdknasdsa.</li>
                        </ul>
                </div>
                <div className={`col-span-5`}
                    style={{
                        backgroundImage: `url(${img_pink_jacket}`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                        
                </div>
            </div>
        </Section>

        <Section className="min-h-[540px] pt-[20px] bg-babyblue text-navy">
            <div className="bg-white p-[60px]">
                <div>
                    <h2>Some helpful links to get you started</h2>
                    <p>Check out our blogs too...</p>
                </div>
                <Split responsive="md" className="min-h-[200px]" left_span='6' right_span='6'
                    left={
                        <ul className="p-[20px] faq-list">
                            <li>Frequently Asked Questions</li>
                            <li>How to sign up as a client on EclispeCare</li>
                            <li>Risks of taking your booking away from EclipseCare</li>
                            <li>Insurance</li>
                        </ul>
                    } 
                    right={
                        <ul className="hidden md:block p-[20px] faq-list">
                            <li>Navigating NDIS</li>
                            <li>Writing a great job post to find a support worker</li>
                            <li>What to consider when looking for support</li>
                            <li>Building your support team</li>
                        </ul>
                    }
                />
            </div>
        </Section>
        <Footer></Footer>
        </>
    )
}