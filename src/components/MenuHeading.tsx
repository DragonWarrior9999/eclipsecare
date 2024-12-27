import { useState, useEffect, ReactNode, Children } from 'react';
import { motion } from 'framer-motion';


//interface propsNavHeading{
    //children: ReactNode;
    //className: String;
//}

interface propsNavHeading{
    children: String;
}

export default function MenuHeading({children}: propsNavHeading){

    const [hovering, setHovering] = useState(false);
    
    return (
        <div
        onMouseEnter={()=>setHovering(true)}
        onMouseLeave={()=>setHovering(false)}
        className={`relative min-w-[150px] min-h-[80px] flex items-center ${hovering? 'bg-red-400' :'bg-blue-500'}`}
        >{children}
            <motion.div className={`absolute bottom-[-100px] w-[200px] h-[100px] border border-white bg-blue-400 
                ${hovering?  'block'
                    : 'hidden'
                    }
                `}
                initial={{opacity: 0}}
                animate={hovering? {opacity:1} : {opacity:0}}
                transition={{duration:0.2}}
                ></motion.div>
        </div>
    )
}

