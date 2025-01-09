import { ReactNode } from 'react';

interface propsMenu{
    children: ReactNode;
    className: string | undefined;
}
export default function Menu({children, className}: propsMenu){

    return (
        <div className={`${className} h-full text-navy flex`}>{children}</div>
    )
}