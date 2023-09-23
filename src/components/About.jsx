import { Box, Heading, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'

import { ThemeContext } from './context/ThemeProvider'

const About = () => {
   const {theme}=useContext(ThemeContext)
  
  return (
    <Box id='about' className="about section" style={theme?{color:'black'}:{color:'white'}} mt={'5vh'} >
       <Heading mb={10}>
      About Me
     </Heading>
     <Box fontSize="1.4rem" textAlign="left" p="2rem">
      <Box id="user-detail-name" fontWeight="bold" fontSize={{xl:"5vh",base:'3vh'}}>
        Hello, I am{" "}
        <span style={{ color: "brown" }}>Mohd Asim</span>
      </Box>
      <Box fontWeight="bold" id="user-detail-intro" mt={2}>
      A full-stack developer with over 1200 hours of hands-on coding practice
      and 300+ hours dedicated to mastering data structures and algorithms. I
      possess a high adaptability to learn and collaborate effectively in
      rapidly changing environments.
      <Text as="span" color="teal" fontSize="1.2rem" fontWeight="bold">
        Prompt Engineering
      </Text>
      , where I gained valuable experience in{" "}
      <Text as="span" color="purple" fontSize="1.2rem" fontWeight="bold">
        Python
      </Text>{" "}
      and{" "}
      <Text as="span" color="purple" fontSize="1.2rem" fontWeight="bold">
        Angular
      </Text>
      . As a Full-Stack Developer, I excel in the latest front-end technologies,
      including{" "}
      <Text as="span" color="blue" fontSize="1.2rem" fontWeight="bold">
        React
      </Text>
      ,{" "}
      <Text as="span" color="blue" fontSize="1.2rem" fontWeight="bold">
        Redux
      </Text>
      , and{" "}
      <Text as="span" color="blue" fontSize="1.2rem" fontWeight="bold">
        Chakra UI
      </Text>
      . Additionally, I have substantial experience working with{" "}
      <Text as="span" color="green" fontSize="1.2rem" fontWeight="bold">
        Node.js
      </Text>
      ,{" "}
      <Text as="span" color="green" fontSize="1.2rem" fontWeight="bold">
        Express.js
      </Text>
      ,{" "}
      <Text as="span" color="green" fontSize="1.2rem" fontWeight="bold">
        MongoDB
      </Text>
      , and other back-end tools. I am eagerly looking forward to contributing
      my skills and expertise as a web developer with a technology-driven and
      reputable firm.
    </Box>
    </Box>
        {/* </Flex> */}
      
    </Box>
  )
}

export default About
