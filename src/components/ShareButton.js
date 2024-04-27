import '../styles/ShareButton.css'
import { FiShare2 } from "react-icons/fi";

function ShareButton() {
  const handleShare = async () => {
    try {
      const currentUrl = window.location.href;
      await navigator.share({ url: currentUrl });
      console.log('Shared successfully');
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };


  return (
    <div className='share'>
      <button onClick={handleShare}><FiShare2 className='shareIcon' /></button>
    </div>


  );
}

export default ShareButton;

