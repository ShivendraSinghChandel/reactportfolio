import { useEffect } from "react";
import { useRef } from "react";
import Typed from "typed.js";

const Hero=()=>{
    const typ=useRef(null);

    useEffect(()=>{
       const data={
        strings:["Hii, I AM SHIVENDRA","I AM MERN STACK DEVELOPER","AND SOFTWARE DEVELOPER"],
        typeSpeed:60,
        backSpeed:60,
        loop:true,
        showCursor:false
       }

       const type=new Typed(typ.current,data)

       return ()=>{
        type.destroy()
       }
    },[])
    return(
        <>
        <div className='herodiv' id="hero">
          <div className='herointro' 
          data-aos="fade-up-right"
         data-aos-duration="1000"> 
                <h1 style={{height:"10%"}} ref={typ}></h1> <br />
                <div><a href="../public/images/myresume.pdf" download="myresume.pdf">Download CV</a> </div>
                
          </div>
          <div className="heroimg" 
          data-aos="fade-up-left"
          data-aos-duration="1000">
                <div className="image">
                    <img src="public/hero/hero1.jpg" alt="" />
                </div>
          </div>
        </div>
        </>
    )
}

export default Hero;