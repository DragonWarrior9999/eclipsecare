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
            <Section className="pt-[40px] pb-[30px] bg-[#F5F9FF]">
                <div className={`md:grid grid-cols-12 bg-white rounded-lg`}>
                    <div className={`col-span-9 min-h-[500px] `}>
                        <div className={`article-text min-h-[300px] border`}>
                            {text_article}
                        </div>
                    </div>
                    <div className={`col-span-3 border`}
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