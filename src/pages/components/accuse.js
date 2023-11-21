import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useEffect } from "react";

const Accuse = () => {
  useEffect(() => {
    localStorage.setItem('lastVisitedPage', '/accuse');
  }, []);
  return (
    <div className='text'>
      <p>And there he was playing his instrument. In a heartbeat, you entered the room and started to accuse him.</p>
        <Link to="/c68" id='back_text'>BACK</Link>
        <Link to="/dialogue7" id='next_text'>NEXT</Link>
    </div>
  );
}

export default Accuse;