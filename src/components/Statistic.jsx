import { Box, Center, Heading, Image } from '@chakra-ui/react'
import React, { useContext } from 'react'
import logo1 from "../images/statistic1.png"
import logo2 from "../images/statistic2.png"
import { ThemeContext } from './context/ThemeProvider'

const Statistic = () => {
    const {theme}=useContext(ThemeContext)
  return (
    <Box mt={10} mb={20} style={theme?{color:'black'}:{color:'white'}}>
        <Box  id="github-stats-card">
            <Center mb={10}>
                <Heading id="github-top-langs">My Statistics</Heading>
            </Center>
            <Box  w={1000} ml={{xl:200,base:0}} h={400}>

            <Image  id="github-streak-stats" src={logo1} w={'100%'} h={'100%'} />
            </Box>
        </Box>
        <Box  mt={20}>
            <Center mb={10}>
                <Heading>My Github Calender</Heading>
            </Center>
            <Box  w={1000} ml={{xl:200,base:0}} h={400}>
            <Image src={logo2} w={'100%'} h={'100%'}/>

            </Box>
        </Box>
      
    </Box>
  )
}
export default Statistic
