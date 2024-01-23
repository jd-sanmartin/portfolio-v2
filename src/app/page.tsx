"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Grid, ThemeProvider } from "@mui/material";
import defaultTheme from "./theme/defaultTheme";
import useOnScreen from "./hooks/useOnScreen";

import Intro from "./sections/Intro";
import Skills from "./sections/Skills";
import WorkExperience from "./sections/WorkExperience";
import Education from "./sections/Education";
import About from "./sections/About";

import './styles.css';

const sectionStyles = {
  display: 'flex',
  flexDirection: 'column',
};

// TODO: Organizar
const backgroundMap = {
  about: 'mesh-gradient-01',
  skills: 'mesh-gradient-02',
  workExperience: 'mesh-gradient-02',
  education: 'mesh-gradient-02',
};

export default function Home() {
  const [visibleLayer, setVisibleLayer] = useState<'about' | 'skills' | 'workExperience' | 'education'>('about');

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const workExperienceRef = useRef(null);
  const educationRef = useRef(null);

  const isAboutVisible = useOnScreen(aboutRef);
  const isSkillsVisible = useOnScreen(skillsRef);
  const isWorkExperienceVisible = useOnScreen(workExperienceRef);
  const isEducationVisible = useOnScreen(educationRef);

  useEffect(() => {
    if (isAboutVisible) {
      setVisibleLayer('about');
    } else if (isSkillsVisible) {
      setVisibleLayer('skills');
    } else if (isWorkExperienceVisible) {
      setVisibleLayer('workExperience');
    } else if (isEducationVisible) {
      setVisibleLayer('education');
    }
  }, [isAboutVisible, isSkillsVisible, isWorkExperienceVisible, isEducationVisible])

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box className={backgroundMap[visibleLayer]}>
        <Box sx={{ maxHeight: '100vh', display: 'flex', padding: 3 }}>
          <Box sx={{ padding: 2, display: 'flex', width: '100%', border: '4px solid white' }}>
            <Grid
              container
              sx={{ flexDirection: 'row' }}
              overflow={{ xs: 'auto', sm: 'auto', md: 'none' }}>
              <Grid item xs={12} md={6} height='100%'>
                <Box id='box-1' display='flex' style={{ height: '100%' }}>
                  <Intro
                    onAboutClick={() => scrollToSection(aboutRef)}
                    onSkillsClick={() => scrollToSection(skillsRef)}
                    onWorkExperienceClick={() => scrollToSection(workExperienceRef)}
                    onEducationClick={() => scrollToSection(educationRef)}
                    currentSection={visibleLayer}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={6} height='100%'>
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '30vh', overflow: { xs: 'none', md: 'auto' }}}>
                  <Box sx={sectionStyles} ref={aboutRef}><About /></Box>
                  <Box sx={sectionStyles} ref={skillsRef}><Skills /></Box>
                  <Box sx={sectionStyles} ref={workExperienceRef}><WorkExperience /></Box>
                  <Box sx={sectionStyles} ref={educationRef}><Education /></Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
