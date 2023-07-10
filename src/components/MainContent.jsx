import '../styles/components/maincontent.sass';
import AboutContainer from './AboutContainer';
import ProjectsContainer from './ProjectsContainer';
import TechnoContainer from './TechnoContainer';


const MainContent = () => {
  return (
    <main id='main-content'>
      <AboutContainer/>
      <TechnoContainer/>
      <ProjectsContainer/>
    </main>
  )
}

export default MainContent