import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
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
      </Container>
    </>
  )
}

export default App;