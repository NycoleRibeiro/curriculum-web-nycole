import {FaLinkedinIn, FaGithub, FaBehance} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    {name: 'linkedin', icon: <FaLinkedinIn/>, link: 'https://www.linkedin.com/in/nycoleribeiro/'},
    {name: 'github', icon: <FaGithub/>, link: ''},
    {name: 'behance', icon: <FaBehance/>, link: 'https://www.behance.net/nycolepereira'}
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.link} className="social-btn" id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks