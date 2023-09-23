import { Box, Center, Grid, Heading } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { SiChakraui } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { ImGit } from "react-icons/im";
import { FaAngular } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiReacttable } from "react-icons/si";
import { IoLogoPython } from "react-icons/io";
import { ThemeContext } from './context/ThemeProvider';

const Skills = () => {
  const {theme}=useContext(ThemeContext)
  return (
    <Box id='skills' style={theme?{color:'black'}:{color:'white'}} mt={{xl:20,base:0}}>
      <Center>
        <Heading>Technical Skills</Heading>
      </Center>
      
      <Grid templateColumns={{xl:'repeat(5,1fr)',base:'repeat(2,1fr)'}} mt={10}
      >
      
        <Box className="skills-card"     textAlign={'center'} p={'5vh'} display={'Flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
          <Box className="skills-card-img" fontSize={{xl:'15vh',base:'11vh'}}  bg={'orange.500'}>
        <IoLogoHtml5 />
          </Box>
          <Heading fontSize={{xl:'3vh',base:'2vh'}} className="skills-card-name">HTML</Heading>
        </Box>
        <Box className="skills-card"     textAlign={'center'} p={'5vh'} display={'Flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
          <Box className="skills-card-img" fontSize={{xl:'15vh',base:'11vh'}}  bg={'blue.400'}>
        <IoLogoCss3 />
          </Box>
          <Heading fontSize={{xl:'3vh',base:'2vh'}} className="skills-card-name">CSS</Heading>
        </Box>
        <Box className="skills-card"     textAlign={'center'} p={'5vh'} display={'Flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
          <Box className="skills-card-img" fontSize={{xl:'15vh',base:'11vh'}}  bg={'yellow.400'}>
        <IoLogoJavascript />
          </Box>
          <Heading fontSize={{xl:'3vh',base:'2vh'}} className="skills-card-name">JavaScript</Heading>
        </Box>
        <Box className="skills-card"     textAlign={'center'} p={'5vh'} display={'Flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
          <Box className="skills-card-img" fontSize={{xl:'15vh',base:'11vh'}}  bg={'blue.400'}>
        <IoLogoPython />
          </Box>
          <Heading fontSize={{xl:'3vh',base:'2vh'}} className="skills-card-name">Python</Heading>
        </Box>
        <Box className="skills-card"     textAlign={'center'} p={'5vh'} display={'Flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
          <Box className="skills-card-img" fontSize={{xl:'15vh',base:'11vh'}} color={'blue'}>
        <IoLogoReact />
          </Box>
          <Heading fontSize={{xl:'3vh',base:'2vh'}} className="skills-card-name">React</Heading>
        </Box>
        <Box className="skills-card"     textAlign={'center'} p={'5vh'} display={'Flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
          <Box className="skills-card-img" fontSize={{xl:'15vh',base:'11vh'}} color={'Voilet'}>
        <SiRedux />
          </Box>
          <Heading fontSize={{xl:'3vh',base:'2vh'}} className="skills-card-name">Redux</Heading>
        </Box>
        <Box className="skills-card"     textAlign={'center'} p={'5vh'} display={'Flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
          <Box className="skills-card-img" fontSize={{xl:'15vh',base:'11vh'}} color={'red'}>
        <FaAngular />
          </Box>
          <Heading fontSize={{xl:'3vh',base:'2vh'}} className="skills-card-name">Angular</Heading>
        </Box>
        <Box className="skills-card"     textAlign={'center'} p={'5vh'} display={'Flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
          <Box className="skills-card-img" fontSize={{xl:'15vh',base:'10vh'}} color={'blue'}>
        <SiTypescript />
          </Box>
          <Heading fontSize={{xl:'3vh',base:'2vh'}} className="skills-card-name">TypeScript</Heading>
        </Box>
        <Box className="skills-card"     textAlign={'center'} p={'5vh'} display={'Flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
          <Box className="skills-card-img" fontSize={{xl:'15vh',base:'11vh'}} color={'gray'}>
        <SiExpress />
          </Box>
          <Heading fontSize={{xl:'3vh',base:'2vh'}} className="skills-card-name">Express</Heading>
        </Box>
        <Box className="skills-card"     textAlign={'center'} p={'5vh'} display={'Flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
          <Box className="skills-card-img" fontSize={{xl:'15vh',base:'11vh'}} color={'green'}>
        <SiMongodb />
          </Box>
          <Heading fontSize={{xl:'3vh',base:'2vh'}} className="skills-card-name">MongoDB</Heading>
        </Box>
        <Box className="skills-card"     textAlign={'center'} p={'5vh'} display={'Flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
          <Box className="skills-card-img" fontSize={{xl:'15vh',base:'11vh'}} color={'green'}>
        <FaNodeJs />
          </Box>
          <Heading fontSize={{xl:'3vh',base:'2vh'}} className="skills-card-name">Node.js</Heading>
        </Box>
        <Box className="skills-card"     textAlign={'center'} p={'5vh'} display={'Flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
          <Box className="skills-card-img" fontSize={{xl:'15vh',base:'11vh'}} color={'teal'}>
        <SiChakraui />
          </Box>
          <Heading fontSize={{xl:'3vh',base:'2vh'}} className="skills-card-name">Chakra UI</Heading>
        </Box>
        <Box className="skills-card"     textAlign={'center'} p={'5vh'} display={'Flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
          <Box className="skills-card-img" fontSize={{xl:'15vh',base:'11vh'}} color={'teal'}>
        <SiTailwindcss />
          </Box>
          <Heading fontSize={{xl:'3vh',base:'2vh'}} className="skills-card-name">Tailwind CSS</Heading>
        </Box>
        <Box className="skills-card"     textAlign={'center'} p={'5vh'} display={'Flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
          <Box className="skills-card-img" fontSize={{xl:'15vh',base:'11vh'}} color={'orange'}>
        <ImGit />
          </Box>
          <Heading fontSize={{xl:'3vh',base:'2vh'}} className="skills-card-name">Git Hub</Heading>
        </Box>
        <Box className="skills-card"     textAlign={'center'} p={'5vh'} display={'Flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
          <Box className="skills-card-img" fontSize={{xl:'15vh',base:'11vh'}} color={'blueviolet'}>
        <SiReacttable />
          </Box>
          <Heading fontSize={{xl:'3vh',base:'2vh'}} className="skills-card-name">Prompt Engineering</Heading>
        </Box>

  

      </Grid>
      
    </Box>
  )
}
export default Skills
