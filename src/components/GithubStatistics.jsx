import React from 'react'
import { Box,  Grid, Heading, Image } from '@chakra-ui/react'

const GithubStatistics = () => {



  return (
    <Box>
        <Heading>Github Statistics</Heading>

        <Grid templateColumns={{xl:'repeat(3,1fr)',lg:'repeat(3,1fr)',base:'repeat(1,1fr)'}} mt={10}>
            <Box   h={'30vh'}>
                <Image id="github-streak-stats" src='https://github-readme-streak-stats.herokuapp.com?user=Asimji' h={'100%'}/>
                </Box>
            <Box  h={'30vh'}>
     <Image  id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Asimji&theme=light" w={'100%'} h='100%'/>
            </Box>
            <Box  >
                <Image id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=Asimji"/>
            </Box>
        </Grid>
        
    </Box>
  )
}

export default GithubStatistics
