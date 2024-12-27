import Section from '../components/Section';

export default function Home(){


    return (
        <>
            <div className=" border border-orange-500 h-[120px] w-screen">THIS IS THE HOME PAGE</div>
            <Section className="h-[500px]">
                <div className="md:flex justify-center gap-8 border border-orange-400">
                        <div className="w-full md:max-w-[300px] rounded-lg h-[250px] border border-white"></div>
                        <div className="w-full md:max-w-[300px] rounded-lg h-[250px] border border-white"></div>
                        <div className="w-full md:max-w-[300px] rounded-lg h-[250px] border border-white"></div>
                </div>
            </Section>
        </>
    )
}