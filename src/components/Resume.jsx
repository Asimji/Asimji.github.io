import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import resume from "../images/Mohd-Asim-Resume.pdf"
// C:\Users\Lenovo\OneDrive\Desktop\portfolio\asim-portfolio\src\images\Mohd-Asim-Resume.pdf

const Resume = () => {
  // const resumeUrl = '../images/Mohd-Asim-Resume.pdf';
  const handleResumeClick = () => {
    window.open("https://drive.google.com/file/d/1J-iSjeHXgHdyWp-SXSn38NJh9vI2O7Bd/view?usp=drive_link",'_blank');
  };
  return (
    <Box >
    <a href={resume} download={'Mohd-Asim-resume.pdf'}>

    <Button onClick={handleResumeClick} id="resume-button-1">Resume</Button>
    </a>
      
    </Box>
  )
}

export default Resume
