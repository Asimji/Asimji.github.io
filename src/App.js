
import { Box } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Project from './components/Project';
import Footer from './components/Footer';

import Home from './components/Home';
import About from './components/About';
import GitCalendar from './components/GitCalender';
import GithubStatistics from './components/GithubStatistics';
import NewNavbar from './components/NewNavbar';



function App() {
  return (
    <Box className="App" m={0} p={0}  w={'100%'} h={'100%'}>
      <NewNavbar/>
      <Home/>
      <About/>
      <Skills/>
      
      <Project/>
      <GithubStatistics/>
<GitCalendar />
      <Contact/>
   
      <Footer/>
    </Box>
  );
}

export default App;
