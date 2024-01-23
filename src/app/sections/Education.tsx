import { Stack, Typography } from "@mui/material";
import { educationData } from "../data/educationData";
import { EducationItem } from "../components/education/educationItem";

const Education = () => {
  return (
    <>
      <Typography variant='h4'>Education and Certificates</Typography>
      <Stack spacing={1}>
        {
          educationData
            .map((education, index) => (
              <EducationItem key={index} education={education} />
            ))
        }
      </Stack>
    </>
  );
};

export default Education;

