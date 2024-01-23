import { workExperiences } from '../data/workExperienceData';
import { WorkExperienceItem } from '../components/workExperience/WorkExperienceItem';
import { Stack, Typography } from '@mui/material';

const WorkExperience = () => {
  return (
      <>
        <Typography variant='h4'>Experience</Typography>
        <Stack spacing={1}>
          {
            workExperiences
              .sort((a, b) => {
                // MM/YYYY
                const [month1, year1] = a.startDate.split('/')
                const [month2, year2] = b.startDate.split('/')

                const dateA = new Date(+year1, +month1, 1);
                const dateB = new Date(+year2, +month2, 1);

                return dateA.getTime() < dateB.getTime() ? 1 : -1;
              })
              .map((workExperience, index) => (
                <WorkExperienceItem key={index} workExperience={workExperience} />
              ))
          }
        </Stack>
      </>
  );
};

export default WorkExperience;

