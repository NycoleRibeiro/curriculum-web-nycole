import AboutContainer from './AboutContainer'
import TechnologiesContaineir from './TechnologiesContaineir'
import ProjectsContainer from './ProjectsContainer'

import '../styles/components/maincontent.sass'

const MainContent = () => {
  return (
    <div id="main-content">
      <AboutContainer />
      <TechnologiesContaineir />
      <ProjectsContainer />
    </div>
  )
}

export default MainContent