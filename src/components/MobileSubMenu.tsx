import { useState } from "react";
import { Link } from "react-router-dom";
//import { ReactNode } from "react";

interface propsLink{
    heading: string;
    src: string;
}

interface propsMobileSubMenu{
    className: string;
    heading: string | undefined;
    links: propsLink[];
    
}

export default function MobileSubMenu({className, heading, links} :propsMobileSubMenu){

    const [isClosed, useIsClosed] = useState(true);

    return (

        <div className="border border-orange-400 w-full ">
            <div className="">
                <div className={`${className} border`}
                    onClick={(e)=>{useIsClosed(!isClosed)
                        e.stopPropagation();
                    }}
                >{heading}
                </div>
                <div
                    className={`overflow-hidden transform transition-all duration-1000 ease-out
                        ${isClosed? 'max-h-0': 'max-h-1000px'}
                    `}
                >
                    <ul className="pl-[10px]">
                        
                        {links.map((link, index) => (
                            <Link to={link.src} key={index}>
                                <li className="p-[10px]">{link.heading}</li>
                            </Link>
                            ))
                        }
                        
                    </ul>
                </div>
            </div>
        </div>
          

    )

}