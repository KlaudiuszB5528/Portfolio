import ProjectCard from "./ProjectCard";

interface Props {
  currentProject: number;
}

const ProjectsSlider = (props: Props) => {
  const { currentProject } = props;

  return (
    <>
      {currentProject === 0 && (
        <ProjectCard
          title="E-shop"
          description="E-commerce shop designed with React, Redux, Typescript, Firebase,TailwindCSS with mobile-first approach."
          image="/eshopsc.png"
          technologies={[
            "react",
            "typescript",
            "redux",
            "tailwindcss",
            "firebase",
          ]}
          liveLink="https://kbiegaczeshop.netlify.app/"
          codeLink="https://github.com/KlaudiuszB5528/E-shop"
        />
      )}
      {currentProject === 1 && (
        <ProjectCard
          title="Your TODOS"
          description="ToDo List app. User can add, delete, and edit tasks or different projects. TODOS are saved in local storage."
          image="/todossc.png"
          technologies={["react", "typescript", "contextAPI", "sass"]}
          liveLink="https://klaudiuszb5528.github.io/Your-TODOS_v2/"
          codeLink="https://github.com/KlaudiuszB5528/Your-TODOS_v2"
        />
      )}
      {currentProject === 2 && (
        <ProjectCard
          title="Tic-tac-toe"
          description="Tic-Tac-Toe game with AI built with Vanilla JS, HTML, and CSS. AI is using minimax algorithm, user can choose between 4 difficulty levels as well as player vs another player."
          image="/tictacsc.png"
          technologies={["vanillajs", "minimax algorithm", "css"]}
          liveLink="https://klaudiuszb5528.github.io/Tic-Tac-Toe/"
          codeLink="https://github.com/KlaudiuszB5528/Tic-Tac-Toe"
        />
      )}
      {currentProject === 3 && (
        <div className="w-screen xl:w-[1200px] h-[400px] sm:h-[450px] xl:h-[500px] mx-auto flex items-center justify-center text-4xl">
          <p className="flex gap-2">
            <a
              href="https://github.com/KlaudiuszB5528"
              target="blank"
              className="underline underline-offset-2"
            >
              Check
            </a>
            My Github for more!
          </p>
        </div>
      )}
    </>
  );
};

export default ProjectsSlider;
