import React from 'react';
import '../styles.css';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Stack, Box, Typography } from '@mui/material';

interface IntroProps {
  onAboutClick: () => void;
  onSkillsClick: () => void;
  onWorkExperienceClick: () => void;
  onEducationClick: () => void;
  currentSection: string;
}

const Intro = ({ onAboutClick, onSkillsClick, onWorkExperienceClick, onEducationClick, currentSection }: IntroProps) => {
  const getLinkStyle = (section: string) => {
    return {
      cursor: 'pointer',
      fontWeight: currentSection === section ? 'bold' : 'lighter',
      // color: currentSection === section ? '#11a957' : 'white',
    };
  };

  return (
    <Box display='flex' flexDirection='column' justifyContent='flex-end'>

      <Typography variant='h3'>
        Juan David Sanmartín
      </Typography>
      <Typography variant='h6'>Full-Stack Developer</Typography>

      <Stack spacing={1} direction='row'>
        <Link href='https://www.linkedin.com/in/juan-david-sanmartin-betancur/' target='_blank' rel='noopener noreferrer' style={{ fontSize: '2rem' }}>
          <LinkedInIcon fontSize='inherit' />
        </Link>

        <Link href='https://github.com/jd-sanmartin/' target='_blank' rel='noopener noreferrer' style={{ fontSize: '2rem' }}>
          <GitHubIcon fontSize='inherit' />
        </Link>
      </Stack>

      <Stack spacing={1} direction='row'>
        <Typography variant='subtitle1' style={getLinkStyle('about')} onClick={onAboutClick}>About</Typography>
        <Typography variant='subtitle1' style={getLinkStyle('skills')} onClick={onSkillsClick}>Skills</Typography>
        <Typography variant='subtitle1' style={getLinkStyle('workExperience')} onClick={onWorkExperienceClick}>Experience</Typography>
        <Typography variant='subtitle1' style={getLinkStyle('education')} onClick={onEducationClick}>Education</Typography>
      </Stack>
    </Box>
  );
};

export default Intro;
