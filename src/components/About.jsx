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
     A full stack developer, with 1200+ hours of coding practice, 300+ hours of  Data structure and algorithms. High adaptability to learn and collaborate in a rapidly changing environment. <br /> As a Full-Stack Developer, I'm well-versed in the latest front-end technologies such as React, Redux, and Chakra UI, <br /> and have worked with Node.js, Express.js, MongoDB, and other back-end tools. Looking forward to working as a <br /> web developer with a reputed firm driven by technology.
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
