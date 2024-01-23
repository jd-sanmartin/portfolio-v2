export type WorkExperience = {
  name: string,
  position: string,
  description: string,
  skills: string[],
  startDate: string,
  endDate: string,
  url: string
}

export const workExperiences = [
  {
    name: 'Votix',
    position: 'Full-Stack Web Developer',
    description: 'Collaborated and led the development of a drone fleet management platform in all the stages of the product\'s life cycle.',
    skills: ['C# / .NET', 'Javascript', 'Python', 'Entity Framework'],
    startDate: '04/2019',
    endDate: '06/2022',
    url: 'https://votix.com/'
  },
  {
    name: 'Astound Commerce',
    position: 'Web Developer',
    description: 'Worked on the development of e-commerce platforms',
    skills: ['Typescript', 'Javascript', 'Node js', 'Salesforce Commerce Cloud'],
    startDate: '07/2022',
    endDate: '10/2022',
    url: 'https://astoundcommerce.com/'
  },
  {
    name: 'Magneto 365',
    position: 'Full-Stack Web Developer',
    description: 'Refactored and hugely optimized the performance of web applications and processes within the company, implementing clean code practices and design patterns.',
    skills: ['Nest Js', 'Typescript', 'Vue Js', 'PostgreSQL'],
    startDate: '04/2023',
    endDate: 'Present',
    url: 'https://www.magneto365.com/home/'
  },
] satisfies WorkExperience[]