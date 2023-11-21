import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useEffect } from 'react';

const Question23 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/question23');
    }, []);
  return(
    <>   
      <div className='text'>
        <p>This is the Natural and Exact Sciences Center. Try again.</p>
        <Link to="/question2" id="back_text">BACK</Link>
      </div>    
    </>
  )
}
export default Question23;