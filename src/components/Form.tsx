



export default function Form(){


    return(
        <div className="text max-w-[450px] min-h-[520px] bg-blue-400">
            <p>Request Support</p>
            <p>Our Team is here to help. Contact us today to learn more about our services to speak directly with one of our dedicated staff</p>
            <div className="sm:grid grid-cols-2 grid-rows-4 gap-3 border border-yellow min-h-[300px]">
                <div className="form-div border border-red-400"></div>
                <div className="form-div border border-red-400"></div>
                <div className="form-div col-span-2 border border-red-400"></div>
                <div className="form-div border border-red-400"></div>
                <div className="form-div border border-red-400"></div>
                <div className="form-div col-span-2 border border-red-400"></div>
            </div>
        </div>
    )
}