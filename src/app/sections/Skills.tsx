import { skillsData } from '../data/skillsData';
import { Box, Typography, Stack, Chip } from '@mui/material';

const Skills = () => {
  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography variant='h4'>Skills</Typography>

      <div>
        <Typography variant='h6'>Frameworks</Typography>
        <Stack display='flex' useFlexGap flexWrap='wrap' direction='row' spacing={1}>
          {skillsData.filter(skill => skill.type === 'framework').map(({ name }, index) => (
            <Chip color='primary' key={index} label={name} />
          ))}
        </Stack>
      </div>

      <div>
        <Typography variant='h6'>Languages</Typography>
        <Stack display='flex' useFlexGap flexWrap='wrap' direction='row' spacing={1}>
          {skillsData.filter(skill => skill.type === 'language').map(({ name }, index) => (
            <Chip color='primary' key={index} label={name} />
          ))}
        </Stack>
      </div>

      <div>
        <Typography variant='h6'>Databases</Typography>
        <Stack display='flex' useFlexGap flexWrap='wrap' direction='row' spacing={1}>
          {skillsData.filter(skill => skill.type === 'database').map(({ name }, index) => (
            <Chip color='primary' key={index} label={name} />
          ))}
        </Stack>
      </div>

      <div>
        <Typography variant='h6'>Others</Typography>
        <Stack display='flex' useFlexGap flexWrap='wrap' direction='row' spacing={1}>
          {skillsData.filter(skill => skill.type === 'other').map(({ name }, index) => (
            <Chip color='primary' key={index} label={name} />
          ))}
        </Stack>
      </div>

    </Box>
  );
};

export default Skills;
