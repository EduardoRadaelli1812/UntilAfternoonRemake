import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useEffect } from "react";

const Choose11 = () => {
  useEffect(() => {
    localStorage.setItem('lastVisitedPage', '/choose11');
  }, []);
  return(
    <>   
    <div className='text'>
        <p>Hunger spoke louder, so you decided that your lunch would be a pastel from Pitadela. You took a few steps, then remembered that you had spent your money by putting in more credits in the UR and now your account was basically empty. You have no option to have lunch, at this moment, Podrão, the Dog, called your attention.. He is sitting beside the credit booth.</p>
        <Link to="/choose1" id='back_text'>BACK</Link>
        <Link to="/afterchoose1" id='next_text'>NEXT</Link>
      </div> 
    </>
  )
}
export default Choose11;