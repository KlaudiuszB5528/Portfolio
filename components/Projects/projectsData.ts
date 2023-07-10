export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  codeLink: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "E-shop",
    description:
      "E-commerce shop designed with React, Redux, Typescript, Firebase,TailwindCSS with mobile-first approach.",
    image: "/eshopsc.png",
    technologies: ["react", "typescript", "redux", "tailwindcss", "firebase"],
    liveLink: "https://kbiegaczeshop.netlify.app/",
    codeLink: "https://github.com/KlaudiuszB5528/E-shop",
  },
  {
    id: 2,
    title: "Your TODOS",
    description:
      "ToDo List app. User can add, delete, and edit tasks or different projects. TODOS are saved in local storage.",
    image: "/todossc.png",
    technologies: ["react", "typescript", "contextAPI", "sass"],
    liveLink: "https://klaudiuszb5528.github.io/Your-TODOS_v2/",
    codeLink: "https://github.com/KlaudiuszB5528/Your-TODOS_v2",
  },
  {
    id: 3,
    title: "Tic-tac-toe",
    description:
      "Tic-Tac-Toe game with AI built with Vanilla JS, HTML, and CSS. AI is using minimax algorithm, user can choose between 4 difficulty levels as well as player vs another player.",
    image: "/tictacsc.png",
    technologies: ["vanillajs", "minimax algorithm", "css"],
    liveLink: "https://klaudiuszb5528.github.io/Tic-Tac-Toe/",
    codeLink: "https://github.com/KlaudiuszB5528/Tic-Tac-Toe",
  },
];
