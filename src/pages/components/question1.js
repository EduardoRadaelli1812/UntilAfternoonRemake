import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useEffect } from 'react';

const Question1 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/question1');
    }, []);
  return(
    <>   
      <div className='question1'>
        <p>What is the number of the building "Arts and Languages Center"?</p>
        <div className='question1123'>
            <Link to="/question11">40</Link>
            <Link to="/question12">16</Link>
            <Link to="/question13">7</Link>
        </div>
        <Link to="/dialogue1" id="back_question1">BACK</Link>
      </div>    
    </>
  )
}
export default Question1;