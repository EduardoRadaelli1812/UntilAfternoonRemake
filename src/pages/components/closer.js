import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useEffect } from 'react';

const Closer = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/closer');
    }, []);
  return (
    <div className='text'>
        <p>You're getting closer to the truth! Follow Selena's instructions and go to the CT computer lab. Don't forget Melanie's advice, you can ask people for information. People who study or work at CT are more likely to know how to guide you. </p>
        <Link to="/dialogue8" id='back_text'>BACK</Link>
        <Link to="/followed" id='next_text'>NEXT</Link>
    </div>
  );
}

export default Closer;