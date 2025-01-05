import Section from "./Section";
import Split from "./Split";
import { ReactNode } from 'react';


interface propsArticle{
    
    text: ReactNode;
    right_col: ReactNode;
}

export default function Article({text, right_col}: propsArticle){
    return (

        <Section className="bg-violet-300">
            <Split left_span="6" right_span="6" responsive="md" className="bg-red-400"
            left={
                <div className={`article-text min-h-[300px] border border-yellow-300`}>
                    {text}
                </div>
            }
            right={
                <div className={`bg-green-300 min-h-[300px]`}>
                    {right_col}
                </div>
            }
            ></Split>
        </Section>
    )
}