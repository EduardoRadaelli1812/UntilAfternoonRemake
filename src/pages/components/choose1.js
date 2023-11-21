import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useEffect } from "react";

const Choose1 = () => {
  useEffect(() => {
    localStorage.setItem('lastVisitedPage', '/choose1');
  }, []);
  return(
    <>   
    <div className='choose'>
        <p>BY THE WAY, Are you ready to solve this mystery?<br></br><br></br>What do YOU want to do?</p>
        <Link to="/choose11" id='botao_choose1'>I want to leave this place and have a pastry from Pitadela for lunch. I can eat fish next time...</Link>
        <Link to="/choose12" id='botao_choose2'>I want to investigate and find out what happened, it is UR's fish at stake!</Link>
        <Link id='back_choose' to="/videointro">BACK</Link>
    </div>    
    </>
  )
}
export default Choose1;