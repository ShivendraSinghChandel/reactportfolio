import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import  Container  from "react-bootstrap/Container";

const App=()=>{
  return(
    <>
    <Container>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      </Container>
    </>
  )
}

export default App;