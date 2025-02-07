import { ProjectCard } from './project-card';

type Props = {
  data: {
    title: string;
    img: string;
    link: string;
    gitLink: string;
    description: string;
    stack: string[];
    backendGitLink?: string;
    backendStack?: string[];
  }[];
};

export const ProjectCards = ({ data }: Props) => {
  return (
    <div className="flex flex-wrap gap-5 py-5 px-1 md:px-5">
      {data.map((item, index) => (
        <ProjectCard
          title={item.title}
          img={item.img}
          link={item.link}
          gitLink={item.gitLink}
          stack={item.stack}
          description={item.description}
          backendGitLink={item.backendGitLink}
          backendStack={item.backendStack}
          key={index}
        />
      ))}
    </div>
  );
};
