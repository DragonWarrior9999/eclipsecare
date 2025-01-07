import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import Section from './Section';

interface propsTwoCards{
    text_left: ReactNode;
    text_right: ReactNode;
    img_left: string | undefined;
    src_left: string;
    src_right: string;
    img_right: string | undefined;
}



export default function TwoCards({text_left, text_right, img_left, img_right, src_left, src_right}: propsTwoCards){


    return (


        <Section className="min-h-[100px] pt-[40px] pb-[40px] bg-babyblue">
            <div className="md:grid grid-cols-2">

                <Link to={src_left}>
                    <div className="flex md:max-w-[480px] justify-between rounded-lg  bg-white min-h-[300px] cards-twoCards">
                        <div className="border w-full p-[40px] flex flex-col justify-center">
                            {text_left}
                        </div>
                        <div className="w-[250px]"
                            style={{
                                backgroundImage: `url(${img_left})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }}
                        ></div>
                    </div>
                </Link>
                <Link to={src_right}>
                    <div className="flex md:max-w-[480px] justify-between rounded-lg bg-white min-h-[300px] cards-twoCards">
                        <div className="border w-full p-[40px] flex flex-col justify-center">
                            {text_right}
                        </div>
                        <div className="w-[250px]"
                            style={{
                                backgroundImage: `url(${img_right})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }}
                        ></div>
                    </div>
                </Link>
            </div>
        </Section>
    )
}