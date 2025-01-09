import { useState } from "react";
//import { ReactNode } from "react";


interface propsMobileSubMenu{
    className: string;
    heading: string | undefined;
    links: string[];
    
}

export default function MobileSubMenu({className, heading, links} :propsMobileSubMenu){

    const [isOpen, useIsOpen] = useState(false);

    return (

        <div className="border border-orange-400 w-full ">
            <div className="">
                <div className={`${className} border`}
                    onClick={()=>{useIsOpen(!isOpen)}}
                >{heading}
                </div>
                <div
                    className={`overflow-hidden
                        ${isOpen? 'h-[0px]': 'static'}
                    `}
                >
                    <ul>
                        
                        {links.map((link, index) => (
                            <li key={index}>{link}</li>
                            ))}
                        
                    </ul>
                </div>
            </div>
        </div>
          

    )

}