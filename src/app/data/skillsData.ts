export type Skill = {
  name: string
  type: 'framework' | 'language' | 'database' | 'other'
}

export const skillsData = [
  {
    name: 'Javascript',
    type: 'language'
  },
  {
    name: 'Typescript',
    type: 'language'
  },
  {
    name: 'C#',
    type: 'language'
  },
  {
    name: 'Python',
    type: 'language'
  },
  {
    name: 'Java',
    type: 'language'
  },
  {
    name: 'HTML / JSX',
    type: 'language'
  },
  {
    name: 'CSS / SCSS',
    type: 'language'
  },
  {
    name: 'Nest Js',
    type: 'framework'
  },
  {
    name: 'Node Js',
    type: 'framework'
  },
  {
    name: '.NET',
    type: 'framework'
  },
  {
    name: 'Next Js',
    type: 'framework'
  },
  {
    name: 'React',
    type: 'framework'
  },
  {
    name: 'Vue',
    type: 'framework'
  },
  {
    name: 'SQL Server',
    type: 'database'
  },
  {
    name: 'PostgreSQL',
    type: 'database'
  },
  {
    name: 'MongoDB',
    type: 'database'
  },
  {
    name: 'Redis',
    type: 'database'
  },
  {
    name: 'AWS',
    type: 'other'
  },
  {
    name: 'Docker',
    type: 'other'
  },
  {
    name: 'Git',
    type: 'other'
  },
  {
    name: 'Rest API',
    type: 'other'
  },
  {
    name: 'Redux',
    type: 'other'
  },
  {
    name: 'Pinia',
    type: 'other'
  },
  {
    name: 'Cypress',
    type: 'other'
  },
  {
    name: 'Jest',
    type: 'other'
  },
  {
    name: 'Design Patterns',
    type: 'other'
  },
] satisfies Skill[]
