import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiPython,
  DiPhp,
  DiGit,
  DiGithubBadge,
  DiPhotoshop
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  {id: 'html', name: 'HTML5', icon: <DiHtml5 />},
  {id: 'css', name: 'CSS3', icon: <DiCss3 />},
  {id: 'javascript', name: 'JavaScript', icon: <DiJavascript1 />},
  {id: 'react', name: 'React', icon: <DiReact />},
  {id: 'python', name: 'Python', icon: <DiPython />},
  {id: 'php', name: 'PHP', icon: <DiPhp />},
  {id: 'git', name: 'Git', icon: <DiGit />},
  {id: 'github', name: 'GitHub', icon: <DiGithubBadge />},
  {id: 'photoshop', name: 'Photoshop', icon: <DiPhotoshop />}
];

const TechnologiesContaineir = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map(tech => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            {tech.name}
          </div>

        ))}
      </div>
    </section>
  )
}

export default TechnologiesContaineir