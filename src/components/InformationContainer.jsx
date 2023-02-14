import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"
import { IoLogoWhatsapp, IoMailOutline, IoLocationSharp } from "react-icons/io5"

import "../styles/components/informationcontainer.sass"


const information = [
    {name: 'Whatsapp', icon: <IoLogoWhatsapp className="icon"/>, text: '(53)99114-7808'},
    {name: 'Email', icon: <IoMailOutline className="icon"/>, text: 'rpnyck@gmail.com'},
    {name: 'Localização', icon: <IoLocationSharp className="icon"/>, text: 'Rio Grande, RS'}
];

const InformationContainer = () => {
  return (
    <section id="information-container">
        {information.map((info) => (
            <div className="info-card" key={info.name}>
                {info.icon}
                <div>
                    <h3>{info.name}</h3>
                    <p>{info.text}</p>
                </div>
            </div>
        ))}
    </section>
  )
}

export default InformationContainer