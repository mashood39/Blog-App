import '../styles/Footer.css'
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
      <div className="icons">
        <FiInstagram className='icon' />
        <FaLinkedinIn className='icon'/>
      </div>
    </div>
  )
}

export default Footer
