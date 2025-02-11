import { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

import img_arrow_down from '../assets/arrow-down.svg';
import img_arrow_up from '../assets/arrow-up.svg';

//interface propsNavHeading{
    //children: ReactNode;
    //className: String;
//}

interface propsNavHeading{
    label: string;
    children: ReactNode;
}

export default function MenuHeading({label, children}: propsNavHeading){

    const [hovering, setHovering] = useState(false);
    
    return (
        <div
        onMouseEnter={()=>setHovering(true)}
        onMouseLeave={()=>setHovering(false)}
        onClick={()=>setHovering(false)}
        className={`relative pl-8 pr-8 h-full flex items-center`}
        >{label}
            <img src={hovering? img_arrow_up : img_arrow_down} width="25" className="ml-[5px]"></img>
            <motion.div className={`rounded-lg absolute left-[-570px] bottom-[-400px] min-w-[300px] min-h-[400px] 
                ${hovering?  'block'
                    : 'hidden'
                    }
                `}
                initial={{opacity: 0}}
                animate={hovering? {opacity:1} : {opacity:0}}
                transition={{duration:0.2}}
                >
                    {children}
                </motion.div>
        </div>
    )
}

