import Section from '../../components/Section';
import HeroV2 from "../../components/HeroV2";
import TwoCards from "../../components/TwoCards";
import Services from "../../components/Services";
import Footer from '../../components/Footer';
import Form from '../../components/Form';



import img_behaviour from '../../assets/behaviour-support.jpg';
import img_about from '../../assets/pink-jacket.png';
import img_involved from '../../assets/get-involved.jpg';

export default function BehaviourSupport(){


    return(
        <>
            <HeroV2>
                <div className="text text-center sm:text-left">
                    <p>Our services</p>
                    <h1 className="text-h1-sm sm:text-h1-base">Behaviour Support.</h1>
                    <p>Compassionate care for lasting, positive outcomes.</p>
                </div>
            </HeroV2>
            <Section className="md:pt-[40px] md:pb-[30px]">
                <div className={`md:grid grid-cols-12 `}>
                    <div className={`col-span-9 min-h-[500px]`}>
                        <div className={`p-[20px] sm:p-[60px] min-h-[300px]`}>
                            <h2 className="text-h2-sm sm:text-h2-base text-center sm:text-left">Promoting Positive Change</h2>
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
            <Services></Services>
            <TwoCards 
            img_left={img_about}
            text_left={
                <>
                <h4>About Us</h4>
                <p>Find out why where the best</p>
                </>
            }
            src_left="/About"
            src_right="/Community/GetInvolved"
            img_right={img_involved}
            text_right={
                <>
                <h4>Get Involved</h4>
                <p>Join our weekly Activities</p>
                </>
            }
            ></TwoCards>
            <Section className="bg-white min-h-[600px] pt-[100px]">
                <div className="min-h-[400px] lg:grid grid-cols-12">
                    <div className="flex justify-center lg:block col-span-6">
                        <Form></Form>
                    </div>
                    <div className="col-span-6 border p-[10px]">
                    </div>
                </div>
            </Section>
            <Footer></Footer>
        </>

    )
}