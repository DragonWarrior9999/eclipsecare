import { ReactNode } from "react";

interface SectionProps{
  //column: string; //determines with side text is on: left or right
  className: string;
  children: ReactNode;
}

function Section({ className, children }: SectionProps){
  
  return(
    <div className={`${className} grid lg:grid-cols-[minmax(60px,auto)_minmax(884px,1120px)_minmax(60px,auto)] md:grid-cols-[minmax(60px,auto)_minmax(500px,1120px)_minmax(60px,auto)] grid-cols-[minmax(25px,auto)_minmax(200px,1120px)_minmax(25px,auto)]`}>
        <div className=""></div>

        <div id="content" className="">
          <div className=" h-full rounded-[20px]">

              {/*
              <div className="col-span-6 pt-[150px] relative">
                  <div id="text-s1" className="p-[40px]">
                      <h1 className="max-w-[350px] border-yellow-400 border">A Real Developer.</h1>
                      <p className="border border-yellow-400">Say Goodbye to being ransomed by bootleg developers from Pakistan; pretending to know what their doing.</p>
                      <button>Get Started</button>
                  </div>
              </div>
              <div className="col-span-6 bg-[url('../assets/www.svg')] bg-no-repeat bg-contain mt-[60px] hidden lg:block"></div>
                */}
            {children}
          </div>
        </div>

        <div className=""></div>
    </div>
  )
}

export default Section;