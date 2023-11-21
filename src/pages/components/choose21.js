import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useEffect } from 'react';

const Choose21 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/choose21');
    }, []);
  return(
    <>   
    <div className='text'>
        <p>You hid behind a tree, determined to catch the hacker in the act. You were so focused on the tree with the bow on the other side of the road, that you didn't notice a boy approaching you.</p>
        <Link to="/choose2" id='back_text'>BACK</Link>
        <Link to="/dialogue21" id='next_text'>NEXT</Link>
      </div> 
    </>
  )
  }
export default Choose21;