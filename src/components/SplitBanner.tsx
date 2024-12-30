import { ReactNode } from 'react';

interface propsSpiltBanner{
    children: ReactNode;
    className: string;
    image: string;
    img_src: string;
}
export default function SplitBanner({children, className, image, img_src}: propsSpiltBanner){

    if(image == "right"){
        return (
            <div className={`md:grid grid-cols-12 ${className}`}>
                <div className="col-span-6">
                    <div className="text">
                        {children}
                    </div>
                </div>
                <div className={`col-span-6 bg-[url('${img_src})'] bg-contain`}></div>
            /Users/wesleyfu/Documents/eclipsecare/src/assets/smiling-women.jpg

            </div>
        )
    }else if(image == "left"){
        return (
            <div className={`md:grid grid-cols-12 ${className}`}>
                <div className={`col-span-6 bg-[url('${img_src}')] bg-cover bg-no-repeat`}></div>
                {/*<div className={`col-span-6 bg-[url('${img_src}')] bg-no-repeat`}></div>*/}
                <div className="col-span-6">
                    <div className="text">
                        {children}
                    </div>
                </div>
            </div>
        )
    }

}