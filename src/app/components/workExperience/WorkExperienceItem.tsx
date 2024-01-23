import { WorkExperience } from "@/app/data/workExperienceData"
import { Box, Chip, Paper, Stack, Typography } from "@mui/material"
import OpenInNewSharpIcon from '@mui/icons-material/OpenInNewSharp';
import Link from "next/link"

type WorkExperienceItemProps = {
  workExperience: WorkExperience
}

export const WorkExperienceItem = ({ workExperience }: WorkExperienceItemProps) => {
  const { name, url, position, description, skills, startDate, endDate } = workExperience
  return (
    <Paper
      variant="outlined"
      square
      sx={{
        display: 'flex',
        gap: 3,
        p: 2,
        backgroundColor: 'transparent',
        color: 'white',
        border: '1px white solid',
        cursor: 'pointer',
        transition: 'background-color 0.6s ease-in-out',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
        }
      }}>
      <Box display='flex' flexDirection='column'>
        <Typography variant='overline'>{startDate}</Typography>
        <Typography variant='overline'>{endDate}</Typography>
      </Box>
      <Box display='flex' flexDirection='column'>
        <Link href={url} target='_blank' rel='noopener noreferrer'>
          <Typography variant='h5' sx={{ ':hover': { textDecoration: 'underline' } }}>
            {name} <OpenInNewSharpIcon fontSize='small' />
          </Typography>
        </Link>
        <Typography variant="subtitle1" fontWeight='bold'>{position}</Typography>
        <Typography variant="caption">{description}</Typography>
        <Stack display='flex' useFlexGap flexWrap='wrap' direction='row' spacing={1} sx={{ mt: 1 }}>
          {
            skills.map((skill, index) => (
              <Chip color='primary' key={index} label={skill} />
            ))
          }
        </Stack>
      </Box>
    </Paper>
  );
}