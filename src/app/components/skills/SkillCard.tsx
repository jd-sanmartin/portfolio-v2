"use client";

import Image from 'next/image'
import { Paper, Grid, Box, Typography } from "@mui/material";
import { Skill } from '@/app/sections/Skills';

interface SkillCardProps {
  skill: Skill
}

export default function SkillCard({ skill }: SkillCardProps) {
  const { name, icon, color, level } = skill
  const iconPath = `/icons/${icon}`

  return (
    <Paper square sx={{ padding: '1rem 1rem', height: '100%', backgroundColor: 'transparent', border: '1px solid white' }}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Box>
            <Image src={iconPath} alt={icon} width={50} height={50} />
          </Box>
        </Grid>
        <Grid item xs>
          <Box>
            <Typography color='white' variant='h6'>{name}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}
