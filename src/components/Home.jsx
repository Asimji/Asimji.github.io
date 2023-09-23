import { Box, Button, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import logo from "../images/asim-pic.jpg"
import { Link } from 'react-router-dom'
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { keyframes } from '@emotion/react';
import { ThemeContext } from './context/ThemeProvider';
import resume from "../images/Mohd-Asim-Resume.pdf"

const blinkAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Home = () => {
  const handleResumeClick = () => {
    window.open("https://drive.google.com/file/d/1zdZOFLDgnSyMmQiq8x0mlb_FVV84Sy1G/view?usp=sharing",'_blank');
  };
  const {theme}=useContext(ThemeContext)
  return (
    <Box style={theme?{color:'black'}:{color:'white'}} id='home' >
         <Grid templateColumns={{xl:'repeat(2,1fr)',base:'repeat(1,1fr)'}}   >
        <Box className='main1' >
            <Box textAlign={'left'} p={10}>

            <Text>WELCOME TO MY WORLD</Text>
        <Heading id="user-detail-name" mt={2}>Hi, I'm  <span style={{color:'#ff014f'}} id="user-detail-name">  MOHD ASIM </span></Heading>
    
        <Heading 
          as="span"
          display="inline-block"
          animation={`${blinkAnimation} 3s infinite`}
        >
        a Full Stack Web Developer.</Heading>
    
 <Text id="user-detail-intro" mt={4}>A Full Stack Web Developer with a strong foundation in modern web development technologies. I recently completed a brief but intensive period of Prompt Engineering, where I delved into Python and Angular. I am now skilled in building scalable and responsive web applications using React, Redux, Express.js, and MongoDB. Passionate about creating efficient and user-friendly interfaces while ensuring optimal performance and maintainability.</Text>
            </Box>
      <Box textAlign={'left'} ml={10}> 

      <a href={resume} download={'Mohd-Asim-Resume.pdf'}>

<Button onClick={handleResumeClick} id="resume-button-2">Resume</Button>
</a>
  
            </Box>
           

            <Flex className="link" justify={'space-between'} mt={20} p={10} display={{xl:'flex',base:'none'}}>
<Box textAlign={'left'} fontWeight={'bold'}>
    <Text>FIND ME IN</Text>
    <Grid templateColumns={{xl:'repeat(3,1fr)',lg:'repeat(3,1fr)',base:'repeat(1,1fr)'}} fontSize={40}  gap={5}>
    <Link  id="contact-linkedin" to='https://www.linkedin.com/in/mohd-asim-8688061b2/'> <AiFillLinkedin/>  </Link>
    <Link id="contact-github" to='https://github.com/Asimji'><AiFillGithub/></Link>
    <Link><AiFillInstagram/></Link>
    </Grid>
    </Box>       
<Box  textAlign={'left'} fontWeight={'bold'}>
<Text>BEST SKILL ON</Text>
    <Grid templateColumns='repeat(4,1fr)'  fontSize={40} gap={5}>
        <Link><FaReact/></Link>
        <Link><FaNodeJs/></Link>
        <Link><SiExpress/></Link>
        <Link><SiMongodb/></Link>
    </Grid>
    </Box>       

            </Flex>

        </Box>
        {/* mr={{xl:15.5}} borderRadius={20} */}
     {/* <Box  className='main2'  
     
     >
        <Image src={logo} w={{md:'80%'}} ml={{md:'10vh'}} mt={{md:'3vh'}} boxShadow='dark-lg'  className="home-img"
        position="relative"
        clipPath="polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" 
        w="40vw"
      h="70vh"
        />
     </Box> transition="transform 0.1s ease-in-out" // Add a transition for the animation
      _hover={{
        transform: "scale(1.1)" }}// Scale up on hover
        transition="transform 0.1s ease-in-out" // Add the same transition to the inner Box
        _hover={{
          transform: "scale(0.5)" }} // Scale up on hover (same as the parent)
          ml={{md:'25vh'}} mt={{md:'8vh'}}
 */}
    
    <Box  className='main2'  display={'flex'} alignItems={'center'} justifyContent={'center'}
    h='50%' mt={'10vh'}
     >
        <Image src={logo} w={{xl:"60%",base:'50%'}}  boxShadow='dark-lg' borderRadius={'50%'}  className="home-img"
        />
     </Box>

    </Grid>

      
    </Box>
  )
}

export default Home
