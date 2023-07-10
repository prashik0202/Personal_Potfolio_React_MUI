import './App.css'
import { Typography, Container } from '@mui/material';
import AnchorLink from "react-anchor-link-smooth-scroll";
import {RemoveScroll} from 'react-remove-scroll';

import Navbar from './components/global/Navbar';
import Footer from './components/global/Footer';

import Home from './pages/Home';
import Skills from './pages/Skills';
import Project from './pages/Projects';
import Contact from './pages/Contact';

function App() {

  return (
    
      <div className='App'>
        <Container >
          <Navbar />
          <Home/>
          <Skills />
          <Project />
          <Contact /> 
        </Container>
        <Footer />
      </div>
  )
}

export default App
