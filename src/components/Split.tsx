import { ReactNode } from 'react';

interface propsSplit{
    //children: ReactNode;
    className: string;
    left: ReactNode;
    right: ReactNode;
    left_span: string;
    right_span: string;
    responsive: string;
    
}

export default function Split({className, responsive, left_span, right_span, left, right}: propsSplit ){

    return (
        <div className={`${responsive}:grid grid-cols-12 ${className} `}>
            <div className={`col-span-${left_span} h-full`}>
                {left}
            </div>
            <div className={`col-span-${right_span} h-full`}>
                {right}
            </div>
        </div>
    )
}