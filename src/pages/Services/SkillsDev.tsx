import Section from '../../components/Section';
import HeroV2 from "../../components/HeroV2";
import TwoCards from "../../components/TwoCards";
import Services from "../../components/Services";
import Footer from '../../components/Footer';

import img_behaviour from '../../assets/behaviour-support.jpg';
import img_spending from '../../assets/spending-support.jpg';
import img_skills from '../../assets/skills-dev.jpg';




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
            <Section className="pb-[30px] pt-[30px] text-navy">
                <div className={`md:grid grid-cols-12 `}>
                    <div className={`article-text col-span-9 min-h-[500px] `}>
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