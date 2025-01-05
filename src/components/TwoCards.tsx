import { ReactNode } from 'react';


interface propsTwoCards{
    heading_left: string;
    heading_right: string;
    img_left: string | undefined;
    img_right: string | undefined;
}

export default function TwoCards({heading_left, heading_right, img_left, img_right}: propsTwoCards){


    return (

        <div className={`mt-[10px] text flex-col flex md:flex-row justify-center gap-10`}>
                <div className={`w-full flex flex-col justify-end md:max-w-[800px] rounded-lg min-h-[300px] cards`}
                style={{
                    backgroundImage: `url('${img_left}')`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'

                }}
                >
                    <div className="min-h-[150px] border border-red rounded-lg">
                        <h3>{heading_left}</h3>
                    </div>
                </div>
                <div className={`w-full flex flex-col justify-end md:max-w-[800px] rounded-lg min-h-[300px] cards`}
                style={{
                    backgroundImage: `url(${img_right})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'

                }}
                >
                    <div className="min-h-[150px] border border-red rounded-lg">
                        <h3>{heading_right}</h3>
                    </div>
                </div>
        </div>
    )
}