import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useEffect } from 'react';

const Question13 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/question13');
    }, []);
  return(
    <>   
      <div className='text'>
        <p>This is the Technology Center. Try again.</p>
        <Link to="/question1" id="back_text">BACK</Link>
      </div>    
    </>
  )
}
export default Question13;