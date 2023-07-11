import '../styles/components/maincontent.sass';
import AboutContainer from './AboutContainer';
import PreviewProjects from './PreviewProjects';
import ProjectsContainer from './ProjectsContainer';
import TechnoContainer from './TechnoContainer';


const MainContent = () => {
  return (
    <main id='main-content'>
      <AboutContainer/>
      <TechnoContainer/>
      <ProjectsContainer/>
      <PreviewProjects/>
    </main>
  )
}

export default MainContent