import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const About = () => {
  return (
    <>
    <div className='aboutsection' id='about'>
      <Row>
      <Col> <Image style={{height:"439px", width:"340px"}} src='/images/IMG_20240202_005430.jpg' rounded /> </Col>
        <Col> <h1>About Me</h1> <br />
          Hello! I'm Shivendra Singh Chandel. I'm a web developer,
          and programmer too. 
          and I'm very passionate and dedicated to my 
          work. I have acquired the skills and 
          knowledge necessary to make your project a success. 
          I enjoy every step of the design process, from 
          discussion and collaboration.
          Lorem ipsum dolor sit amet, consectetur adipisicing
           elit. Ut doloremque ratione perferendis possimus 
           voluptatibus distinctio autem expedita qui unde modi 
           impedit officia illum praesentium amet, vero quos natus 
           veritatis totam!
           <br />
          <button style={{margin:"50px 0px 0px 20px",padding:"10px 30px",border:"none",fontSize: "20px",borderRadius:"8px",borderBottom:"3px solid gray"}}>Know More</button>
          </Col>
      </Row>
      </div>
    </>
  )
}


export default About;