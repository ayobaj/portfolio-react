import { useEffect } from "react"
import baj2 from "../PreImg/baj2.png"
import { preLoaderAnim } from "../animations";

const PreLoader = () => {

    useEffect(()=>{
        preLoaderAnim()
    },[]);

    return (
        <div className=" preloader">
            <img className="rounded-full" src={baj2} height={100} width={100} alt="PreImg" />
            <div className="texts-container"> 
            <span>Frontend Developer</span>
            <span>FullStack Developer</span>
            <span>Graphics Designer</span>
            </div>
        </div> 
    )
}

export default PreLoader
