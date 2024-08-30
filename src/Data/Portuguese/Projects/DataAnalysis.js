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
    projectName: 'Relatório de Faturamento',
    projectDesc: "Este dashboard inclui uma análise da receita acumulada, uma comparação com o desempenho anterior e a meta definida.",
    tags: 'PowerBI',
    availableCode: false,
    code: '',
    availableDeploy: true,
    deploy: 'https://app.powerbi.com/view?r=eyJrIjoiOGE3YTE4NWEtYmNhMS00NDZkLTlmZmYtN2UzYjk1ODI0NGQyIiwidCI6IjljMDAwNGExLTBmOWUtNDFiMi1iYmIxLTAwYzliOGQwNGE2MiIsImMiOjl9',
    image: five,
  },
  {
    id: 4,
    projectName: 'Funcionários e CLientes',
    projectDesc: "Este dashboard administrativo inclui uma análise de vários aspectos relacionados aos funcionários da empresa e à base de clientes.",
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
    projectDesc: 'Foi feita uma análise das tabelas não normalizadas, foram implementadas alterações para normalizá-las, um novo banco de dados e consultas SQL foram desenvolvidas.',
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
    projectDesc: 'Este projeto envolve a busca e manipulação de dados para completar cada desafio usando diferentes bancos de dados relacionais.',
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
    projectDesc: 'Este projeto envolve a busca e manipulação de dados no conhecido banco de dados Northwind usando consultas SQL e MySQL.',
    tags: 'Northwind - SQL',
    availableCode: true,
    code: 'https://github.com/VicSales28/project-mysql-all-for-one',
    availableDeploy: false,
    deploy: 'https://github.dev/VicSales28/project-mysql-all-for-one',
    image: one,
  },
];