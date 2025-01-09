import Hero from "../components/Hero"
import img_hero from '../assets/gradient-sunset.png'
import Section from "../components/Section"
import Split from "../components/Split"
import Footer from "../components/Footer"
import UsefulLinks from "../components/UsefulLinks"

import img_pink_jacket from '../assets/pink-jacket.png';
import img_4_people from '../assets/4_people.jpg';
import img_behaviour from '../assets/behaviour-support.jpg';

export default function About(){

    return(
        <>
        <Hero img_src={img_hero}>
            <div className="border border-violet-500 pb-[20px] text-center sm:text-left">
                <p>About EclipseCare</p>
                <h1 className="text-h1-sm sm:text-h1-base  ">Empowering Participants and Society.</h1>
                <p className="max-w-[530px] mt-[20px]">We're a family run business helping participants realise their dreams and live empowering lives.</p>
            </div>
            <div className="text-center sm:text-left p-[20px]">
                <button className="button-light button-sm">Referral Form</button>
                <span className="ml-[10px] hidden sm:inline">Discover More</span>
            </div>
            <div className="sm:hidden p-[20px] text-center sm:text-left"><span>Discover More</span></div>
        </Hero>

        <Section className="pb-[10px] pt-[30px] text-navy">
            <div className={`border border-red-400 md:grid grid-cols-12 `}>
                <div className={`sm:p-[60px] col-span-8 min-h-[400px] `}>
                        <h1 className="text-h1-sm sm:text-h1-base  text-center sm:text-left">Family care.</h1>
                        <br/>
                        <p className="text-center sm:text-left">We are a professional family run disability company with expertise in mental health, drug and alcohol counselling and complex physical disabilities.</p>
                        <br/>
                        <p className="text-center sm:text-left">Our customised care plans allow for a specialised approach to providing the best care for everyone.</p>
                        <ul className="pl-[20px] pr-[10px] sm:p-0 space-y-2">
                            <br/>
                            <li>- sdjn asj asdjsndajsnd asjdas asddjknj sjassdnj asjdknasdsa.</li>
                            <li>- sajkdn asjj djskdan jaskd sdjjj js jsd jssjakjs.</li>
                            <li>- asdjn asj asdjsndajsnd asjdas asddjknj sjassdnj asjdknasdsa.</li>
                        </ul>
                </div>
                <div className={`col-span-4 border`}
                    style={{
                        backgroundImage: `url(${img_pink_jacket}`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                        
                </div>
            </div>
        </Section>
        <Section className="pb-[30px] pt-[30px] text-navy mt-[20px]">
            <div className={`md:grid grid-cols-12 `}>
                <div className={`sm:p-[60px] col-span-8 min-h-[400px] `}>
                        <h2 className="text-h2-sm sm:text-h2-base text-center sm:text-left">We are a specialised NDIS registered Provider.</h2>
                        <br/>
                        <p className="text-center sm:text-left">At Eclipsecare, we redefine disability support, empowering individuals to achieve their full potential. With expert guidance, innovative solutions, and a deep understanding of participants' needs, we provide the resources and encouragement to help them thrive.</p>
                        <br/>
                        <p className="text-center sm:text-left">Together, we approach the challenges of disability support with care, empathy, and dignity.</p>
                </div>
                <div className={`col-span-4 border grid grid-row-2`}>
                    <div className="border border-violet-500 row-span-1"
                        style={{
                            backgroundImage: `url(${img_4_people}`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}
                    ></div>
                    <div className="border border-violet-500 row-span-1"
                        style={{
                            backgroundImage: `url(${img_behaviour}`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                    </div>
                        
                </div>
            </div>
        </Section>


        <UsefulLinks></UsefulLinks>


        <Footer></Footer>
        </>
    )
}