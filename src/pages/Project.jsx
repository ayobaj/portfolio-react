import pfl from "../PreImg/pfl.png"


const Project = () => {
return (
    <div className="bg-gradient-to-b from-blue-100 h-full">
        <h1 className="md:text-4xl text-2xl text-center pt-6">PROJECTS</h1>

        <div className=" flex flex-col lg:flex-row items-center space-y-5 lg:mt-4 lg:ml-3">
            
            <div>
                <img className="w-[300px] h-[280px] rounded-md mt-6 " src={pfl}></img>   
            </div>

            <div className="space-y-4">
                
                <div className="">
                    <h1 className="text-xl lg:text-2xl text-center font-bold">PORTFOLIO</h1>
                </div>

                <div className="pl-3">
                    <h3><span className="text-xl font-bold">Tech Stack:</span>  React.JS, Javascript, Tailwind CSS, GSAP and Vercel. </h3>
                    <p>A developers portfolio using React.JS, Javascript, GSAP and Tailwind CSS. </p>
                </div>

                <div className="flex mr-[150px] md:mr-[262px] space-x-3 ml-3">
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










        <div className="flex items-end justify-center mt-[200px]  mb-6">
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
