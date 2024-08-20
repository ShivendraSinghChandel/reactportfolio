import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header=()=>{
    return(
        <>
         <Navbar className='navbar'>
        <Container>
          <Navbar.Brand href="#home" className='mr-3 navtitle'>PORTFOLIO</Navbar.Brand>
          <Nav className='ms-auto'>
            <Nav.Link href='#hero' className=" navitems">Home</Nav.Link>
            <Nav.Link href='#about' className=" navitems">About</Nav.Link>
            <Nav.Link href='#skills' className=" navitems">Skills</Nav.Link>
            <Nav.Link href='#project' className=" navitems">Project</Nav.Link>
            <Nav.Link href='#contact' className=" navitems">Contact</Nav.Link>
            {/* <Nav.Link href='../public/images/myresume.pdf' className='navitems' download="myresume.pdf" >Download CV</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default Header;