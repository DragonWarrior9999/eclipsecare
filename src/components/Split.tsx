import { ReactNode } from 'react';

interface propsSplit{
    //children: ReactNode;
    className: string;
    left: ReactNode;
    right: ReactNode;
    left_span: string;
    right_span: string;
    
}

export default function Split({className, left_span, right_span, left, right}: propsSplit ){

    return (
        <div className={`md:grid grid-cols-12 ${className}`}>
            <div className={`col-span-${left_span} border border-white`}>
                {left}
            </div>
            <div className={`col-span-${right_span} bg-red-400`}>
                {right}
            </div>
        </div>
    )
}