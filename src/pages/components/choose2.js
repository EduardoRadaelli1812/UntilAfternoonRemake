import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useEffect } from 'react';

const Choose2 = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/choose2');
    }, []);
  return(
    <>   
    <div className='choose'>
        <p>What are you going to do?</p>
        <Link to="/choose21" id='botao_choose1'>Hide behind a tree near the message to try to see the hacker get the note.</Link>
        <Link to="/choose22" id='botao_choose2'>On the waiting benches in the rectory, try to catch the hacker's encounter with Little Riding Hood. </Link>
        <Link id='back_choose' to="/challenge2rectory">BACK</Link>
    </div>    
    </>
  )
}
export default Choose2;