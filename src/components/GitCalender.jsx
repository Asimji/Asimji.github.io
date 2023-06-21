
import { Box, Center, Heading } from '@chakra-ui/react';
import React from 'react';
import GitHubCalendar from 'react-github-calendar';



const GitCalendar = () => {
    
    return <Box mt={10} >
        <Heading>My GitHub Calendar</Heading>
        <Center mt={10}>

      <GitHubCalendar username="Asimji" />
        </Center>
    </Box>
}
  export default GitCalendar