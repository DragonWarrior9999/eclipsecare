import { ReactNode } from 'react';

interface propsMenu{
    children: ReactNode;
}
export default function Menu({children}: propsMenu){

    return (
        <div className="h-full border border-white flex">{children}</div>
    )
}