import { ProjectCards, TitleText } from '../';
import data from '@/assets/data.json';

export const Projects = () => {
  return (
    <section id="projects" className="py-10 px-4 md:px-10">
      <TitleText>Проекты</TitleText>
      <ProjectCards data={data.projects} />
    </section>
  );
};
