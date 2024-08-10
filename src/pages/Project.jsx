import pfl from "../PreImg/pfl.png"
import wes from "../PreImg/wes.png"
import bajz from "../PreImg/bajz.png"
import medisched from "../PreImg/medi-sched.png"


const Project = () => {
return (
    <div className="bg-gradient-to-b h-full">
        <h1 className="md:text-4xl text-2xl text-center pt-6">PROJECTS</h1>

        {/* first project */}

        <div className=" flex flex-col lg:flex-row items-center space-y-5 lg:space-x-8 lg:mt-4 lg:ml-6 pb-6 text-reveal">
            
            <div>
                <img className="w-[300px] h-[280px] rounded-md mt-6 object-contain" src={medisched}></img>   
            </div>

            <div className="space-y-4">
                
                <div className="">
                    <h1 className="text-xl lg:text-2xl text-center font-bold lg:mr-[290px]">BAJZ</h1>
                </div>

                <div className="px-7 md:px-7">
                    <h3><span className="text-xl font-bold">Tech Stack:</span> Next.JS, typescript, tailwind, shadcn-ui, twilio and sentry</h3>
                    <p>A fullstack health management web application developed to curb the tedious process of booking an appointment with a doctor . </p>
                </div>

                <div className="animate-text-left-to-right flex mr-[150px] md:mr-[262px] space-x-3 ml-7 md:ml-6">
                    <a href="https://medi-sched.vercel.app/" className="buttons">
                    <button className="w-[100px] pt-2 pb-3 bg-gradient-to-r  bg-blue-950 text-white hover:from-blue-500 hover:to-blue-950 focus:outline-none focus:ring focus:ring-blue-100 active:bg-blue-700 rounded-lg font-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                        Live
                    </button>
                    </a>

                    <a href="https://github.com/ayobaj/medi-sched" className="buttons">
                    <button className="w-[100px] pt-2 pb-3 bg-gradient-to-r  bg-blue-950 text-white hover:from-blue-500 hover:to-blue-950 focus:outline-none focus:ring focus:ring-blue-100 active:bg-blue-700 rounded-lg font-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                        GitHub
                    </button>
                    </a>
                </div>
                
            </div>

        </div>

        {/*2nd project*/}
        <div className=" flex flex-col lg:flex-row items-center space-y-5 lg:space-x-8 lg:mt-4 lg:ml-6 pb-6 text-reveal">
            
            <div>
                <img className="w-[300px] h-[280px] rounded-md mt-6 object-contain" src={bajz}></img>   
            </div>

            <div className="space-y-4">
                
                <div className="">
                    <h1 className="text-xl lg:text-2xl text-center font-bold lg:mr-[290px]">BAJZ</h1>
                </div>

                <div className="px-7 md:px-7">
                    <h3><span className="text-xl font-bold">Tech Stack:</span> React.JS, Javascript, Tailwind CSS, Tailwind Animation, Firebase, Redux, Mongodb, Express, Nodejs and Render. </h3>
                    <p>A fullstack Blog web application developed with the MERN stack. </p>
                </div>

                <div className="animate-text-left-to-right flex mr-[150px] md:mr-[262px] space-x-3 ml-7 md:ml-6">
                    <a href="https://bajz.onrender.com/" className="buttons">
                    <button className="w-[100px] pt-2 pb-3 bg-gradient-to-r  bg-blue-950 text-white hover:from-blue-500 hover:to-blue-950 focus:outline-none focus:ring focus:ring-blue-100 active:bg-blue-700 rounded-lg font-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                        Live
                    </button>
                    </a>

                    <a href="https://github.com/ayobaj/BAJZ" className="buttons">
                    <button className="w-[100px] pt-2 pb-3 bg-gradient-to-r  bg-blue-950 text-white hover:from-blue-500 hover:to-blue-950 focus:outline-none focus:ring focus:ring-blue-100 active:bg-blue-700 rounded-lg font-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                        GitHub
                    </button>
                    </a>
                </div>
                
            </div>

        </div>

        {/* second project */}

        <div className=" flex flex-col lg:flex-row items-center space-y-5 lg:space-x-8 lg:mt-4 lg:ml-6 pb-6 text-reveal">
            
            <div>
                <img className="w-[300px] h-[280px] rounded-md mt-6 object-contain " src={wes}></img>   
            </div>

            <div className="space-y-4">
                
                <div className="">
                    <h1 className="text-xl lg:text-2xl text-center font-bold lg:mr-[200px]">WESAMYET</h1>
                </div>

                <div className="px-7 md:px-7">
                    <h3><span className="text-xl font-bold">Tech Stack:</span> React.JS, Javascript, Tailwind CSS, Firebase, Redux, Mongodb, Express, Nodejs and Vercel. </h3>
                    <p>A fullstack realestate market place developed with the MERN stack. </p>
                </div>

                <div className="animate-text-left-to-right flex mr-[150px] md:mr-[262px] space-x-3 ml-7 md:ml-6">
                    <a href="https://wesamyet-jwby.vercel.app/" className="buttons">
                    <button className="w-[100px] pt-2 pb-3 bg-gradient-to-r  bg-blue-950 text-white hover:from-blue-500 hover:to-blue-950 focus:outline-none focus:ring focus:ring-blue-100 active:bg-blue-700 rounded-lg font-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                        Live
                    </button>
                    </a>

                    <a href="https://github.com/ayobaj/wesamyet" className="buttons">
                    <button className="w-[100px] pt-2 pb-3 bg-gradient-to-r  bg-blue-950 text-white hover:from-blue-500 hover:to-blue-950 focus:outline-none focus:ring focus:ring-blue-100 active:bg-blue-700 rounded-lg font-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                        GitHub
                    </button>
                    </a>
                </div>
                
            </div>

        </div>

        {/* 3nd project */}

        <div className="text-reveal flex flex-col lg:flex-row items-center space-y-5 lg:space-x-8 lg:mt-4 lg:ml-6">
            
            <div>
                <img className="w-[300px] h-[280px] rounded-md mt-6 " src={pfl}></img>   
            </div>

            <div className="space-y-4">
                
                <div className="">
                    <h1 className="text-xl lg:text-2xl text-center font-bold">PORTFOLIO</h1>
                </div>

                <div className="px-7">
                    <h3><span className="text-xl font-bold">Tech Stack:</span>  React.JS, Javascript, Tailwind CSS, GSAP and Vercel. </h3>
                    <p>A developers portfolio using React.JS, Javascript, GSAP and Tailwind CSS. </p>
                </div>

                <div className="animate-text-left-to-right flex mr-[150px] md:mr-[262px] space-x-3 ml-7">
                    <a href="https://ayomidebajulaye.vercel.app/" className="buttons">
                    <button className="w-[100px] pt-2 pb-3 bg-gradient-to-r  bg-blue-950 text-white hover:from-blue-500 hover:to-blue-950 focus:outline-none focus:ring focus:ring-blue-100 active:bg-blue-700 rounded-lg font-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                        Live
                    </button>
                    </a>

                    <a href="https://github.com/ayobaj/portfolio-react" className="buttons">
                    <button className="w-[100px] pt-2 pb-3 bg-gradient-to-r  bg-blue-950 text-white hover:from-blue-500 hover:to-blue-950 focus:outline-none focus:ring focus:ring-blue-100 active:bg-blue-700 rounded-lg font-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                        GitHub
                    </button>
                    </a>
                </div>
                
            </div>

        </div>










        <div className="flex items-end justify-center mt-[160px]  mb-6">
        <a href="https://github.com/ayobaj" className="buttons">
            <button className="w-[100px] pt-2 pb-3 bg-gradient-to-r  bg-blue-950 text-white hover:from-blue-500 hover:to-blue-950 focus:outline-none focus:ring focus:ring-blue-100 active:bg-blue-700 rounded-lg font-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                See All
            </button>
            </a>
        </div>

    </div>
    )
}

export default Project
