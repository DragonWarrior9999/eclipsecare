import { ReactNode } from 'react';


interface propsSubMenu{
    left_children: ReactNode;
    right_children: ReactNode;
    img_src: string | undefined;
}

export default function SubMenu({left_children, right_children, img_src}: propsSubMenu){

    return(
        <div className="flex bg-opacity-98 bg-white w-[850px] h-[380px] rounded-md p-[20px]">
            <div className="h-full w-[300px] rounded-lg p-[15px] pr-[40px]"
            >
                <div className="h-full w-full border-violet-400 rounded-lg" 
                    style={{
                        backgroundImage: `url('${img_src}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                ></div>
            </div>
            <div className="grid grid-cols-2 h-full w-[550px] bg-opacity-98 text-navy">
                    <div className="p-[20px] flex flex-col gap-8 border-violet400">
                        {/*
                        <ul className="sub-menu-ul">Community
                            <li>Our People</li>
                            <li>Get Involved</li>
                            <li>Careers</li>
                            <li>Mentor Stories</li>
                        </ul>
                        <ul className="sub-menu-ul">News and Events
                            <li>Blogs</li>
                            <li>Events</li>
                            <li>Annual Review</li>
                        </ul>
                        */}
                        {left_children}
                    </div>
                    <div className="p-[20px] flex flex-col gap-8 border-violet400">
                        {/*
                        <ul className="sub-menu-ul">Resources
                            <li>Community resources</li>
                            <li>Resources for Parents</li>
                            <li>Insurance</li>
                        </ul>
                        */}
                        {right_children}
                    </div>
            </div>
        </div>
    )
}