import { useNavigate, Link } from 'react-router-dom';
import '../styles/styles.css';
import { useState, useEffect } from 'react';

const Challenge1 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/challenge1');
    }, []);
  const [pedagogy, setPedagogy] = useState(false);
  const [englishLiterature, setEnglishLiterature] = useState(false);
  const [visualArts, setVisualArts] = useState(false);
  const [informationSystems, setinformationSystems] = useState(false);
  const navigate = useNavigate();

  return (
    <div className='c1'>
        <p>Let's check your previous knowledge about books?<br></br><br></br>In which UFSM courses can the book Alice in Wonderland be studied?</p>
        <ul className='form'>
          <li>
          <label className='checkbox-label'>
            <input
              type='checkbox'
              checked={pedagogy}
              onChange={(e) => setPedagogy(e.target.checked)}
            />
            <span className='custom-checkbox'></span>
            Pedagogy
          </label>
          </li>
          <li>
          <br />
          <label className='checkbox-label'>
            <input
              type='checkbox'
              checked={englishLiterature}
              onChange={(e) => setEnglishLiterature(e.target.checked)}
            />
            <span className='custom-checkbox'></span>
            English Language and Literature
          </label>
          </li>
          <li>
          <br />
          <label className='checkbox-label'>
            <input
              type='checkbox'
              checked={visualArts}
              onChange={(e) => setVisualArts(e.target.checked)}
            />
            <span className='custom-checkbox'></span>
            Visual Arts
          </label>
          </li>
          <li>
          <br />
          <label className='checkbox-label'>
            <input
              type='checkbox'
              checked={informationSystems}
              onChange={(e) => setinformationSystems(e.target.checked)}
            />
            <span className='custom-checkbox'></span>
            Information Systems
          </label>
          <br />
          </li>
          <br />
          <Link id='back_c1' to="/cutscene3">BACK</Link>
          <button id='next_c1' onClick={() => { 
            if (
                pedagogy && englishLiterature && visualArts && !informationSystems
            ) 
              {navigate('/challenge1puzzle');} 
            else 
              {alert('Marque as opções corretas');}
            }}
            >NEXT</button>
        </ul>
      </div>
  );
}

export default Challenge1;