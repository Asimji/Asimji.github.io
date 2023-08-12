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
    window.open("https://drive.google.com/file/d/1WxnxEHdjXjJIF6IM8OImQlcdl0GgWB3H/view?usp=sharing",'_blank');
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
    
 <Text id="user-detail-intro" mt={4}>A Full Stack Web Developer with a strong foundation in modern web development technologies. Skilled in building scalable and responsive web applications using React, Redux, Express.js, and MongoDB. Passionate about creating efficient and user-friendly interfaces while ensuring optimal performance and maintainability.</Text>
            </Box>
      <Box textAlign={'left'} ml={10}> 

      <a href={resume} download={'Mohd-Asim-Resume.pdf'}>

<Button onClick={handleResumeClick} id="resume-button-2">Resume</Button>
</a>
  
            </Box>
           

            <Flex className="link" justify={'space-between'} mt={20} p={10}>
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
    <Grid templateColumns={{xl:'repeat(4,1fr)',lg:'repeat(2,1fr)',base:'repeat(1,1fr)'}} fontSize={40} gap={5}>
        <Link><FaReact/></Link>
        <Link><FaNodeJs/></Link>
        <Link><SiExpress/></Link>
        <Link><SiMongodb/></Link>
    </Grid>
    </Box>       

            </Flex>

        </Box>
     <Box  className='main2' mr={{xl:15.5}}  borderRadius={20}>
        <Image src={logo} borderRadius={20} w={{md:'100%'}} className="home-img"/>
     </Box>
    </Grid>

      
    </Box>
  )
}

export default Home
