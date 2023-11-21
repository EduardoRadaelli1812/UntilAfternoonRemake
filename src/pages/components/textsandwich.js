import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useEffect } from 'react';

const Textsandwich = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/textsandwich');
    }, []);
  return (
    <div className='text'>
        <p>You took the sandwich, left the room and went downstairs again. The receptionist was back. You ventured to ask if she knew any little red hats and if anyone had asked for her, but she had no idea what you were talking about. You cursed yourself for missing the clue. </p>
        <Link to="/dialogue3" id='back_text'>BACK</Link>
        <Link to="/textdiscouraged" id='next_text'>NEXT</Link>
    </div>
  );
}

export default Textsandwich;