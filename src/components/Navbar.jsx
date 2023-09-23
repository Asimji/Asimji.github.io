import React from 'react'

import Style from './Navbar.module.css';

import { useColorMode, useDisclosure } from '@chakra-ui/react';

import {  Icon, MoonIcon, SunIcon } from "@chakra-ui/icons";

import { HStack, Box, Text, Button, IconButton, Link as ChakraLink } from '@chakra-ui/react'


import { Link as ScrollLink } from "react-scroll";


import { NavDrawer } from './NavDrawer';
import { HamburgerIcon } from '@chakra-ui/icons'

import { useRef } from 'react';



import { useContext } from 'react';
import { useEffect } from 'react';
import { ThemeContext } from './context/ThemeProvider';


const Navbar_options = [{ text: 'Home', id: 'home', class: 'nav-link home' }, { text: 'About', id: 'about', class: 'nav-link about' }, { text: 'Skills ', id: 'skills', class: 'nav-link skills' }, { text: 'Projects', id: 'projects', class: 'nav-link projects' }, { text: 'Contact', id: 'contact', class: "nav-link contact" }];


const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const { colorMode, toggleColorMode } = useColorMode();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { current } = useRef([]);

  useEffect(()=>{
    if (colorMode === 'light') {
        setTheme(true)
          } else {
            setTheme(false);
          }
  })


  const Active_Link = (e, index) => {


    current.forEach((el, i) => {

      if (index === i) {

        el.classList.add(Style.active);

      } else {

        el.classList.remove(Style.active);

      }

    })


  }


  const OpenPDF = () => {

    const url = `https://drive.google.com/file/d/1zdZOFLDgnSyMmQiq8x0mlb_FVV84Sy1G/view`
    window.open(url,'_blank');



  }






  return (

    <Box zIndex={'3'} minW='280px' mb='20px' boxShadow={'2px 2px 5px black'} position={'sticky'} top='0' bg='rgb(1, 23, 39);' color='white' as='nav' id="nav-menu" p='2'>

      <HStack m='auto' w={{ base: '95%', '587px': '90%', '1120px': '80%' }} justify='space-between'>

        <IconButton size={['sm', 'md']} mr='5px' display={{ base: 'block', '836px': 'none' }} _hover={{ background: 'rgb(14, 60, 96);' }} bg='rgb(7, 40, 66);' onClick={onOpen} variant='none' icon={<HamburgerIcon />}></IconButton>

        {/* <Image _hover={{ cursor: 'pointer' }} w='50px' src={asim} borderRadius={'50%'}></Image> */}

        <Box onClick={toggleColorMode} cursor={'pointer'} ml={5}>{theme ? <Icon as={MoonIcon} /> : <Icon as={SunIcon} />}</Box>

        <HStack display={{ base: 'none', md: 'flex' }}  w={{ 'base': '450px', '966px': '500px' }} justify='space-between'>

          {Navbar_options.map((el, i) => {


            return <ScrollLink className={el.class} key={Math.random()} to={el.id} smooth={true} duration={300}>

              <Text className={i === 0 ? Style.active : ''} ref={(el) => current[i] = el} onClick={(e) => Active_Link(e, i)} _hover={{ cursor: 'pointer', color: 'rgb(0, 255, 162)', borderBottom: '2px solid', borderColor: 'rgb(0, 255, 162)' }} px='2' py='1' fontWeight={600}>{el.text}</Text>


            </ScrollLink>



          })}

        </HStack>

        

        <Button onClick={OpenPDF} id="resume-button-1" _hover={{ background: 'rgb(115, 249, 200);' }} className="nav-link resume" size={['sm', 'md']} variant='none' bg='rgb(0, 255, 162);' border='1px solid' boxShadow={'1px 1px 5px'} color='black'><ChakraLink id="resume-link-1" isExternal href='Mohd-Asim-Resume.pdf' download="Mohd-Asim-Resume.pdf" _hover={{ textDecoration: 'none' }}>Resume</ChakraLink></Button>

       

      </HStack>


      <NavDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />





    </Box>

  )
}

export default Navbar