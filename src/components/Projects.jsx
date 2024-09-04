import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Projects = () => {
  return (
    <>
      <div className='projectsection' id="projects">
        <h1 data-aos="fade-right" data-aos-duration="1000">PROJECTS</h1>
        <div className='projectitem'>
        <Row>
          <Col>
              <Card data-aos="flip-up" data-aos-duration="1000" className='card' style={{ width: '18rem' }}>
                <Card.Img className='img' variant="top" src="public/projects/tictactoe.png" />
                <Card.Body>
                  <Card.Title>Tic Tac Toe</Card.Title>
                  <Card.Text>
                    A game developed using C++.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button  className='demobutton'>Demo</Button>
                  <Button  className='codebutton' onClick={()=>{window.open('https://github.com/ShivendraSinghChandel/tictactoe')}}>Code</Button>
                </Card.Body>
              </Card>
            
          </Col>
          <Col>
              <Card data-aos="flip-up" data-aos-duration="1000" className='card' style={{ width: '18rem' }}>
                <Card.Img className='img' variant="top" src="public/projects/ecommerce.png" />
                <Card.Body>
                  <Card.Title>E-Commerce Website</Card.Title>
                  <Card.Text>
                    An E-Commerce website developed using html and css.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button  className='demobutton'>Demo</Button>
                  <Button  className='codebutton' onClick={()=>{window.open('https://github.com/ShivendraSinghChandel/multipagewebsite')}}>Code</Button>
                </Card.Body>
              </Card>
            
          </Col>
          <Col>
              <Card data-aos="flip-up" data-aos-duration="1000" className='card' style={{ width: '18rem' }}>
                <Card.Img className='img' variant="top" src="public/projects/footwear.png" />
                <Card.Body>
                  <Card.Title>E-Commerce Website</Card.Title>
                  <Card.Text>
                    An E-Commerce website developed using html and css.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button  className='demobutton'>Demo</Button>
                  <Button  className='codebutton' onClick={()=>{window.open('https://github.com/ShivendraSinghChandel/FootweareCommerce')}}>Code</Button>
                </Card.Body>
              </Card>
            
          </Col>

        </Row>
        <Row>
          <Col>
              <Card data-aos="flip-up" data-aos-duration="1000" className='card' style={{ width: '18rem' }}>
                <Card.Img className='img' variant="top" src="public/projects/jsdashboard.png" />
                <Card.Body>
                  <Card.Title>Admin Dashboard</Card.Title>
                  <Card.Text>
                    A dashboard developed using html css and javaScript with json database.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button  className='demobutton'>Demo</Button>
                  <Button  className='codebutton' onClick={()=>{window.open('https://github.com/ShivendraSinghChandel/dashboardjs')}}>Code</Button>
                </Card.Body>
              </Card>
            
          </Col>
          <Col>
              <Card data-aos="flip-up" data-aos-duration="1000" className='card' style={{ width: '18rem' }}>
                <Card.Img className='img' variant="top" src="public/projects/bookissuing.png" />
                <Card.Body>
                  <Card.Title>Book Management System</Card.Title>
                  <Card.Text>
                    A website for book management developed using html css and javaScript with json database.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button  className='demobutton'>Demo</Button>
                  <Button  className='codebutton' onClick={()=>{window.open('https://github.com/ShivendraSinghChandel/bookissuingsystem')}}>Code</Button>
                </Card.Body>
              </Card>
            
          </Col>
          <Col>
              <Card data-aos="flip-up" data-aos-duration="1000" className='card' style={{ width: '18rem' }}>
                <Card.Img className='img' variant="top" src="public/projects/reactdashboard.png" />
                <Card.Body>
                  <Card.Title>Student Dashboard</Card.Title>
                  <Card.Text>
                    A student dashboard developed using React JS with json database.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button  className='demobutton'>Demo</Button>
                  <Button  className='codebutton' onClick={()=>{window.open('https://github.com/ShivendraSinghChandel/CRUDusingReact')}}>Code</Button>
                </Card.Body>
              </Card>
            
          </Col>
        </Row>
        <Row>
          <Col>
              <Card data-aos="flip-up" data-aos-duration="1000" className='card' style={{ width: '18rem' }}>
                <Card.Img className='img' variant="top" src="public/projects/merndashboard.png" />
                <Card.Body>
                  <Card.Title>Student Management System</Card.Title>
                  <Card.Text>
                    A student dashboard developed using React JS, Node JS, Express JS and MongoDB.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button  className='demobutton'>Demo</Button>
                  <Button  className='codebutton' onClick={()=>{window.open('https://github.com/ShivendraSinghChandel/DashboardMERN')}}>Code</Button>
                </Card.Body>
              </Card>
            
          </Col>
          <Col>
              <Card data-aos="flip-up" data-aos-duration="1000" className='card' style={{ width: '18rem' }}>
                <Card.Img className='img' variant="top" src="public/projects/expansemanagement.png" />
                <Card.Body>
                  <Card.Title>Expanse Management System</Card.Title>
                  <Card.Text>
                    A website developed using MERN to manage the expanses of the user.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button  className='demobutton'>Demo</Button>
                  <Button  className='codebutton' onClick={()=>{window.open('https://github.com/ShivendraSinghChandel/ExpanseManagement')}}>Code</Button>
                </Card.Body>
              </Card>
            
          </Col>
          <Col>
              <Card data-aos="flip-up" data-aos-duration="1000" className='card' style={{ width: '18rem' }}>
                <Card.Img className='img' variant="top" src="public/projects/expansemanagement.png" />
                <Card.Body>
                  <Card.Title>Car Management System</Card.Title>
                  <Card.Text>
                    A website developed using React to manage the booking of cars.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button  className='demobutton'>Demo</Button>
                  <Button  className='codebutton' onClick={()=>{window.open('https://github.com/ShivendraSinghChandel/ExpanseManagement')}}>Code</Button>
                </Card.Body>
              </Card>
            
          </Col>
        </Row>
        </div>
      </div>
    </>
  )
}


export default Projects;