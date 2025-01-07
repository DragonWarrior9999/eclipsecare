import Section from '../../components/Section';
import HeroV2 from "../../components/HeroV2";
import TwoCards from "../../components/TwoCards";
import Services from "../../components/Services";
import Footer from '../../components/Footer';

import img_group from '../../assets/4_people.jpg';
import img_about from '../../assets/pink-jacket.png';
import img_involved from '../../assets/get-involved.jpg';



export default function GroupActivity(){


    return(
        <>
            <HeroV2>
                <div className="text">
                    <p>Our services</p>
                    <h1>Group Activity.</h1>
                    <p>Helping you regain control and thrive in both worlds.</p>
                </div>
            </HeroV2>
            <Section className="md:pb-[30px] md:pt-[30px] text-navy">
                <div className={`md:grid grid-cols-12 border`}>
                    <div className={`p-[20px] sm:p-[60px] col-span-9 min-h-[500px] `}>
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
                        backgroundImage: `url(${img_group})`,
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
            <Footer></Footer>
        </>

    )
}