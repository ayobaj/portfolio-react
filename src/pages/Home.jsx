import { Link } from "react-router-dom";
import { useTypewriter, Cursor} from "react-simple-typewriter";

const Home = () => {

  const {text} = useTypewriter({
    words: ['Ayomide Bajulaye'],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 200
  })


  return (
    <div className="bg-gradient-to-b   h-full md:flex">

      <div className="h-screen lg:h-screen w-full flex flex-col space-y-10 lg:space-y-12 pt-[35px] pl-9 pr-5 lg:pl-9 lg:pr-5">
        <h3 className="text-xl">Hi, My Name Is </h3>

        <h1 className="md:text-4xl text-2xl font-bold inline-block transition-transform transform-gpu hover:rotate-3 origin-center duration-300" ><span>{text} Ayomide Bajulaye</span> <Cursor cursorStyle='</>' /></h1>

        <p className="text-xl w-[95%] md:w-[100%] lg:w-[100%] lg:text-2xl mb-[px] inline-block transition-transform transform-gpu hover:rotate-3 origin-center duration-300">
          I'm a self-employed Web Developer who is passionate about creating outstanding online experiences.
          I specialize in creating user-friendly, SEO-optimized, and accessible products. I can work on a variety of projects as a freelancer, 
          and I'm currently open to new opportunities. Together, let's develop exceptional solutions that are suited to your requirements.
        </p>

        <button  className="w-[100px] pt-2 pb-3 bg-gradient-to-r  bg-blue-950 text-white hover:from-blue-500 hover: to-blue-950 focus:outline-none focus:ring focus:ring-blue-100 
          active:bg-blue-700 rounded-lg font-bold shadow-md transition duration-300 ease-in-out transform hover:scale-105 ">
          <Link to="/about" className="buttons">
            About Me
          </Link>
        </button>
      </div>

      

    </div>
  );
};

export default Home;
