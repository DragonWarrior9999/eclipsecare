import { useState, useEffect } from 'react';




export default function Access(){


    const [position, setPosition] = useState({ x:0, y:300});
    //const [mousePosition, setMousePosition] = useState({ x:0, y:0 });
    const [allowMove, setAllowMove] = useState(false);
    const [offsetPosition, setOffsetPosition] = useState({ x:0, y:0 });

    useEffect(()=>{

        function handleMouseMove(e: MouseEvent){
            setOffsetPosition({
                x: e.clientX - position.x,
                y: e.clientY - position.y
            })
        }
        if(allowMove){
            window.addEventListener('mousemove', handleMouseMove);
            return ()=>{
                window.removeEventListener('mousemove', handleMouseMove);
            }
        }
    }, [allowMove])

    return(

        <div
            className="w-[70px] h-[70px] bg-red-500 absolute"
            onMouseDown={() => setAllowMove(true)}
            onMouseUp={() => {
                setAllowMove(false)
            }}
                style={{
                    top: `${position.y + offsetPosition.y}px`,
                    left: `${allowMove ? `${position.x + offsetPosition.x}px` : '0px'}`, // Ensure '0px' and '1400px' are strings
                }}
        ></div>

    )
}