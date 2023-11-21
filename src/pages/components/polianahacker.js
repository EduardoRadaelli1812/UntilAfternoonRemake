import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useEffect } from 'react';

const Polianahacker = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/polianahacker');
    }, []);
  return (
    <div className='text'>
        <p>When you opened the door, you saw Poliana sitting in a chair in front of a computer being formatted while having a milkshake. The count was at 60%. You noticed in her hair the red bow, identical to the one you had seen on the tree in the woods. Something clicked in your head, making you let go of the door, which slammed shut with the wind. Upon noticing your presence, Poiana smiled and took the bow off, offering it to you.</p>
        <Link to="/c7" id='back_text'>BACK</Link>
        <Link to="/dialogue9" id='next_text'>NEXT</Link>
    </div>
  );
}

export default Polianahacker;