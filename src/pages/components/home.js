import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

class Home extends Component {
  render () {
    return(
      <>         
        <div className='home'>
          <p>CAN YOU FIND WHO'S BEHIND THIS?</p>
          <Link to="/usuario" id='botao_play'>PLAY</Link>
          <Link to="/contato" id='botao_contato'>CONTATO</Link>
          <Link to="/sobre" id='botao_sobre'>SOBRE O ARG</Link>
        </div>
      </>
    )
  }
}
export default Home;