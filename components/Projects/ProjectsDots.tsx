interface Props {
  currentProject: number;
  setCurrentProject: (newProject: number) => void;
}

export default function ProjectsDots(props: Props) {
  const { setCurrentProject, currentProject } = props;
  return (
    <>
      <div
        className={`h-4 w-4 rounded-full border-2 border-white transition-colors duration-300 ${
          currentProject === 0 && "bg-white"
        }`}
        onClick={() => setCurrentProject(0)}
      />
      <div
        className={`h-4 w-4 rounded-full border-2 border-white transition-colors duration-300 ${
          currentProject === 1 && "bg-white"
        }`}
        onClick={() => setCurrentProject(1)}
      />
      <div
        className={`h-4 w-4 rounded-full border-2 border-white transition-colors duration-300 ${
          currentProject === 2 && "bg-white"
        }`}
        onClick={() => setCurrentProject(2)}
      />
      <div
        className={`h-4 w-4 rounded-full border-2 border-white transition-colors duration-300 ${
          currentProject === 3 && "bg-white"
        }`}
        onClick={() => setCurrentProject(3)}
      />
    </>
  );
}
