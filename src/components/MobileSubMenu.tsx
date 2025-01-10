import { useState } from "react";
import { Link } from "react-router-dom";
//import { ReactNode } from "react";

import img_arrow_down from '../assets/white-arrow-down.svg';
import img_arrow_up from '../assets/white-arrow-up.svg';

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

        <div className=" w-full ">
            <div className="">
                <div className={`flex ${className}`}
                    onClick={(e)=>{useIsClosed(!isClosed)
                        e.stopPropagation();
                    }}
                ><div>{heading}</div>
                    <img src={isClosed? img_arrow_down : img_arrow_up} width="25" className="ml-[5px]"></img>
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