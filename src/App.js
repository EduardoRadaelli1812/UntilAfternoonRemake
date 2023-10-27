import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';

import Home from "./pages/home/home.js";
import Continue from './pages/continue/continue.js';
import Narrativa from "./pages/narrativa/narrativa.js";
import Choose1 from './pages/choose1/choose1.js';
import Videointro from './pages/videointro/videointro.js';
import Choose11 from './pages/choose11/choose11.js';
import Choose12 from './pages/choose12/choose12.js';
import Afterchoose1 from './pages/afterchoose1/afterchoose1.js';
import Dialogue1 from './pages/dialogue1/dialogue1.js';
import Question1 from './pages/question1/question1.js';
import Question11 from './pages/question11/question11.js';
import Question12 from './pages/question12/question12.js';
import Question13 from './pages/question13/question13.js';
import Cutscene3 from './pages/cutscene3/cutscene3.js';
import Challenge1 from './pages/challenge1/challenge1.js';
import Challenge1puzzle from './pages/challenge1puzzle/challenge1puzzle.js';
import Challenge1note from './pages/challenge1note/challenge1note.js';
import Thewoods from './pages/thewoods/thewoods.js';
import Cutscene4 from './pages/cutscene4/cutscene4.js';
import Challenge2 from './pages/challenge2/challenge2.js';
import Challenge2rectory from './pages/challenge2rectory/challenge2rectory.js';
import Choose2 from './pages/choose2/choose2.js';
import Choose21 from './pages/choose21/choose21.js';
import Cutscene51 from './pages/cutscene51/cutscene51.js';
import Publishinghouse from './pages/publishinghouse/publishinghouse.js';
import Choose22 from './pages/choose22/choose22.js';
import Cutscene52 from './pages/cutscene52/cutscene52.js';
import Dialogue21 from './pages/dialogue21/dialogue21.js';
import Dialogue22 from './pages/dialogue22/dialogue22.js';
import Dialogue3 from './pages/dialogue3/dialogue3.js';
import Textsandwich from './pages/textsandwich/textsandwich.js';
import Textdiscouraged from './pages/textdiscouraged/textdiscouraged.js';
import Dialogue41 from './pages/dialogue41/dialogue41.js';
import Challenge3 from './pages/challenge3/challenge3.js';
import Dialogue42 from './pages/dialogue42/dialogue42.js';
import Cutscene6 from './pages/cutscene6/cutscene6.js';
import Dialogue51 from './pages/dialogue51/dialogue51.js';
import Challenge4 from './pages/challenge4/challenge4.js';
import Dialogue52 from './pages/dialogue52/dialogue52.js';
import Cosmopolita from './pages/cosmopolita/cosmopolita.js';
import Dialogue53 from './pages/dialogue53/dialogue53.js';
import Cutscene7 from './pages/cutscene7/cutscene7.js';
import Challenge5 from './pages/challenge5/challenge5.js';
import Musicbuilding from './pages/musicbuilding/musicbuilding.js';
import Cutscene8 from './pages/cutscene8/cutscene8.js';
import Dialogue6 from './pages/dialogue6/dialogue6.js';
import Curriculum from './pages/curriculum/curriculum.js';
import Challenge6instruments from './pages/challenge6instruments/challenge6instruments.js';
import Accuse from './pages/accuse/accuse.js';
import Dialogue7 from './pages/dialogue7/dialogue7.js';
import LeavingRU from './pages/leavingRU/leavingRU.js';
import Poliana from './pages/poliana/poliana.js';
import Question2 from './pages/question2/question2.js';
import Question21 from './pages/question21/question21.js';
import Question22 from './pages/question22/question22.js';
import Question23 from './pages/question23/question23.js';
import MelanieSelena from './pages/melanieSelena/melanieSelena.js';
import Dialogue8 from './pages/dialogue8/dialogue8.js';
import Closer from './pages/closer/closer.js';
import Polianahacker from './pages/polianahacker/polianahacker.js';
import Dialogue9 from './pages/dialogue9/dialogue9.js';
import Resolved from './pages/resolved/resolved.js';
import Payoff from './pages/payoff/payoff.js';
import End from './pages/end/end.js';
import Planetariumqr from './pages/planetariumqr/planetariumqr.js';
import Cosmo from './pages/cosmo/cosmo.js';
import C52 from './pages/challenge5/c52.js';
import C53 from './pages/challenge5/c53.js';
import C54 from './pages/challenge5/c54.js';
import C55 from './pages/challenge5/c55.js';
import C56 from './pages/challenge5/c56.js';
import C57 from './pages/challenge5/c57.js';
import C62 from './pages/challenge6instruments/c62.js';
import C63 from './pages/challenge6instruments/c63.js';
import C64 from './pages/challenge6instruments/c64.js';
import C65 from './pages/challenge6instruments/c65.js';
import C66 from './pages/challenge6instruments/c66.js';
import C68 from './pages/challenge6instruments/c68.js';
import Choose222 from './pages/choose22/choose222.js';
import Followed from './pages/followed/followed.js';
import C7 from './pages/challenge7/c7.js';
import Sobre from './pages/sobre/sobre.js';
import Contato from './pages/contato/contato.js';
import ReactGA from 'react-ga'; 

class App extends Component {
  componentDidMount() {
    ReactGA.initialize('G-MGXZFJ8F6Z');
  }
  render() {
    return (
      <Router>
        <Routes>                                         
        <Route path="/" element={<Home />} />
        <Route path="/narrativa" element={<Narrativa />} />
        <Route path="/choose1" element={<Choose1 />} />
        <Route path="/continue" element={<Continue />} />
        <Route path="/videointro" element={<Videointro />} />
        <Route path="/choose11" element={<Choose11 />} />
        <Route path="/choose12" element={<Choose12 />} />
        <Route path="/afterchoose1" element={<Afterchoose1 />} />
        <Route path="/dialogue1" element={<Dialogue1 />} />   
        <Route path="/question1" element={<Question1 />} />   
        <Route path="/question11" element={<Question11 />} />   
        <Route path="/question12" element={<Question12 />} />   
        <Route path="/question13" element={<Question13 />} />   
        <Route path="/cutscene3" element={<Cutscene3 />} />  
        <Route path="/challenge1" element={<Challenge1 />} />  
        <Route path="/challenge1puzzle" element={<Challenge1puzzle />} /> 
        <Route path="/challenge1note" element={<Challenge1note />} />   
        <Route path="/thewoods" element={<Thewoods />} />   
        <Route path="/cutscene4" element={<Cutscene4 />} />   
        <Route path="/challenge2" element={<Challenge2 />} />  
        <Route path="/challenge2rectory" element={<Challenge2rectory />} />  
        <Route path="/choose2" element={<Choose2 />} />
        <Route path="/choose21" element={<Choose21 />} />
        <Route path="/choose222" element={<Choose222 />} />
        <Route path="/cutscene51" element={<Cutscene51 />} />
        <Route path="/publishinghouse" element={<Publishinghouse />} />
        <Route path="/choose22" element={<Choose22 />} />
        <Route path="/cutscene52" element={<Cutscene52 />} />
        <Route path="/dialogue21" element={<Dialogue21 />} />
        <Route path="/dialogue22" element={<Dialogue22 />} />
        <Route path="/dialogue3" element={<Dialogue3 />} />
        <Route path="/textsandwich" element={<Textsandwich />} />
        <Route path="/textdiscouraged" element={<Textdiscouraged />} />
        <Route path="/dialogue41" element={<Dialogue41 />} />
        <Route path="/challenge3" element={<Challenge3 />} />        
        <Route path="/dialogue42" element={<Dialogue42 />} /> 
        <Route path="/cutscene6" element={<Cutscene6 />} /> 
        <Route path="/dialogue51" element={<Dialogue51 />} />
        <Route path="/challenge4" element={<Challenge4 />} />
        <Route path="/dialogue52" element={<Dialogue52 />} />
        <Route path="/cosmopolita" element={<Cosmopolita />} />
        <Route path="/dialogue53" element={<Dialogue53 />} />
        <Route path="/cutscene7" element={<Cutscene7 />} />
        <Route path="/challenge5" element={<Challenge5 />} />
        <Route path="/musicbuilding" element={<Musicbuilding />} />
        <Route path="/cutscene8" element={<Cutscene8 />} />
        <Route path="/dialogue6" element={<Dialogue6 />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/challenge6instruments" element={<Challenge6instruments />} />
        <Route path="/accuse" element={<Accuse />} />
        <Route path="/dialogue7" element={<Dialogue7 />} />
        <Route path="/leavingRU" element={<LeavingRU />} />
        <Route path="/poliana" element={<Poliana />} />
        <Route path="/question2" element={<Question2 />} />   
        <Route path="/question21" element={<Question21 />} />   
        <Route path="/question22" element={<Question22 />} />   
        <Route path="/question23" element={<Question23 />} />   
        <Route path="/melanieSelena" element={<MelanieSelena />} />  
        <Route path="/dialogue8" element={<Dialogue8 />} />
        <Route path="/closer" element={<Closer />} />
        <Route path="/polianahacker" element={<Polianahacker />} />
        <Route path="/dialogue9" element={<Dialogue9 />} />
        <Route path="/resolved" element={<Resolved />} />
        <Route path="/payoff" element={<Payoff />} />
        <Route path="/cosmo" element={<Cosmo />} />
        <Route path="/end" element={<End />} />
        <Route path="/planetariumqr" element={<Planetariumqr />} />
        <Route path="/end" element={<End />} />
        <Route path="/c52" element={<C52 />} />
        <Route path="/c53" element={<C53 />} />
        <Route path="/c54" element={<C54 />} />
        <Route path="/c55" element={<C55 />} />
        <Route path="/c56" element={<C56 />} />
        <Route path="/c57" element={<C57 />} />
        <Route path="/c62" element={<C62 />} />
        <Route path="/c63" element={<C63 />} />
        <Route path="/c64" element={<C64 />} />
        <Route path="/c65" element={<C65 />} />
        <Route path="/c66" element={<C66 />} />
        <Route path="/c68" element={<C68 />} />
        <Route path="/c7" element={<C7 />} />
        <Route path="/followed" element={<Followed />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        </Routes>
      </Router>
    );
  }
}
export default App;
