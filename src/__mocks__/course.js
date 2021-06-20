import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: 'Advanced Database Design is fundamental course for masters degree.',
    media: '/static/images/products/product_1.png',
    title: 'Advanced Database Design',
    courseCode: 'CS-594'
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description: 'Software Engineering  is essential course for the computer science.',
    media: '/static/images/products/product_2.png',
    title: 'Software Engineering',
    courseCode: 'CS-625'
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description: 'Algorithms are the essential way of creating software.',
    media: '/static/images/products/product_3.png',
    title: 'Algorithms ',
    courseCode: 'CS-857'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Artificial Intelligence is an on-demand.',
    media: '/static/images/products/product_4.png',
    title: 'Artificial Intelligence ',
    courseCode: 'CS-406'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Project Management is also essential part.',
    media: '/static/images/products/product_5.png',
    title: 'Project Management',
    courseCode: 'HM-835'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Machine Learning is going to be a great trend .',
    media: '/static/images/products/product_6.png',
    title: 'Machine Learning',
    courseCode: 'MT-835'
  }
];
