import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useEffect } from 'react';

const Question2 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/question2');
    }, []);
  return(
    <>   
      <div className='question2'>
        <p>What is the number of the building "Technology Center"?</p>
        <div className='question2123'>
            <Link to="/question21">42</Link>
            <Link to="/question22">7</Link>
            <Link to="/question23">13</Link>
        </div>
        <Link to="/poliana" id="back_question2">BACK</Link>
      </div>    
    </>
  )
}
export default Question2;