import { Box, Heading } from '@chakra-ui/react'
import React, { useContext } from 'react'

import { ThemeContext } from './context/ThemeProvider'

const About = () => {
   const {theme}=useContext(ThemeContext)
  
  return (
    <Box id='about' className="about section" style={theme?{color:'black'}:{color:'white'}} mt={'5vh'} >
       <Heading mb={10}>
      About Me
     </Heading>
     <Box fontSize={'1.4rem'} textAlign={'left'} p={'2rem'}>
    <Box  id="user-detail-name" fontWeight={'bold'} fontSize={'5vh'}>Hello I am <span style={{color:'brown'}}> Mohd Asim </span></Box>
     <Box  fontWeight={'bold'}  id="user-detail-intro" mt={2}>
     A full-stack developer with over 1200 hours of hands-on coding practice and 300+ hours dedicated to mastering data structures and algorithms. I possess a high adaptability to learn and collaborate effectively in rapidly changing environments.

My journey includes recent exposure to Prompt Engineering, where I gained valuable experience in Python and Angular. As a Full-Stack Developer, I excel in the latest front-end technologies, including React, Redux, and Chakra UI. Additionally, I have substantial experience working with Node.js, Express.js, MongoDB, and other back-end tools. I am eagerly looking forward to contributing my skills and expertise as a web developer with a technology-driven and reputable firm..
     </Box>
     <Box  textAlign={'left'}  mt={'1rem'}>
     {/* <Box id="resume-link-2"> 

      <Resume/>
</Box> */}
     </Box>
     </Box>
        {/* </Flex> */}
      
    </Box>
  )
}

export default About
