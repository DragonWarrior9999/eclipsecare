import Section from "./Section";
import { ReactNode } from 'react';


interface propsArticle{
    
    //text_hero: ReactNode;
    text_article: ReactNode;
    img_hero: string;
    img_article: string;
}

export default function Article({img_article, img_hero, text_article}: propsArticle){

    return (
        <>
            <div className="h-[150px]"></div>
            <div className="min-h-[300px] w-full"
                
                style={{
                    backgroundImage: `url(${img_hero})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}
            ></div>
            <Section className="pt-[40px] pb-[30px] bg-white">
                <div className={`md:grid grid-cols-12 rounded-lg`}>
                    <div className={`col-span-9 min-h-[500px] `}>
                        <div className={`text-center sm:text-left p-[10px] md:p-[30px] lg:p-[60px] min-h-[300px]`}>
                            {text_article}
                        </div>
                    </div>
                    <div className={`col-span-3`}
                    style={{
                        backgroundImage: `url(${img_article})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}
                    >
                    </div>
                </div>
            </Section>
        </>
    )
}