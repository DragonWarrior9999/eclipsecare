import Section from '../../components/Section';
import HeroV2 from "../../components/HeroV2";
import TwoCards from "../../components/TwoCards";
import Services from "../../components/Services";
import Footer from '../../components/Footer';
import Form from '../../components/Form';

import img_skills from '../../assets/skills-dev.jpg';
import img_about from '../../assets/pink-jacket.png';
import img_involved from '../../assets/get-involved.jpg';




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
            <Section className="md:pb-[30px] md:pt-[30px] text-navy">
                <div className={`md:grid grid-cols-12 `}>
                    <div className={`p-[20px] sm:p-[60px] col-span-9 min-h-[500px] `}>
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
                        backgroundImage: `url(${img_skills})`,
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