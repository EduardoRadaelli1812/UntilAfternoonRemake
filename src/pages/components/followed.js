import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useEffect } from 'react';

const Followed = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/followed');
    }, []);
  return (
    <div className='text'>
        <p>You followed Selena's instructions and got there without any problem. On the way, you met a professor at the center, explained the situation to her, and asked if she could accompany you. You planned to try to convince Poliana alone to tell who was the guilty, but, if necessary, it would be good to have an authority to mediate the situation. You reached the front of the computer lab and took a deep breath.</p>
        <Link to="/closer" id='back_text'>BACK</Link>
        <Link to="/c7" id='next_text'>NEXT</Link>
    </div>
  );
}

export default Followed;