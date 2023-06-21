import { Box, Flex, Grid, Image, Text,  Table, Tr, Th, Td, Thead, Tbody, } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom';
import logo from "../images/asim-pic.jpg"
import { ThemeContext } from './context/ThemeProvider';


const Footer = () => {
  const {theme}=useContext(ThemeContext)
  return (
    <Box style={theme?{color:'black'}:{color:'white'}} h={{xl:600,lg:600,base:1000}}>
        <Box border={'1px solid gray'} mb={40}></Box>

        <Flex  gap={{xl:400,lg:200,base:20}} flexDirection={{xl:'row',lg:'row',base:'column'}}>
   <Box className='left' fontSize={'25px'}   mt={70} ml={{xl:20,base:0}}>
   <Flex gap={5}  mb={10}>
      <Image src={logo} alt="asim" w={'80px'} borderRadius={'50%'}/>
      <Text  mt={4}>Mohd Asim</Text>
      
    </Flex>

    <Grid templateColumns={{xl:'repeat(3,1fr)',lg:'repeat(3,1fr)',base:'repeat(1,1fr)'}} fontSize={40}  w={{xl:'50%',lg:'50%',base:'100%'}} gap={5} ml={{xl:5,base:0}}>
        <Box border={'1px solid gray'} w={'95%'} align='center' color={'gray'} p={2}>
    <Link to='https://www.linkedin.com/in/mohd-asim-8688061b2/'> <AiFillLinkedin/>  </Link>
        </Box>
        <Box border={'1px solid gray'} w={'95%'} align='center' color={'gray'} p={2}>
    <Link to='https://github.com/Asimji'> <AiFillGithub/></Link>
        </Box>
        <Box border={'1px solid gray'} w={'95%'} align='center' color={'gray'} p={2}>
    <Link> <AiFillInstagram/></Link>
        </Box>
    </Grid>


   </Box>
        
    <Box  w={'600px'} mr={{xl:100,base:0}}>

  <Table w='wrap' h="100%"  p='10px' textAlign={'left'} >
    <Thead style={{color:'red'}}>
      <Tr >
        <Th>Quick Link</Th>
        <Th>Resource</Th>
        <Th>Developer</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>About</Td>
        <Td>AuTHentication</Td>
        <Td >Documentation</Td>
      </Tr>
      <Tr>
        <Td>Portfolio</Td>
        <Td>System Status</Td>
        <Td >AuTHentication</Td>
      </Tr>
      <Tr>
        <Td>Services</Td>
        <Td>Term of Services</Td>
        <Td >API Refrence</Td>
      </Tr>
      <Tr>
        <Td>Blog</Td>
        <Td>Pricing</Td>
        <Td >Support</Td>
      </Tr>
      <Tr>
        <Td>Contact</Td>
        <Td>Overwrite</Td>
        <Td >Resources</Td>
      </Tr>
    </Tbody>
   
  </Table>
    </Box>

      

</Flex>

<Box border={'1px solid gray'} mt={40}></Box>
    </Box>
  )
}

export default Footer
