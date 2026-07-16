import { Technology } from '@/types/Technology'

const techs: Technology[] = [
  // Backend / Core
  { code: 'dotnetcore', short: '.NET', full: '.NET / ASP.NET Core' },
  { code: 'nodejs', short: 'Node.js', full: 'Node.js' },
  { code: 'express', short: 'Express', full: 'Express.js' },
  { code: 'mysql', short: 'MySQL', full: 'MySQL' },
  { code: 'postgresql', short: 'PostgreSQL', full: 'PostgreSQL' },
  { code: 'mongodb', short: 'MongoDB', full: 'MongoDB' },
  { code: 'microsoftsqlserver', short: 'MsSQL', full: 'Microsoft SQL Server' },

  // Frontend
  { code: 'react', short: 'React.js', full: 'React.js' },
  { code: 'nextjs', short: 'Next.js', full: 'Next.js' },
  { code: 'html5', short: 'HTML', full: 'HTML5' },
  { code: 'css3', short: 'CSS', full: 'CSS3' },
  { code: 'sass', short: 'Sass', full: 'Sass/SCSS' },
  { code: 'tailwindcss', short: 'Tailwind', full: 'Tailwind CSS' },

  // Languages
  { code: 'javascript', short: 'JS', full: 'JavaScript' },
  { code: 'typescript', short: 'TS', full: 'TypeScript' },
  { code: 'csharp', short: 'C#', full: 'C#' },

  // Tools
  { code: 'vscode', short: 'VS Code', full: 'Visual Studio Code' },
  { code: 'visualstudio', short: 'VS', full: 'Visual Studio' },
  { code: 'git', short: 'Git', full: 'Git' },
  { code: 'github', short: 'GitHub', full: 'GitHub' },
  { code: 'docker', short: 'Docker', full: 'Docker' },
  { code: 'postman', short: 'Postman', full: 'Postman' },
  { code: 'figma', short: 'Figma', full: 'Figma' },
  { code: 'npm', short: 'NPM', full: 'NPM' },
  { code: 'vitejs', short: 'Vite', full: 'Vite' },
  { code: 'webpack', short: 'Webpack', full: 'Webpack' },
]
enum TechIconVariant {
  plain = 'plain',
  original = 'original',
  line = 'line',
}
export { techs, TechIconVariant }
