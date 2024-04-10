import { Link } from "react-router-dom";
import { CgMenuBoxed } from "react-icons/cg";
import { FaRegWindowClose } from "react-icons/fa";
import { useState } from "react";
import logo from '../assets/logo.svg'




const NavBar = () => {
    const [show, setShow] = useState(false);

    const handleLinkClick = () => {
        setShow(false);  
    };

    return (
        <div className="bg-blue-950 h-[80px] lg:h-[80px]  w-full font-tiltneon text-white">
            <div>
                <nav className=" flex justify-between items-center w-[92%] mx-auto ">
                    <div className="pt-7">
                        <Link to="/" className=" inline-block transition-transform transform-gpu hover:rotate-6 origin-center duration-300  text-xl"><img src={logo} width={30}/></Link>
                    </div>

                    <div className="hidden lg:flex lg:items-center">
                        <div className="flex lg:flex-row flex-col lg:items-center lg:gap-[4vw] gap-7 pt-7">
                            <Link to="/" className="inline-block transition-transform transform-gpu hover:rotate-3 origin-center duration-300">Home</Link>
                            <Link to="/about" className="inline-block transition-transform transform-gpu hover:rotate-3 origin-center duration-300">About</Link>
                            <Link to="/projects" className="inline-block transition-transform transform-gpu hover:rotate-3 origin-center duration-300">Projects</Link>
                            <Link to="/resume" className="inline-block transition-transform transform-gpu hover:rotate-3 origin-center duration-300">Resume</Link>
                        </div>
                    </div>

                    {show === false ?
                        <CgMenuBoxed className=" text-3xl lg:hidden mt-6 cursor-pointer inline-block transition-transform transform-gpu hover:rotate-3 origin-center duration-300 " onClick={() => setShow(true)} /> :
                        <FaRegWindowClose className=" text-3xl lg:hidden mt-5 cursor-pointer rounded-md inline-block transition-transform transform-gpu hover:rotate-3 origin-center duration-300" onClick={() => setShow(false)} />
                    }

                    {show && <div className="lg:hidden absolute bg-blue-950 min-h-[39vh] lg:min-h-fit lg:w-auto left-0 top-[8.3%] md:top-[7.5%] w-full flex items-center px-5 z-10 ">
                        <div className="flex lg:flex-row flex-col lg:items-center lg:gap-[4vw] gap-7 pt-6 ">
                            <Link to="/"  className="inline-block transition-transform transform-gpu hover:rotate-3 origin-center duration-300" onClick={handleLinkClick}>Home</Link>
                            <Link to="/about"  className="inline-block transition-transform transform-gpu hover:rotate-3 origin-center duration-300" onClick={handleLinkClick}>About</Link>
                            <Link to="/projects"  className="inline-block transition-transform transform-gpu hover:rotate-3 origin-center duration-300" onClick={handleLinkClick}>Projects</Link>
                            <Link to="/resume" className="inline-block transition-transform transform-gpu hover:rotate-3 origin-center duration-300"  onClick={handleLinkClick}>Resume</Link>
                        </div>
                    </div>}
                </nav>
            </div>
        </div>
    )
}

export default NavBar;
