import { ReactNode } from 'react';

interface propsMenu{
    children: ReactNode;
}
export default function Menu({children}: propsMenu){

    return (
        <div className="border border-white flex">{children}</div>
    )
}