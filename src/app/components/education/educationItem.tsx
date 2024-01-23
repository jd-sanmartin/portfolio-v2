import { Education } from "@/app/data/educationData"
import { Box, Chip, Paper, Stack, Typography } from "@mui/material"
import Link from "next/link"

type EducationItemProps = {
  education: Education
}

export const EducationItem = ({ education }: EducationItemProps) => {
  const { name, date, place } = education
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
        <Typography variant='overline'>{date}</Typography>
      </Box>
      <Box display='flex' flexDirection='column'>
        <Typography variant='h5'>
          {name}
        </Typography>
        <Typography variant="subtitle1" fontWeight='bold'>{place}</Typography>
      </Box>
    </Paper>
  );
}