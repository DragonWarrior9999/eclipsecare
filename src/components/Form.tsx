



export default function Form(){


    return(
        <div className="p-[40px] max-w-[500px] min-h-[550px] bg-babyblue border-4 border-primary rounded-[8px] text-navy">
            <h4 className='text-[2.2rem]'>Request Support</h4>
            <p className="mt-[10px]">Our Team is here to help. Contact us today to learn more about our services to speak directly with one of our dedicated staff</p>
            <div className="mt-[20px] xs:grid grid-cols-2 grid-rows-4 gap-3 border border-yellow min-h-[300px]">
                <div className="form-div">
                    <input type="text" placeholder="First Name" className="form-input w-full h-full"/>
                </div>
                <div className="form-div">
                    <input type="text" placeholder="Last Name" className="form-input w-full h-full"/>
                </div>
                <div className="form-div col-span-2">
                    <input type="text" placeholder="Email" className="form-input w-full h-full"/>
                </div>
                <div className="form-div">
                    <input type="text" placeholder="Date of Birth" className="form-input w-full h-full"/>
                </div>
                <div className="form-div">
                    <input type="text" placeholder="Phone" className="form-input w-full h-full"/>
                </div>
                <div className="form-div col-span-2">
                    <input type="text" placeholder="Message" className="form-input w-full h-full"/>
                </div>
            </div>
            <button className="mt-[20px] button-sm button-dark">Send</button>
        </div>
    )
}