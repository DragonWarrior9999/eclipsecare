import Hero from "../components/Hero"
import img_hero from '../assets/gradient-sunset.png'

export default function About(){

    return(
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
    )
}