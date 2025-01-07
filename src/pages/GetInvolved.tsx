import Hero from '../components/Hero';

import img_hero from '../assets/get-involved.jpg';

export default function GetInvolved(){


    return(
        <>
            <Hero img_src={img_hero}>
                <div className="text">
                    <h1>Get Involved.</h1>
                    <p></p>
                </div>
            </Hero>
        </>
    )
}