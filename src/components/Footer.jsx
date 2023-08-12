import { Box, Flex, Grid, Text,  Center, } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom';

import { ThemeContext } from './context/ThemeProvider';
import { FaCreativeCommons } from 'react-icons/fa';

const Footer = () => {
  const {theme}=useContext(ThemeContext)
  return (
    <Box style={theme?{color:'black'}:{color:'white'}} p={'5vh'}>
       <Flex  justify={{md:'space-between',base:'space-around'}}>
<Flex   gap={{md:'6vh',base:'2vh'}} direction={{base:'column',md:'row'}}>
  <Text fontWeight={'bold'}>Mohd Asim</Text>
  <Text>About</Text>
  <Text>Skills</Text>
  <Text>Project</Text>
</Flex>

    <Grid templateColumns={{xl:'repeat(3,1fr)',lg:'repeat(3,1fr)',base:'repeat(1,1fr)'}} fontSize={20}  gap={{md:'2vh',base:0}} >
    <Link to='https://www.linkedin.com/in/mohd-asim-8688061b2/'> <AiFillLinkedin/>  </Link>    
    <Link to='https://github.com/Asimji'> <AiFillGithub/></Link> 
    <Link> <AiFillInstagram/></Link>
     
    </Grid>

      
       </Flex>
      
      <Box borderBottom={'2px solid gray'} mb={'10vh'} mt={'2vh'}></Box>
      <Center fontWeight={'bold'}>
       <span style={{marginRight:'1vh'}}> <FaCreativeCommons /></span> 2023 Mohd Asim.All rights reserved
      </Center>
    </Box>
  )
}

export default Footer
