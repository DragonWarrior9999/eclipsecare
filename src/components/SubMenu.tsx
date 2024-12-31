

export default function SubMenu(){

    {/*
    return(
        <div className="h-full flex bg-violet-400 w-[800px]">
            <div className="h-full w-[400px] border border-white"></div>
            <div className="grid grid-cols-2 grid-rows-4 h-full w-[480px] bg-yellow-400">
                
            </div>
        </div>
    )*/}
    {/*height has too match parents height MenuHeading() should deal with position*/}
    return(
        <div className="flex bg-yellow-500 w-[800px] h-[400px]">
            <div className="h-full w-[350px] border border-white"></div>
            <div className="grid grid-cols-2 grid-rows-4 h-full w-[450px] bg-blue-400">
                <div className="bg-red-400"></div>
                <div className="bg-orange-400"></div>
                <div className="bg-orange-400"></div>
                <div className="bg-red-400"></div>
                <div className="bg-red-400"></div>
                <div className="bg-orange-400"></div>
                <div className="bg-orange-400"></div>
                <div className="bg-red-400"></div>
                
            </div>
        </div>
    )
}