import one from '../../../Styles/Assets/Pictures/PNG/DataAnalysis/northwind.png';
import two from '../../../Styles/Assets/Pictures/PNG/DataAnalysis/sql-challenges.png';
import three from '../../../Styles/Assets/Pictures/PNG/DataAnalysis/spotifyclone.png';
import four from '../../../Styles/Assets/Pictures/PNG/DataAnalysis/workforce-and-customers.gif';
import five from '../../../Styles/Assets/Pictures/PNG/DataAnalysis/revenue.gif';
// import six from '';

export const analisysData = [
  // {
  //   id: 6,
  //   projectName: '',
  //   projectDesc: '',
  //   tags: '',
  //   code: '',
  //   deploy: '',
  //   image: six,
  // },
  {
    id: 5,
    projectName: 'Revenue Report',
    projectDesc: "This revenue dashboard includes an analysis of accumulated revenue, a comparison with previous performance and the defined target.",
    tags: 'PowerBI',
    availableCode: false,
    code: '',
    availableDeploy: true,
    deploy: 'https://app.powerbi.com/view?r=eyJrIjoiOGE3YTE4NWEtYmNhMS00NDZkLTlmZmYtN2UzYjk1ODI0NGQyIiwidCI6IjljMDAwNGExLTBmOWUtNDFiMi1iYmIxLTAwYzliOGQwNGE2MiIsImMiOjl9',
    image: five,
  },
  {
    id: 4,
    projectName: 'Workforce and Customers',
    projectDesc: "This administrative dashboard includes an analysis of various aspects related to company's employees and the customer base.",
    tags: 'PowerBI',
    availableCode: false,
    code: '',
    availableDeploy: true,
    deploy: 'https://app.powerbi.com/view?r=eyJrIjoiZDVkOTA5NjMtZjBjMS00OGU5LWFjZGMtNjU4NTM2MDU0MWQzIiwidCI6IjljMDAwNGExLTBmOWUtNDFiMi1iYmIxLTAwYzliOGQwNGE2MiIsImMiOjl9',
    image: four,
  },
  {
    id: 3,
    projectName: 'One for All',
    projectDesc: 'An analysis of non-normalized tables was done, changes to normalize them were implemented, a new database and SQL queries were developed.',
    tags: 'Database Normalization - SQL',
    availableCode: true,
    code: 'https://github.com/VicSales28/project-mysql-one-for-all',
    availableDeploy: false,
    deploy: 'https://github.dev/VicSales28/project-mysql-one-for-all',
    image: three,
  },
  {
    id: 2,
    projectName: 'SQL Challenges',
    projectDesc: 'This project involves searching and manipulating data to complete each challenge using different SQL databases.',
    tags: 'Docker - SQL',
    availableCode: true,
    code: 'https://github.com/VicSales28/SQL-challenges',
    availableDeploy: false,
    deploy: 'https://github.dev/VicSales28/SQL-challenges',
    image: two,
  },
  {
    id: 1,
    projectName: 'All for One ',
    projectDesc: 'This project involves searching and manipulating data in the well-known Northwind database using SQL queries and MySQL.',
    tags: 'Northwind - SQL',
    availableCode: true,
    code: 'https://github.com/VicSales28/project-mysql-all-for-one',
    availableDeploy: false,
    deploy: 'https://github.dev/VicSales28/project-mysql-all-for-one',
    image: one,
  },
];