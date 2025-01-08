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
                <div className={`col-span-6 bg-[url('src/assets/smiling-women.jpg')] bg-cover`}></div>
            {/*/Users/wesleyfu/Documents/eclipsecare/src/assets/smiling-women.jpg*/}

            </div>
        )
    }else if(image == "left"){
        console.log(img_src);
        return (
            <div className={`md:grid grid-cols-12 ${className} group overflow-hidden`}>
                <div className={`col-span-6 bg-cover bg-no-repeat group-hover:scale-110 transition-transform duration-300 min-h-[200px]`}
                    style={{ backgroundImage: `url(${img_src})` }}
                ></div>
                {/*<div className={`col-span-6 bg-[url('${img_src}')] bg-no-repeat`}></div>*/}
                <div className="col-span-6 bg-white z-10">
                    <div className="text">
                        {children}
                    </div>
                </div>
            </div>
        )
    }

}