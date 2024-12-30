import { ReactNode } from 'react';

interface propsSpiltBanner{
    children: ReactNode;
    className: string;
    image: string;
}
export default function SplitBanner({children, className, image}: propsSpiltBanner){

    if(image == "right"){
        return (
            <div className={`md:grid grid-cols-12 ${className}`}>
                <div className="col-span-6">
                    <div className="text">
                        {children}
                    </div>
                </div>
                <div className="col-span-6 border border-white"></div>
            </div>
        )
    }else if(image == "left"){
        return (
            <div className={`md:grid grid-cols-12 ${className}`}>
                <div className="col-span-6 border border-white"></div>
                <div className="col-span-6">
                    <div className="text">
                        {children}
                    </div>
                </div>
            </div>
        )
    }

}