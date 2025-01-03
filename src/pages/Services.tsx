
import Hero from "../components/Hero"
import img_hero from '../assets/hero-gradient-bg.png'

export default function About(){

    return(
        <Hero img_src={img_hero}>
            <div className="p-[20px]">
                <p>Our Services</p>
                <h1 className="max-w-[550px]">A World of Inclusivity.</h1>
            </div>
            <div className="p-[20px]">
                <button className="button-light button-sm">Referral Form</button>
                <span className="ml-[10px]">Discover More</span>
            </div>
        </Hero>
    )
}