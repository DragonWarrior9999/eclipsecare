import Section from "./Section";
import { ReactNode } from 'react';
import Hero from "./Hero";


interface propsArticle{
    
    text_hero: ReactNode;
    text_article: ReactNode;
    img_hero: string;
    img_article: string;
}

export default function Article({img_hero, img_article, text_hero, text_article}: propsArticle){
    return (

        <>
            <Hero img_src={img_hero}>
                {text_hero}
            </Hero>
            <Section className="pt-[40px] pb-[30px]">
                <div className={`md:grid grid-cols-12 `}>
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