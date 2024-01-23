
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Typography variant='h6' mb={2}>
        Full-Stack Web Developer with over {new Date().getFullYear() - 2019} years of experience in developing and designing web applications with knowledge in React, Vue, C#, and Nest Js.
      </Typography>

      <Typography variant='h6' mb={2}>
        An analytical person and a team player who is wholly focused on client satisfaction and event success.
      </Typography>

      <Typography variant='h6'>
        I am a very responsible and committed person with high attention to detail who always looks for adding value to the products I work on.
      </Typography>
    </Box>
  );
};

export default About;
