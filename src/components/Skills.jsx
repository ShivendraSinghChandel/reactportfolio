import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Skills=()=>{
  const showcontrol=false;
    return(
        <>
         <div className='myskills' id='skills'>
          <h1 style={{marginLeft:"40%",marginBottom:"40px"}}>My Skills</h1>
          <Row>
            <Col className='bars'>
            <h6>HTML</h6>
             <ProgressBar variant='secondary' now={80} label={`80%`} />
            </Col>
            <Col md={3}></Col>
            <Col className='bars'>
            <h6>CSS</h6>
             <ProgressBar variant='secondary' now={80} label={`80%`} /></Col>
          </Row>
          <Row>
            <Col className='bars'>
            <h6>JavaScript</h6>
             <ProgressBar variant='secondary' now={90} label={`90%`} /></Col>
             <Col md={3}></Col>
            <Col className='bars'>
            <h6>ReactJS</h6>
             <ProgressBar variant='secondary' now={40} label={`40%`} /></Col>
          </Row>
          <Row>
            <Col className='bars'><h6>NodeJS</h6>
            <ProgressBar variant='secondary' now={30} label={`30%`} /></Col>
            <Col md={3}></Col>
            <Col className='bars'><h6>C</h6>
            <ProgressBar variant='secondary' now={90} label={`90%`} /></Col>
          </Row>
          <Row>
            <Col className='bars'><h6>C++</h6>
            <ProgressBar variant='secondary' now={90} label={`90%`} /></Col>
            <Col md={3}></Col>
            <Col className='bars'><h6>Python</h6>
            <ProgressBar variant='secondary' now={70} label={`70%`} /></Col>
          </Row>
          <Row>
            <Col className='bars'><h6>DSA</h6>
            <ProgressBar variant='secondary' now={80} label={`80%`} /></Col>
            <Col md={3}></Col>
            <Col className='bars'><h6>MySQL</h6>
            <ProgressBar variant='secondary' now={95} label={`95%`} /></Col>
          </Row>
          
         </div>
        </>
    )
}

export default Skills;