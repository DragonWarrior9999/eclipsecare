import Hero from '../components/Hero';
import Section from '../components/Section';

import img_hero from '../assets/get-involved.jpg';
import img_support from '../assets/SupportServices.jpg';
import img_needs from '../assets/not_meeting_needs.jpg';
import img_people from '../assets/4_people.jpg';

export default function GetInvolved(){


    return(
        <>
            <Hero img_src={img_hero}>
                <div className="text mt-[40px]">
                    <p>Small Actions, Big Impact – Find Your Way to Contribute.</p>
                    <h1>Get Involved.</h1>
                    <button className="button-sm button-light mt-[20px] mr-[15px]">Our team</button>
                    <button className="button-sm button-light mt-[20px]">Refer Someone</button>
                </div>
            </Hero>
            <Section className="pt-[40px] pb-[30px]">
                <div className={`md:grid grid-cols-12 border`}>
                    <div className={`col-span-7 min-h-[500px] `}>
                        <div className={`article-text min-h-[300px]`}>
                            <h2>Engage, Explore, Empower.</h2>
                            <br/>
                            <p>Whether you’re looking to explore new hobbies, meet like-minded individuals, or support someone on their journey, there’s something for everyone. Start by identifying activities that spark your interest or align with your goals—these could be social events, skill-building workshops, or recreational programs. Reach out to your local community groups, support networks, or activity coordinators to learn more about what’s available and how to participate. Taking the first step can open the door to new opportunities, friendships, and experiences that enrich your life and empower others. Don't hesitate—get involved today and be part of something meaningful!</p>
                            <br/>

                        </div>
                    </div>
                    <div className={`col-span-5 border`}>
                        <div className="relative max-w-[380px] min-h-[240px] border mt-[200px] ml-[30px] rounded-lg"
                            style={{
                                backgroundImage: `url(${img_people})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }}
                        >
                            <div className="absolute top-[-180px] left-[60px] w-[250px] h-[160px] bg-yellow-500 rounded-lg"
                                style={{
                                    backgroundImage: `url(${img_support})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center'
                                }}
                            >
                            </div>
                            <div className="absolute bottom-[-140px] left-[100px] w-[250px] h-[160px] bg-yellow-500 rounded-lg"

                                style={{
                                    backgroundImage: `url(${img_needs})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center'
                                }}
                            >
                            </div>

                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}