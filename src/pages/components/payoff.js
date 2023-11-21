import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { useEffect } from 'react';

const Payoff = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/payoff');
    }, []);
  return (
    <div className='text'>
        <p>Poliana had to use all her saved money to pay off the people she had stolen over the years. In addition, she was kicked out and sued. Her two friends, Selena and Melanie, who took credit as a bribe begged to be forgiven and were only suspended. UFSM also strengthened the security of the UR credits software.</p>
        <Link to="/resolved" id='back_text'>BACK</Link>
        <Link to="/end" id='next_text'>NEXT</Link>
    </div>
  );
}

export default Payoff;