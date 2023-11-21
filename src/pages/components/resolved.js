import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useEffect } from 'react';

const Resolved = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/resolved');
    }, []);
  return (
    <div className='text'>
        <p>And so the story was completely resolved. You and the professor delivered the recording to the UFSM rectory and told their sides of the story. </p>
        <Link to="/dialogue9" id='back_text'>BACK</Link>
        <Link to="/payoff" id='next_text'>NEXT</Link>
    </div>
  );
}

export default Resolved;