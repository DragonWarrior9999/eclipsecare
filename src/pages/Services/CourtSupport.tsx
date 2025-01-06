import Section from '../../components/Section';
import HeroV2 from "../../components/HeroV2";
import TwoCards from "../../components/TwoCards";
import Services from "../../components/Services";
import Footer from '../../components/Footer';


import img_behaviour from '../../assets/behaviour-support.jpg';
import img_spending from '../../assets/spending-support.jpg';
import img_court from '../../assets/court-assistance.jpg';



export default function CourtSupport(){


    return(
        <>
            <HeroV2>
                <div className="text">
                    <p>Our services</p>
                    <h1>Court Assistance.</h1>
                    <p>Helping you regain control and thrive in both worlds.</p>
                </div>
            </HeroV2>
            <Section className="pb-[30px] pt-[30px] text-navy">
                <div className={`md:grid grid-cols-12 `}>
                    <div className={`article-text col-span-9 min-h-[500px] `}>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.?</h2>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at erat eget eros maximus cursus. Nunc vel turpis eget dui efficitur tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus at efficitur elit.</p>
                        <br/>
                        <ul><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                        <br/>
                            <li>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>- Vivamus aliquet nunc sit amet lorem suscipit, id ultrices libero feugiat.</li>
                            <li>- Integer faucibus nisl vel purus laoreet, nec hendrerit mi pellentesque.</li>
                        </ul>
                        <br/>
                        <ul><h3>Integer eget consequat nunc, at efficitur elit.</h3>
                        <br/>
                        Nam auctor tortor id felis tempus, sit amet viverra velit consequat. Donec aliquam risus vel risus congue, vitae gravida elit accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at erat eget eros maximus cursus. Nunc vel turpis eget dui efficitur tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus at efficitur elit.
                        </ul>
                    </div>
                    <div className={`col-span-3`}
                    style={{
                        backgroundImage: `url(${img_court})`,
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
                heading_right="L8nks"
                ></TwoCards>
            </Section>
            <Footer></Footer>
        </>

    )
}