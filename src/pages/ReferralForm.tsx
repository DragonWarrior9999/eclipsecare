
import Section from "../components/Section"

export default function ReferralForm(){


    return(
        <>
            <div className="h-[150px]"></div>
            <Section className="min-h[400px] bg-babyblue">
                <div className="min-h-[300px] sm:p-[30px] border border-orange-400">
                    <div className="lg:grid grid-cols-2 w-full min-h-[800px] border border-violet-400">
                        <div className="border border-yellow-300 p-[10px] md:p-[60px] lg:p-[30px]">
                            <h4>Participant Details</h4>
                            <div className="mt-[20px] xs:grid grid-cols-2 grid-rows-4 gap-8 border border-yellow min-h-[300px]">
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
                                    <input type="text" placeholder="Address" className="form-input w-full h-full"/>
                                </div>
                                <div className="form-div col-span-2">
                                    <input type="text" placeholder="Suburb" className="form-input w-full h-full"/>
                                </div>
                                <div className="form-div col-span-2">
                                    <textarea placeholder="Message" className="form-input w-full h-full"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="bg-green-400 p-[10px] md:p-[60px] lg:p-[30px]">
                            <h4>Referrer Details</h4>
                            <div className="mt-[20px] xs:grid grid-cols-2 grid-rows-4 gap-8 border border-yellow min-h-[300px]">
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
                                <div className="flex justify-end col-span-2 mt-[20px]">
                                    <button className="button-sm button-dark">Submit Form</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>

    )
}