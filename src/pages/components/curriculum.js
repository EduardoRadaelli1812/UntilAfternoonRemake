import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useEffect } from 'react';

const Curriculum = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/curriculum');
    }, []);
  return (
    <div className='text'>
        <p>You thought about how you could find the hacker with so many classrooms and instruments. So you had an idea: you could point your phone at all the codes and find the classroom in the building it's in. But to improve the idea, it would be easier if you had access to the options for instrument classes that the Bachelor of Music program offers. Therefore you could access the course curriculum to find out what your options are for finding Trevor once and for all.</p>
        <Link to="/dialogue6" id='back_text'>BACK</Link>
        <Link to="/challenge6instruments" id='next_text'>NEXT</Link>
    </div>
  );
}

export default Curriculum;