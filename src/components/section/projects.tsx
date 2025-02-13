import { ProjectCards, TitleText } from '../';
import data from '@/assets/data.json';

export const Projects = () => {
  return (
    <section id="projects" className="px-4 md:px-10 mx-auto w-full">
      <TitleText className="text-center my-20">Мои проекты</TitleText>
      <ProjectCards data={data.projects} />
    </section>
  );
};
