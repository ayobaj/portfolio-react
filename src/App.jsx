import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import PreLoader from "./components/PreLoader";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";



const App = () => {
return (
    <div className=" font-tiltneon">
        <PreLoader/>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<Project/>}/>
            <Route path="/resume" element={<Resume/>}/>
        </Routes>
        <Footer/>
    </div>
)
}

export default App
