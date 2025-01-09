import { useState } from "react";
//import { ReactNode } from "react";


interface propsMobileSubMenu{
    className: string;
    heading: string | undefined;
    links: string[];
    
}

export default function MobileSubMenu({className, heading, links} :propsMobileSubMenu){

    const [isClosed, useIsClosed] = useState(true);

    return (

        <div className="border border-orange-400 w-full ">
            <div className="">
                <div className={`${className} border`}
                    onClick={()=>{useIsClosed(!isClosed)}}
                >{heading}
                </div>
                <div
                    className={`overflow-hidden transform transition-all duration-1000 ease-out
                        ${isClosed? 'max-h-0': 'max-h-1000px'}
                    `}
                >
                    <ul className="pl-[10px]">
                        
                        {links.map((link, index) => (
                            <li className="p-[10px]"key={index}>{link}</li>
                            ))}
                        
                    </ul>
                </div>
            </div>
        </div>
          

    )

}