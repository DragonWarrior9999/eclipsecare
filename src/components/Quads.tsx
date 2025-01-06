import { ReactNode } from 'react';


interface propsQuads{
    className: string;
    top_left: ReactNode;
    top_right: ReactNode;
    bottom_right: ReactNode,
    bottom_left: ReactNode

}

export default function Quads({className, top_left, top_right, bottom_right, bottom_left} : propsQuads){

    return(
        <div className={`${className} md:grid grid-cols-2 grid-rows-2`}>
            <div className="">
                {top_left}
            </div>
            <div className="min-h-[250px]">
                {top_right}
            </div>
            <div className="min-h-[250px]">
                {bottom_left}
            </div>
            <div className="min-h-[250px]">
                {bottom_right}
            </div>
        </div>
    )
}