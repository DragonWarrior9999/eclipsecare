import { useState, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';


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
        className={`relative pl-8 pr-8 h-full flex items-center`}
        >{label}
            <motion.div className={`rounded-lg absolute left-[-300px] bottom-[-400px] min-w-[300px] min-h-[400px] 
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

