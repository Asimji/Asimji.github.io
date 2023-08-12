import React, { useState, useEffect, useContext } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Image,
  Text,
  useDisclosure,
  Button,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, Icon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../images/asim-pic.jpg';
import { ThemeContext } from './context/ThemeProvider';
import resume from '../images/Mohd-Asim-Resume.pdf';

const Navbar = () => {
  const handleResumeClick = () => {
    window.open("https://drive.google.com/file/d/1WxnxEHdjXjJIF6IM8OImQlcdl0GgWB3H/view?usp=sharing", '_blank');
  };

  const { theme, setTheme } = useContext(ThemeContext);
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  if (colorMode === 'light') {
    setTheme(true);
  } else {
    setTheme(false);
  }

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

  return (
    <Box
      id="nav-menu"
      box-shadow=' rgba(0, 0, 0, 0.35) 0px 5px 15px'
      pos="sticky"
      top="0"
      zIndex="sticky"
      bg={isScrolled ? '#F8F8FF' : 'gray100'}
      pl={1}
      color={isScrolled ? 'black' : theme ? 'black' : 'white'}
    >
      <Flex justify={'space-between'} flexDirection={{ base: "row", sm: "column", xs: "column", lg: "column" }} fontSize={'18px'} align={'center'}>

        <Flex mt={5}>
          <Image src={logo} alt="asim" w={50} borderRadius={'50%'} />
          <Text ml={{ xl: 2, base: 0 }} mt={{ xl: 2, base: 0 }} display={{ base: 'none', md: 'block' }}>Mohd Asim</Text>
        </Flex>

        <Flex align="center" justify="space-between" mt={5}>

          <IconButton
            aria-label="Toggle navigation"
            icon={<HamburgerIcon />}
            display={{ base: "block", md: "none" }}
            onClick={onToggle}
          />
          <Box
            display={{ base: isOpen ? "block" : "none", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems={{base: isOpen ? "center" : "none"}}
            flexGrow={{base: isOpen ? 1 : "none"}}
            textAlign={{base: isOpen ? "left" : "none"}}
          >
            <Link to="#home">
              <Text className="nav-link home" ml={{ xl: 0, lg: 0, base: 5 }}>Home</Text>
            </Link>
            <Link to="#about">
              <Text className="nav-link about" ml={{ xl: 5, lg: 5, base: 5 }}>About Me</Text>
            </Link>
            <Link to="#skills">
              <Text className="nav-link skills" ml={{ xl: 5, lg: 5, base: 5 }}>Skills</Text>
            </Link>
            <Link to="#projects">
              <Text className="nav-link projects" ml={{ xl: 5, lg: 5, base: 5 }}>Project</Text>
            </Link>
            <Link to="#contact">
              <Text className="nav-link contact" ml={{ xl: 5, lg: 5, base: 5 }}>Contact</Text>
            </Link>
            <Box className="nav-link resume" ml={{ xl: 5, lg: 5, base: 5 }}>
              <a href={resume} download={'Mohd-Asim-Resume.pdf'}>
                <Button onClick={handleResumeClick} id="resume-button-1">Resume</Button>
              </a>
            </Box>
            <Box onClick={toggleColorMode} cursor={'pointer'} ml={{ xl: 5, lg: 5, base: 5 }}>{theme ? <Icon as={MoonIcon} /> : <Icon as={SunIcon} />}</Box>
          </Box>
        </Flex>
      </Flex>
      <Box borderBottom={'1px solid gray'} mt={5}></Box>
    </Box>
  );
}

export default Navbar;
