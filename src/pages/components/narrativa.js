import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Narrativa = () => {
  useEffect(() => {
    localStorage.setItem('lastVisitedPage', '/narrativa');
  }, []);

  return (
    <>
      <div className='narrativa'>
        <p>Anne Clarke is a student in the first semester and it is her first week at UFSM.<br></br><br></br>
          She was enjoying her first week of classes, and especially her meals at UR because: on Monday, she ate Strogonoff, on Wednesday fricassee, and yesterday, she checked the vegetarian option because it was soy meatballs.<br></br>
          But her seniors warned her the best menu was yet to come: Friday would be served fish at the University Restaurant (UR1).<br></br>
          <br></br>At this moment, our game begins, and YOU are arriving at UFSM.</p>
        <Link to="/usuario" id='back_narrativa'>BACK</Link>
        <Link to="/videointro" id='next_narrativa'>NEXT</Link>
      </div>
    </>
  );
}

export default Narrativa;
