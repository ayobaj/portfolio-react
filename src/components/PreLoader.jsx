import { useEffect } from "react"
import logo from "../assets/logo.svg"
import { preLoaderAnim } from "../animations";

const PreLoader = () => {

    useEffect(()=>{
        preLoaderAnim()
    },[]);

    return (
        <div className=" preloader">
            <img className="rounded-full" src={logo} height={100} width={80} alt="PreImg" />
            <div className="texts-container"> 
            <span>Software Engineer</span>
            <span>Mobile Engineer</span>
            <span>Graphics Designer</span>
            </div>
        </div> 
    )
}

export default PreLoader
