

interface propsTwoCards{
    heading_left: string;
    heading_right: string;
    img_left: string | undefined;
    img_right: string | undefined;
}

export default function TwoCards({heading_left, heading_right, img_left, img_right}: propsTwoCards){


    return (

        <div className={`mt-[10px] text flex-col flex md:flex-row justify-center gap-10`}>
                {/*
                <div className={`w-full md:max-w-[800px] rounded-lg min-h-[300px] cards`}
                style={{
                    backgroundImage: `url(${img_right})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'

                }}
                >
                </div>*/}
                <div className=" w-full flex md:max-w-[500px] justify-between rounded-lg min-h-[300px] border border-navy cards">
                    <div className="flex items-center"><p>Explore Careers</p><h3>{heading_left}</h3></div>
                    <div
                    className="min-w-[200px] border rounded-lg"
                    style={{
                        backgroundImage: `url(${img_left})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}
                    ></div>
                </div>
                <div className="w-full flex md:max-w-[500px] justify-between rounded-lg min-h-[300px] border border-navy cards">
                    <div className="flex items-center"><h3>{heading_right}</h3></div>
                    <div
                    className="min-w-[200px] border rounded-lg"
                    style={{
                        backgroundImage: `url(${img_right})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}
                    ></div>
                </div>
        </div>
    )
}