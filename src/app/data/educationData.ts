export type Education = {
  name: string,
  date: string,
  place: string,
}

export const educationData = [
  {
    name: 'Bachelor\'s Degree in Information Systems',
    place: 'Instituto Tecnológico Metropolitano',
    date: '2023'
  },
  {
    name: 'Cloud Computing Introduction (AWS Practitioner)',
    place: 'Instituto Tecnológico Metropolitano',
    date: '2023'
  },
  {
    name: 'EF SET English Certificate 77/100 (C2 Proficient)',
    place: 'EF SET',
    date: '2022',
  },
  {
    name: 'The Modern React Bootcamp (Hooks, Context, NextJS, Router)',
    place: 'Udemy',
    date: '2021',
  },
] satisfies Education[]