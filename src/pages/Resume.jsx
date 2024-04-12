import { MdSimCardDownload } from "react-icons/md";
import { FaHandPeace } from "react-icons/fa";


const Resume = () => {
    const downloadResume = () => {
        const resumeFilePath = '/bajcv.pdf';
        window.open(resumeFilePath, '_blank');
    };

    return (
        <div className="text-2xl text-center flex flex-col pt-9 space-y-[290px] justify-center items-center h-full ">
            
            <h1 className="font-bold"> RESUME</h1>
            
            <a href="https://drive.google.com/file/d/1_vclnEqqbyqLw_18TgI6yamEX7oi83T2/view?usp=sharing">
                <button className=" py-2 px-4 flex items-center bg-gradient-to-r  bg-blue-950 text-white hover:from-blue-500 hover: to-blue-950 focus:outline-none focus:ring focus:ring-blue-100
                active:bg-blue-700 rounded-lg font-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105 ">Google Drive<span><MdSimCardDownload/></span>
                </button>
            </a>
            
            
            <button className="flex justify-center tilt">
                <FaHandPeace className="text-4xl mb-3"/>
            </button>


            

            
        </div>
    );
};

export default Resume;
