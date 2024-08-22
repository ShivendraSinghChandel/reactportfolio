import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div id="contact" className="contacts">
        <h1>CONTACT</h1>
        <div className="contacticons">
          <div className="icons"><a target="_blank" href="https://www.instagram.com/thakur_shivendra_chandel_/"><FaSquareInstagram /></a></div>
          <div className="icons"><a target="_blank" href="https://github.com/ShivendraSinghChandel"><FaGithub /></a></div>
          <div className="icons"><a target="_blank" href="mailto:chandel486670@gmail.com"><IoMdMail /></a></div>
          <div className="icons"><a target="_blank" href="https://in.linkedin.com/in/shivendra-singh-chandel-110467270"><FaLinkedin /></a></div>
          <div className="icons"><a target="_blank" href="https://leetcode.com/u/Shivendra_Singh_Chandel/"><SiLeetcode /></a></div>
          <div className="icons"><a target="_blank" href="https://www.facebook.com/profile.php?id=100033454590690"><FaFacebook /></a></div>
        </div>
        <div className="buttondiv"><button className="contactbutton ">Say Hello</button></div>
      </div>
    </>
  )
}


export default Contact;
<div className="icons"><a onClick={()=>{window.open("https://www.instagram.com/thakur_shivendra_chandel_/","_parent","width=100px,height=100px")}}><FaSquareInstagram /></a></div>