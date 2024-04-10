import { MdSimCardDownload } from "react-icons/md";
import { FaHandPeace } from "react-icons/fa";


const Resume = () => {
    const downloadResume = () => {
        const resumeFilePath = '/bajcv.pdf';
        window.open(resumeFilePath, '_blank');
    };

    return (
        <div className="text-2xl text-center flex flex-col pt-9 space-y-[290px]  h-full ">
            
            <h1 className="font-bold"> RESUME</h1>
            
            <button onClick={downloadResume} className=" flex items-center justify-center ml-5 mr-5 pt-2 pb-3  bg-gradient-to-r  bg-blue-950 text-white hover:from-blue-500 hover: to-blue-950 focus:outline-none focus:ring focus:ring-blue-100
            active:bg-blue-700 rounded-lg font-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105 ">Download<span><MdSimCardDownload/></span>
            </button>
            
            <button className="flex justify-center tilt">
                <FaHandPeace className="text-4xl mb-3"/>
            </button>
            
        </div>
    );
};

export default Resume;
