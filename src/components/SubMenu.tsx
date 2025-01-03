

export default function SubMenu(){

    {/*
    return(
        <div className="h-full flex bg-violet-400 w-[800px]">
            <div className="h-full w-[400px] border border-white"></div>
            <div className="grid grid-cols-2 grid-rows-4 h-full w-[480px] bg-yellow-400">
                
            </div>
        </div>
    )*/}
    {/*height has too match parents height MenuHeading() should deal with position*/}
    return(
        <div className="flex bg-yellow-500 w-[900px] h-[380px]">
            <div className="h-full w-[300px] border border-white"></div>
                {/*
            <div className="grid grid-cols-2 grid-rows-4 h-full w-[600px] bg-blue-400">
                <div className=" text">Become a support worker with EclipseCare</div>
                <div className="flex items-center text">New to support work?</div>
                <div className="flex items-center text">When and how you get paid</div>
                <div className="flex items-center text">How to succeed</div>
                <div className="flex items-center text">Insurance</div>
                <div className="flex items-center text">Training and education</div>
                <div className="flex items-center text">Mental health and support</div>
                <div className="flex items-center text">Tax and Super</div>
            </div>
                */}
            <div className="grid grid-cols-2 h-full w-[600px] bg-blue-400">
                    <div className="p-[20px] flex flex-col gap-8 border border-violet400">
                        <ul className="sub-menu-ul">Community
                            <li>Our People</li>
                            <li>Get Involved</li>
                            <li>Careers</li>
                            <li>Mentor Stories</li>
                            <li>Grants and Sponsorships</li>
                        </ul>
                        <ul className="sub-menu-ul">News and Events
                            <li>Blogs</li>
                            <li>Events</li>
                            <li>Annual Review</li>
                        </ul>
                    </div>
                    <div className="p-[20px] flex flex-col gap-8 border border-violet400">
                        <ul className="sub-menu-ul">Resources
                            <li>Community resources</li>
                            <li>Resources for Parents</li>
                            <li>Insurance</li>
                        </ul>
                    </div>
            </div>
        </div>
    )
}