import React, { useContext, useEffect, useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Image,
  Text,
  Collapse,
  useDisclosure,
  Button,
  useColorMode,
} from '@chakra-ui/react';
import {  Icon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../images/asim-pic.jpg';
import { ThemeContext } from './context/ThemeProvider';
import resume from '../images/Mohd-Asim-Resume.pdf';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';


const NewNavbar = () => {
    const handleResumeClick = () => {
        window.open("https://drive.google.com/file/d/1zdZOFLDgnSyMmQiq8x0mlb_FVV84Sy1G/view?usp=sharing", '_blank');
      };
    
      const { theme, setTheme } = useContext(ThemeContext);
      const { isOpen, onToggle } = useDisclosure();
      const { colorMode, toggleColorMode } = useColorMode();
      const [showProducts, setShowProducts] = useState(false);
    
      useEffect(()=>{
        if (colorMode === 'light') {
            setTheme(true)
              } else {
                setTheme(false);
              }
      })
    
    
      const [isScrolled, setIsScrolled] = useState(false);
    
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      const handleProductHover = () => {
        setShowProducts(true);
      };
    
      const handleProductLeave = () => {
        setShowProducts(false);
      };

      

  return (
    <Box as="nav"  px={{base:'none',md:4}} py={{base:'none',md:2}}
      id="nav-menu"
      box-shadow=' rgba(0, 0, 0, 0.35) 0px 5px 15px'
      pos="sticky"
      top="0"
      zIndex="sticky"
      bg={isScrolled ? '#F8F8FF' : 'gray100'}
      pl={1}
      color={isScrolled ? 'black' : theme ? 'black' : 'white'}
    >
      <Flex justify={{base:"space-between",md:'none'}} align="center">
        {/* Logo */}
        <Flex >
          <Image src={logo} alt="asim" w={50} borderRadius={'50%'} />
          <Text ml={2} mt={2} display={{ base: 'none', md: 'block' }}>Mohd Asim</Text>
        </Flex>

        {/* Hamburger Icon for Small and Medium Screens */}
        <Box display={{ base: 'block', md: 'none' }}>
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            onClick={onToggle}
          />
        </Box>

        {/* Menu Items for Large Screens */}
        <Flex
          as="ul"
          listStyleType="none"
          alignItems="center"
          display={{ base: 'none', md: 'flex' }}
        >
          {/* Product Tag */}
          <Flex
            as="li"
            onMouseEnter={handleProductHover}
            onMouseLeave={handleProductLeave}
            position="relative"
          >
        
            <Link to="#home">
              <Text className="nav-link home">Home</Text>
            </Link>        
            <Link to="#about">
              <Text className="nav-link about" ml={5}>About Me</Text>
            </Link>
            <Link to="#skills">
              <Text className="nav-link skills" ml={5}>Skills</Text>
            </Link>
            <Link to="#projects">
              <Text className="nav-link projects" ml={5}>Project</Text>
            </Link>
            <Link to="#contact">
              <Text className="nav-link contact" ml={5}>Contact</Text>
            </Link>
            <Box className="nav-link resume" ml={5}>
              <a href={resume} download={'Mohd-Asim-Resume.pdf'}>
                <Button onClick={handleResumeClick} id="resume-button-1" pb={{lg:'2vh'}} h={{lg:'6vh',md:'3vh'}}>Resume</Button>
              </a>
            </Box>
            <Box onClick={toggleColorMode} cursor={'pointer'} ml={5}>{theme ? <Icon as={MoonIcon} /> : <Icon as={SunIcon} />}</Box>
          </Flex>

          {/* Search Input */}
       

          {/* Login and Cart Icons */}
    
         
        </Flex>
      </Flex>

      {/* Mobile Collapse Menu */}
      <Collapse in={isOpen} animateOpacity>
        <Flex
          direction="column"
          textAlign={'left'}
          float={'left'}
          mt={4}
         
          columnGap={'5vh'}
          fontWeight={'bold'}
          display={{ base: 'block', md: 'none' }}
        >
          {/* Menu Items for Mobile */}
          <Link to="#home">
              <Text className="nav-link home" >Home</Text>
            </Link>
            <Link to="#about">
              <Text className="nav-link about" mt={'0.5vh'}>About Me</Text>
            </Link>
            <Link to="#skills">
              <Text className="nav-link skills" mt={'0.5vh'}>Skills</Text>
            </Link>
            <Link to="#projects">
              <Text className="nav-link projects" mt={'0.5vh'}>Project</Text>
            </Link>
            <Link to="#contact">
              <Text className="nav-link contact" mt={'0.5vh'}>Contact</Text>
            </Link>
            <Box className="nav-link resume" mt={'0.5vh'}>
              <a href={resume} download={'Mohd-Asim-Resume.pdf'}>
                <Button onClick={handleResumeClick} id="resume-button-1">Resume</Button>
              </a>
            </Box>
            <Box onClick={toggleColorMode} cursor={'pointer'} mt={'0.5vh'}>{theme ? <Icon as={MoonIcon} /> : <Icon as={SunIcon} />}</Box>
          {/* Add more mobile menu items as needed */}
        </Flex>
      </Collapse>
    </Box>
  );
};

export default NewNavbar;
