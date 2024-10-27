import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.jpg";
import Work5 from "../../assets/work5.jpg";

import ImgTcc from "../../assets/ProjectsImage/TccProject.png";
import ImgFitness from "../../assets/ProjectsImage/FitnessImg.png";
import ImgTccAluno from "../../assets/ProjectsImage/ProjectTccAluno.png";
import Comidas from "../../assets/ProjectsImage/Comidas.png";
import Todo from "../../assets/ProjectsImage/Todo.png";
import ImgMorais from "../../assets/ProjectsImage/ProjetosMorais.png";

const language = localStorage.getItem("language");

export const projectsData = [
  {
    id: 2,

    image: ImgMorais,
    title:
      language === "Portuguese"
        ? "Morais Transportes WebSite - Demostração Web"
        : "Morais Transportes WebSite - Web Demonstration",

    category: language === "Portuguese" ? "Sites" : "Web",
    about:
      language === "Portuguese"
        ? "Morais Transportes é um projeto freelancer para a empresa Morais Transportes, envolvendo o desenvolvimento de um site de propaganda."
        : "Morais Transportes is a freelance project for Morais Transportes company, involving the development of an advertising website.",
  },
  {
    id: 5,
    image: ImgTcc,
    title:
      language === "Portuguese"
        ? "Design de Tcc - Design"
        : "Final Paper Design - Design",

    category: language === "Portuguese" ? "Design" : "Design",
  },
  {
    id: 4,
    image: ImgFitness,
    title:
      language === "Portuguese"
        ? "Fitness App - Design"
        : "Fitness App - Design",

    category: language === "Portuguese" ? "Design" : "Design",
  },
  {
    id: 6,
    image: ImgTccAluno,
    title:
      language === "Portuguese"
        ? "Design de Tcc - Design"
        : "Final Paper Design - Design",
    category: language === "Portuguese" ? "Design" : "Design",
  },
  {
    id: 7,
    image: Comidas,
    title: language === "Portuguese" ? "Receitas - App" : "Revenues - App",
    category: language === "Portuguese" ? "Aplicativos" : "App",
    about:
      language === "Portuguese"
        ? "O aplicativo Receitas oferece uma grande variedade de receitas exóticas, com mais de 200 opções diferentes para preparar em casa, apresentando um passo a passo detalhado. Ele inclui receitas de aves, pratos para almoço, jantar, sobremesas e muitas outras delícias."
        : "The Recipes app offers a wide variety of exotic recipes, with over 200 different options to prepare at home, featuring detailed step-by-step instructions. It includes recipes for poultry, lunch, dinner, desserts, and many other delicious dishes.",
  },
  {
    id: 8,
    image: Todo,
    title: "To Do App - App",
    category: language === "Portuguese" ? "Aplicativos" : "App",
    about:
      language === "Portuguese"
        ? "O To Do App é um aplicativo projetado para gerenciar todas as suas tarefas diárias. Com ele, você pode adicionar novas tarefas, marcar as concluídas e excluí-las quando necessário. Com o To Do, você terá todas as suas tarefas organizadas de forma eficiente."
        : "The To Do App is designed to manage all your daily tasks. With it, you can add new tasks, mark them as completed, and delete them when necessary. With To Do, you will have all your tasks organized efficiently.",
  },
];

export const projectsNav = [
  {
    name: language === "Portuguese" ? "Todos" : "All",
  },
  {
    name: language === "Portuguese" ? "Sites" : "Web",
  },
  {
    name: language === "Portuguese" ? "Aplicativos" : "App",
  },
  {
    name: language === "Portuguese" ? "Design" : "Design",
  },
];
