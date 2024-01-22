import { BiArrowToRight,BiArrowToBottom } from "react-icons/bi";
import { FaFacebookF, FaTwitter,FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import "./Main.css";
import { TypeAnimation } from 'react-type-animation';
function Main() {
  return (
    <>
      <div className="relative flex flex-row items-center w-full h-screen">
        <div className="mainOne w-2/5 h-screen object-cover bg-cover bg-center bg-no-repeat"></div>
         <div className="relative w-3/5 h-screen bg-[--eerie-black] flex flex-row justify-center items-center gap-20 px-10 pt-24">
            <div className="flex flex-col gap-6">
              <div className="me-first">
                <p className="text-2xl text-justify text-white">Hi,<span className="waving-icon">&#128075;</span>i am </p>
              </div>
                <h2 className="text-4xl text-white">
                  Abdul-Matin <span className="text-yellow-500">Olalekan</span>
                </h2>
                <div className="flex flex-row text-xl items-center gap-4"> 
                  <h1>I am</h1>
                  <TypeAnimation
                    sequence={['Frontend Developer', 1000, 'UI/UX Designer', 1500, 'AI Prompt Engineer', 1500]}
                    style={{ fontSize: '40px',color:"#f3bc17" }}
                    repeat={Infinity}/>
                </div>
                <p className="text-lg text-justify text-white ">
                        I'm a passionate web designer skilled in Frontend Development, UI/UX Design, and AI Prompt Engineering. 
                        Explore my portfolio to see visually stunning and functional websites. With a unique blend of technical 
                        expertise and creative vision, I enhance user experiences through seamless interfaces and innovative solutions .
                </p>
                <a className="Btn" href="#">Get in touch<BiArrowToRight className="icon" /></a>
                <button className="downArrow"> <BiArrowToBottom/></button>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div className="socialicon">
                <FaFacebookF size={20} className="social-icon" />
              </div>
              <div className="socialicon">
                <FaTwitter size={20} className="social-icon" />
              </div>
              <div className="socialicon">
                <FaLinkedin size={20} className="social-icon" />
              </div>
              <div className="socialicon">
                <FaGithub size={20} className="social-icon" />
              </div>
              <div className="socialicon">
                <SiGmail size={20} className="social-icon" />
              </div>
            </div>
         </div>
      </div>
     </>
   )
 }
export default Main;