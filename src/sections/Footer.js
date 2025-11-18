import '../App.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import '../index.css';


const Footer = () => {
    return (
        <div>
        <footer className="footer">
        <a href="https://github.com/awesomebrownies" target="_blank">
            <FaGithub className="app-header__socials--button"/>
        </a>
        <a href="https://www.linkedin.com/in/evan-brown-927974280/" target="_blank">
            <FaLinkedin className="app-header__socials--button"/>
        </a>
        <a href="mailto:evan.n.brown25@gmail.com">
            <MdEmail className="app-header__socials--button" />
        </a>
        <div style={{display: 'flex', flexDirection: 'row', paddingTop: '7px'}}>
            evan.n.brown25@gmail.com
        </div>
        </footer>
        </div>
    )
}

export default Footer;