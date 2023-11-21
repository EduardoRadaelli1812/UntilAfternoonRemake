import '../styles/styles.css';
import { useEffect } from 'react';

const End = () => {
    useEffect(() => {
      localStorage.setItem('lastVisitedPage', '/end');
    }, []);
  return (
    <div className='text'>
      <p id='congrat'>Congratulations on unraveling the mystery <br></br><br></br><b><i>UNTIL AFTERNOON!</i></b></p>
      <p id="feedback">Seu feedback é muito importante para nós, e adoraríamos ouvir o que você achou da sua experiência.
      Para preenchê-lo, clique no link abaixo: <br></br><br></br><a id="a_end"href="https://docs.google.com/forms/d/e/1FAIpQLSfWLDyRAXQ8ykfZ6KPP74p7YCJkxa3YvhC2pV9-6qnEXvmjjA/viewform?usp=send_form" rel="noopener noreferrer" target="_blank">Formulário</a></p>
    </div>
  );
}

export default End;