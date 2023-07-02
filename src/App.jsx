import './App.css'
import { Typography, Container } from '@mui/material';

import Navbar from './components/global/Navbar';

import Home from './pages/Home';
import Skills from './pages/Skills';
import Project from './pages/Projects';

function App() {

  return (
    <div className='App'>
      <Container>
        <Navbar />
        <Home />
        <Skills />
        <Project />
      </Container>
      
    </div>
  )
}

export default App
