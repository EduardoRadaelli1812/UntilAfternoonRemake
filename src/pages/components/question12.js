import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useEffect } from 'react';

const Question12 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/question12');
    }, []);
  return(
    <>   
      <div className='text'>
        <p>This is the Education Center. Try again.</p>
        <Link to="/question1" id="back_text">BACK</Link>
      </div>    
    </>
  )
}
export default Question12;