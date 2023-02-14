import Avatar from '../img/Perfil.png'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Nycole Ribeiro" />
      <p className="title">Dev Front-End | UI Designer</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">
        Download currículo
      </a>
    </aside>
  )
}

export default Sidebar