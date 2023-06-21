import { Box,  Flex,  Image, Text, IconButton, useDisclosure, useColorMode, Button } from '@chakra-ui/react'
import { HamburgerIcon, Icon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import React, { useContext } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import logo from "../images/asim-pic.jpg"
import { ThemeContext } from './context/ThemeProvider';

import resume from "../images/Mohd-Asim-Resume.pdf"


const Navbar = () => {
  const handleResumeClick = () => {
    window.open("https://drive.google.com/file/d/1J-iSjeHXgHdyWp-SXSn38NJh9vI2O7Bd/view?usp=drive_link",'_blank');
  };

  const {theme,setTheme}=useContext(ThemeContext);
  

  const { isOpen, onToggle } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode()

  if(colorMode==='light'){
    setTheme(true)
  }
  else{
    setTheme(false)
  }



  return (
    <Box ml={{xl:10,base:0}} mr={{xl:10,base:0}} id="nav-menu"   p={'1rm'} box-shadow=' rgba(0, 0, 0, 0.35) 0px 5px 15px' 
    // style={theme?{color:'black'}:{color:'white'}}
    pos="sticky"
    top="0"
    zIndex="sticky"
    bg='teal'
    pl={1}
    
    >
  <Flex justify={'space-between'} flexDirection={{base:"row",sm:"column",xs:"column",lg:"column"}} fontSize={'18px'} align={'center'} >
    
     <Flex >
      <Image src={logo} alt="asim" w={50} borderRadius={'50%'}/>
      <Text ml={{xl:2,base:0}} mt={{xl:2,base:0}} display={{base:'none',md:'block'}}>Mohd Asim</Text>
    </Flex>

    <Flex align="center" justify="space-between" p={4}>
      
      <IconButton
        aria-label="Toggle navigation"
        icon={<HamburgerIcon />}
        display={{ base: "block", md: "none" }}
        onClick={onToggle}
      />
      <Box
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        border={{base:'1px solid gray',md:'0px solid red'}}
        
        textAlign={'left'}
      >
         <Link to="#home" >
        <Text className="nav-link home">Home</Text>
      </Link >
        <Link to="#about" >
        <Text className="nav-link about" ml={{xl:5,lg:5,base:0}}>About Me</Text>
        </Link>
        <Link to="#skills"   >
        <Text className="nav-link skills"  ml={{xl:5,lg:5,base:0}}>Skills</Text>
        </Link>
        <Link to="#projects">
        <Text className="nav-link projects" ml={{xl:5,lg:5,base:0}}>Project</Text>
        </Link>
        <Link to="#contact">
        <Text className="nav-link contact"  ml={{xl:5,lg:5,base:0}}>Contact</Text>
        </Link>
      
      <Box className="nav-link resume" ml={{xl:5,lg:5,base:0}}>
        <a href={resume} download={'Mohd-Asim-resume.pdf'}>
     <Button onClick={handleResumeClick} id="resume-button-1">Resume</Button>
     </a>

        </Box>
        
       <Box onClick={toggleColorMode} cursor={'pointer'} ml={{xl:5,lg:5,base:0}} >{theme?<Icon as={MoonIcon}/>:<Icon as={SunIcon}/>} </Box>
     
        {/* Add more menu items here */}
      </Box>
    </Flex>

    </Flex>

    <Box borderBottom={'1px solid gray'} mt={5}></Box>

    </Box>
  )
}

export default Navbar
