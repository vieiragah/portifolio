import { DiJsBadge, DiReact, DiMongodb, DiNodejsSmall, DiSass } from "react-icons/di";
import { SiStyledcomponents, SiTypescript } from "react-icons/si"
import { BsGit } from "react-icons/bs"

import "../styles/components/technocontainer.sass";

const technologies = [
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node", icon: <DiNodejsSmall/> },
  { id: "mongo", name: "MongoDB", icon: <DiMongodb/> },
  { id: "ts", name: "TypeScript", icon: <SiTypescript/> },
  { id: "sass", name: "Sass", icon: <DiSass/> },
  { id: "styledcomp", name: "Styled components", icon: <SiStyledcomponents /> },
  { id: "git", name: "Git", icon: <BsGit/> },
];

const TechnoContainer = () => {
  return (
    <section className="techno-container">
      <h2>Tecnologias</h2>
      <div className="techno-grid">
        {technologies.map((tech) => (
          <div className="techno-card" id={tech.id} key={tech.name}>
            {tech.icon}
            <div className="techno-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnoContainer;
