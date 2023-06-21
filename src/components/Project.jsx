import { Box, Center, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { ThemeContext } from './context/ThemeProvider';
import apple from "../images/apple.png"
import arivu from "../images/arivu.png"
import furniture from "../images/furniture.png"
import myntra from "../images/myntra.png"

const Project = () => {
  const {theme}=useContext(ThemeContext)
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  return (
    <Box id='projects' style={theme?{color:'black'}:{color:'white'}} ml={{xl:10,base:0}} mt={20} mb={20}>

        <Center mb={10}>
            <Heading fontWeight={'bold'}>My Projects</Heading>
        </Center>

        <Grid templateColumns={{xl:'repeat(2,1fr)',lg:'repeat(2,1fr)',base:'repeat(1,1fr)'}} columnGap={10} rowGap={5}>
       <Box className="project-card" border={'1px solid gray'} borderRadius={10}  boxShadow='xl'>
        <Box p={5} 
         overflow="hidden"
         onMouseEnter={() => setIsHovered1(true)}
         onMouseLeave={() => setIsHovered1(false)}
        >
          <Image borderRadius={10} src={arivu} 
          transition="transform 0.3s"
          transform={isHovered1 ? "scale(1.2)" : "scale(1)"}
          objectFit="cover"
          cursor={'pointer'}
          />
        </Box>
        <Flex fontSize={25} justifyContent={'space-between'} p={5}>
          <Text  className="project-title">Arivu</Text>
          <Flex gap={10}>
          <Link className="project-github-link" to='https://github.com/SumatM/puny-potato-4945'><AiFillGithub/></Link>
          <Link  className="project-deployed-link" to='https://puny-potato-4945.vercel.app/'><MdOutlineTravelExplore/></Link>
          </Flex>
        </Flex>
    <Text className="project-description" fontSize={20} textAlign={'left'} p={5}>ARIVU is an online learning platform that offers courses across various domains, similar to Coursera. This repository contains the source code for the ARIVU website.</Text>
    <Text className="project-tech-stack" fontSize={20} textAlign={'left'} p={5}>React.js | Redux | Chakra UI | Express.js | Node.js | MongoDB</Text>
       </Box>
       <Box className="project-card" border={'1px solid gray'} borderRadius={10}  boxShadow='xl'>
        <Box p={5}  
          overflow="hidden"
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <Image borderRadius={10} src={furniture}
          transition="transform 0.3s"
          transform={isHovered2 ? "scale(1.2)" : "scale(1)"}
          objectFit="cover"
          cursor={'pointer'}
          />
        </Box>
        <Flex fontSize={25} justifyContent={'space-between'} p={5}>
          <Text  className="project-title">FurnitureNow</Text>
          <Flex gap={10}>
          <Link className="project-github-link" to='https://github.com/Asimji/money-reason-7925'><AiFillGithub/></Link>
          <Link  className="project-deployed-link" to='https://furniture89.netlify.app/'><MdOutlineTravelExplore/></Link>
          </Flex>
        </Flex>
    <Text className="project-description" fontSize={20} textAlign={'left'} p={5}>It is an e-commerce website that shops Online in India for Furniture, Home Decor, Homeware Products It is an Individual project that takes 5 days to complete.</Text>
    <Text className="project-tech-stack" fontSize={20} textAlign={'left'} p={5}>React.js | Redux | Chakra UI | RESTful API</Text>
       </Box>
       <Box className="project-card" border={'1px solid gray'} borderRadius={10}  boxShadow='xl'>
        <Box p={5}
          overflow="hidden"
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
        >
          <Image borderRadius={10} src={myntra}
          transition="transform 0.3s"
          transform={isHovered3 ? "scale(1.2)" : "scale(1)"}
          objectFit="cover"
          cursor={'pointer'}
          />
        </Box>
        <Flex fontSize={25} justifyContent={'space-between'} p={5}>
          <Text  className="project-title">FalsyApple</Text>
          <Flex gap={10}>
          <Link className="project-github-link" to='https://github.com/Lokendra-debug/limping-protest-4858'><AiFillGithub/></Link>
          <Link  className="project-deployed-link" to='https://genuine-dusk-510c1b.netlify.app/'><MdOutlineTravelExplore/></Link>
          </Flex>
        </Flex>
    <Text className="project-description" fontSize={20} textAlign={'left'} p={5}>Myntra is a one-stop shop for all your fashion and lifestyle needs.
A collaborative project built by a team of 5 members in 5 days</Text>
    <Text className="project-tech-stack" fontSize={20} textAlign={'left'} p={5}>HTML | CSS | JavaScript | RESTful API</Text>
       </Box>
       <Box className="project-card" border={'1px solid gray'} borderRadius={10}  boxShadow='xl'>
        <Box p={5}
          overflow="hidden"
          onMouseEnter={() => setIsHovered4(true)}
          onMouseLeave={() => setIsHovered4(false)}
        >
          <Image borderRadius={10} src={apple}
          transition="transform 0.3s"
          transform={isHovered4 ? "scale(1.2)" : "scale(1)"}
          objectFit="cover"
          cursor={'pointer'}
          />
        </Box>
        <Flex fontSize={25} justifyContent={'space-between'} p={5}>
          <Text  className="project-title">FalsyApple</Text>
          <Flex gap={10}>
          <Link className="project-github-link" to='https://github.com/Asimji/mute-death-5036'><AiFillGithub/></Link>
          <Link  className="project-deployed-link" to='https://imaginative-kangaroo-369d50.netlify.app/'><MdOutlineTravelExplore/></Link>
          </Flex>
        </Flex>
    <Text className="project-description" fontSize={20} textAlign={'left'} p={5}>It is an e-commerce website that shops Online in India for Apple Mobile Products. It is an Individual project that takes 5 days to complete.</Text>
    <Text className="project-tech-stack" fontSize={20} textAlign={'left'} p={5}>HTML | CSS | JavaScript | Mock-API</Text>
       </Box>
      


       

        </Grid>
      
    </Box>
  )
}

export default Project
