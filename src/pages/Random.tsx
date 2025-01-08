


export default function Random(){

    return (
        <>
            <div className="border border-yellow-400 h-[200px] w-full"></div>
            <h1 className="text-[3.2rem] sm:text-[4.5rem]">My Title whenever I want</h1>
            <h1>My Title whenever I want</h1>
            <h1 className="text-h1-sm sm:text-h1-base">My Title whenever I want</h1>
            <p>iasd asdas  </p>
            <h2 className="text-[10px]">My Title</h2>



            <div className="border border-yellow-400 grid h-full lg:grid-cols-12">
                <div className="border border-yellow-400 w-full mt-[70px] lg:col-span-7 text-navy">
                    <div className="border border-yellow-400 p-[20px]">
                        <p>Welcome to EclipseCare</p>
                        <h1 className="sm:text-h1-base text-h1-sm">Your Life Our Mission.</h1>
                        <p className="max-w-[530px] mt-[15px]">We're committed to our family and providing the best outcomes possible for participants and their goals in society.</p>
                    </div>
                    <div className="border border-yellow-400 p-[20px]">
                        <button className="button-light button-sm">Learn More</button>
                        <span className="ml-[10px]">Get Started</span>
                    </div>
                </div>
                <div className="border border-yellow-400 w-full lg:col-span-5 relative hidden lg:block">
                    <div className="border border-yellow-400  top-[20px] right-[-40px] relative min-h-[460px] min-w-[590px] rounded-lg"
                    ></div>
                </div>
            </div>
        </>
    )
}