import { Box, Button,  Flex, Grid, Heading, Image, Input, Text, Textarea } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import logo1 from "../images/contactImg.png"
import { Link } from 'react-router-dom';
import  { ThemeContext } from './context/ThemeProvider';

const Contact = () => {
  const {theme}=useContext(ThemeContext)

  return (
    <Box id='contact' style={theme?{color:'black'}:{color:'white'}} ml={{xl:20,base:0}} mr={{xl:20,base:0}} mb={{xl:40,lg:30,base:0}}>
      
      <Box mb={3} alignItems={{base:'left',xl:'center',lg:'center'}} color='red'>CONTACT</Box>
      <Box mb={5} alignItems={{base:'left',xl:'center',lg:'center'}}>
        <Heading fontWeight={'bold'}>Contact With Me</Heading>
      </Box>
  <Grid templateColumns={{lg:'repeat(2,1fr)',xl:'repeat(2,1fr)',base:'repeat(1,1fr)'}} gap={5}>
       <Box border={'1px solid gray'} w={{xl:'85%',lg:'400px',md:'350px',base:'100%'}} textAlign={'left'} pl='5%' className='left'
       borderRadius={20}
       >
      <Box  w={{xl:'90%',lg:'90%',base:'60%'}} mt="10" mb={5}>
        <Image src={logo1} borderRadius={20} />
      </Box>
      <Box >
        <Heading mb={5} fontWeight={'bold'}>Mohd Asim</Heading>
        <Text mb={5} fontSize={{xl:24,lg:24,base:12}}>Full Stack Web Developer</Text>
        <Text mb={5}>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. At, magni.</Text>
        <Text mb={5}  id="contact-phone">Phone: +917827909011</Text>
        <Text mb={5}  id="contact-email">Email: mohdasim.srk@gmail</Text>
      </Box>
      <Box textAlign={'left'} fontWeight={'bold'}>
    <Text fontSize={{xl:22,lg:22,base:12}} mb={5}>FIND ME IN</Text>
    <Grid templateColumns={{xl:'repeat(3,1fr)',lg:'repeat(2,1fr)',base:'repeat(1,1fr)'}} fontSize={{xl:40,lg:40,base:20}}  w={'50%'} gap={1} mb={5}>
        <Box border={'1px solid gray'} w='95%' align='center' color={'gray'} p={2} id="contact-linkedin">
    <Link to='https://www.linkedin.com/in/mohd-asim-8688061b2/'> <AiFillLinkedin/>  </Link>
        </Box>
        <Box border={'1px solid gray'}  w='95%' align='center' color={'gray'} p={2}  id="contact-github">
    <Link to='https://github.com/Asimji'> <AiFillGithub/></Link>
        </Box>
        <Box border={'1px solid gray'}  w='95%' align='center' color={'gray'} p={2}>
    <Link> <AiFillInstagram/></Link>
        </Box>
    </Grid>
    </Box>    

       </Box>
       <Box border={'1px solid gray'} className='right' w={{xl:'700px',lg:'500px',md:'350px',base:'100%'}} p={10} textAlign={'left'}
       borderRadius={20} 
       >
        <Flex justify={'space-between'} flexDirection={{xl:'row',lg:'row',base:'column'}} align={{xl:'center',lg:'center',base:'left'}}  gap={{xl:5,lg:5,base:2}} mb={{xl:5,lg:5,base:2}}  >
            <Box >
        <label>Your Name</label>
     <Input/>
</Box>
<Box>
     <label >Phone Number</label>
     <Input/>

</Box>
        </Flex>
        <Box mb={5} >
        <label >Email</label>
        <Input/>
        </Box>
        <Box mb={5}>
        <label >Subject</label>
        <Input/>
        </Box>
        <Box mb={5}>
        <label >Message</label>
        <Textarea h={'200px'}/>
        </Box>
       <Box  >
        <Button bg={'gray.600'} w='100%'>Send Message</Button>

       </Box>

{/* asim */}
       </Box>


  </Grid>
    </Box>
  )
}
export default Contact
