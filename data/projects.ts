import type { Project } from '~/types/data'

export const PROJECTS: Project[] = [
  {
    type: 'work',
    title: 'Ecommerce Product Cart',
    description:
      "In this challenge, you'll build a beautiful product page. We'll be putting your JS skills to the test with a lightbox product gallery and cart functionality!",
    imgSrc: 'https://ecommerce-product-cart878.netlify.app/images/image-product-1.jpg',
    repo: 'addier94/ecommerce-product',
    builtWith: ['React', 'Typescript', 'TailwindCSS'],
  },
  {
    type: 'self',
    title: 'Kanban Task',
    imgSrc:
      'https://raw.githubusercontent.com/addier94/kanban-task/refs/heads/main/public/preview.jpg',
    repo: 'addier94/kanban-task',
    builtWith: ['NextJS', 'Typescript', 'TailwindCSS'],
  },
]
