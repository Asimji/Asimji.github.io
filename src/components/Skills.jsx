import { Box, Center, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { SiChakraui } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { ImGit } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import { TbBrandVscode } from "react-icons/tb";
import { ThemeContext } from './context/ThemeProvider';

const Skills = () => {
  const {theme}=useContext(ThemeContext)
  return (
    <Box id='skills' style={theme?{color:'black'}:{color:'white'}} mt={{xl:20,base:0}} ml={{xl:20,base:0}} mr={{xl:20,base:0}}>
      <Center>
        <Heading>Technical Skills</Heading>
      </Center>
      <Grid templateColumns={{xl:'repeat(2,1fr)',lg:'repeat(1,1fr)',base:'repeat(1,1fr)'}} gap={10} mt={10}>
        <Box className="skills-card" >
          <Box fontSize={'2rem'}>
            <Heading className="skills-card-name">Languages</Heading>
          </Box>
          <Center>
           <Box  color={'yellow'} w={{xl:250,base:100}} h={{xl:200,base:50}} fontSize={{xl:200,base:50}} ml={{xl:150,base:0}} mt={5}  className="skills-card-img" > 
           <IoLogoJavascript />
           </Box>
          </Center>
         <Text  textAlign={{xl:'center',lg:'center',base:'left'}}  p={{xl:5,base:0}} mt={5}>My Favorite languages for Software Development</Text>
        </Box>
        <Box className="skills-card"  >
          <Box fontSize={'2rem'}>

            <Heading mr={{xl:20,base:0}}  className="skills-card-name">Front-End</Heading>
          </Box>
          
         <Grid templateColumns={{xl:'repeat(2,1fr)',lg:'repeat(2,1fr)',base:'repeat(1,1fr)'}} columnGap={2} rowGap={2} fontSize={{xl:120,lg:100,base:50}} mb={5}  pl={{xl:20,base:0}} pr={{xl:20,base:0}}>
          <Center>
          <Box color={'blue.400'}  className="skills-card-img"><IoLogoReact/></Box>
          </Center>
          <Center>
          <Box color={'blue.900'}  className="skills-card-img"><SiChakraui/></Box>
          </Center>
          <Center>
          <Box color={'orange.800'}  className="skills-card-img"><IoLogoHtml5/></Box>
          </Center>
          <Center>
          <Box color={'blue.600'}  className="skills-card-img"><IoLogoCss3/></Box>
          </Center>
         </Grid>

         <Text  textAlign={{xl:'center',lg:'center',base:'left'}}>My Preferred Technologies for Front-End Web Development and Component Design</Text>
        
        </Box>
        <Box className="skills-card"  >
          <Box fontSize={'2rem'}>
            <Heading className="skills-card-name">Back-End</Heading>
            </Box>
            <Flex fontSize={{xl:150,lg:100,base:50}} flexDirection={{xl:'row',lg:'row',base:'column'}} justify={'space-around'}>
              <Center>
              <Box color={'green.600'}  className="skills-card-img"><FaNodeJs/></Box>
              </Center>
              <Center>
              <Box color={'blueviolet'}  className="skills-card-img"><SiExpress/></Box>
              </Center>
            </Flex>
            <Center  color={'green.600'} fontSize={{xl:150,lg:100,base:50}}>
           <SiMongodb/>
            </Center>

            <Text mt={10}  textAlign={{xl:'center',lg:'center',base:'left'}}>My Preferred technologies for Back-End Web Programming and DataBase Architecture</Text>
          
        </Box>
        <Box className="skills-card"  >
          <Box fontSize={'2rem'}>
            <Heading className="skills-card-name">Tools</Heading>
          </Box>
          <Flex  fontSize={{xl:150,lg:100,base:50}}  flexDirection={{xl:'row',lg:'row',base:'column'}}  justify={'space-around'}>
            <Center>
              <Box color={'orange'}  className="skills-card-img"><ImGit/></Box>
            </Center>
            <Center>

              <Box color={'blueviolet'}  className="skills-card-img"><TbBrandVscode/></Box>
            </Center>
            </Flex>
            <Center color={'black'} fontSize={{xl:150,lg:100,base:50}} >
           <ImGithub/>
            </Center>

            <Text  textAlign={{xl:'center',lg:'center',base:'left'}} mt={{xl:10,lg:5,base:0}}>My Preferred technologies for Back-End Web Programming and DataBase Architecture</Text>
          
           
        </Box>
  

      </Grid>
    </Box>
  )
}
export default Skills
