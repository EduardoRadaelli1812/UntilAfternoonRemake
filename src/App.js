import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import * as components from './pages/components';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<components.Home />} />
        <Route path="/narrativa" element={<components.Narrativa />} />
        <Route path="/choose1" element={<components.Choose1 />} />
        <Route path="/videointro" element={<components.Videointro />} />
        <Route path="/choose11" element={<components.Choose11 />} />
        <Route path="/choose12" element={<components.Choose12 />} />
        <Route path="/afterchoose1" element={<components.Afterchoose1 />} />
        <Route path="/dialogue1" element={<components.Dialogue1 />} />
        <Route path="/question1" element={<components.Question1 />} />
        <Route path="/question11" element={<components.Question11 />} />
        <Route path="/question12" element={<components.Question12 />} />
        <Route path="/question13" element={<components.Question13 />} />
        <Route path="/cutscene3" element={<components.Cutscene3 />} />
        <Route path="/challenge1" element={<components.Challenge1 />} />
        <Route path="/challenge1puzzle" element={<components.Challenge1puzzle />} />
        <Route path="/challenge1note" element={<components.Challenge1note />} />
        <Route path="/thewoods" element={<components.Thewoods />} />
        <Route path="/cutscene4" element={<components.Cutscene4 />} />
        <Route path="/challenge2" element={<components.Challenge2 />} />
        <Route path="/challenge2rectory" element={<components.Challenge2rectory />} />
        <Route path="/choose2" element={<components.Choose2 />} />
        <Route path="/choose21" element={<components.Choose21 />} />
        <Route path="/choose222" element={<components.Choose222 />} />
        <Route path="/cutscene51" element={<components.Cutscene51 />} />
        <Route path="/publishinghouse" element={<components.Publishinghouse />} />
        <Route path="/choose22" element={<components.Choose22 />} />
        <Route path="/cutscene52" element={<components.Cutscene52 />} />
        <Route path="/dialogue21" element={<components.Dialogue21 />} />
        <Route path="/dialogue22" element={<components.Dialogue22 />} />
        <Route path="/dialogue3" element={<components.Dialogue3 />} />
        <Route path="/textsandwich" element={<components.Textsandwich />} />
        <Route path="/textdiscouraged" element={<components.Textdiscouraged />} />
        <Route path="/dialogue41" element={<components.Dialogue41 />} />
        <Route path="/challenge3" element={<components.Challenge3 />} />
        <Route path="/dialogue42" element={<components.Dialogue42 />} />
        <Route path="/cutscene6" element={<components.Cutscene6 />} />
        <Route path="/dialogue51" element={<components.Dialogue51 />} />
        <Route path="/challenge4" element={<components.Challenge4 />} />
        <Route path="/dialogue52" element={<components.Dialogue52 />} />
        <Route path="/cosmopolita" element={<components.Cosmopolita />} />
        <Route path="/dialogue53" element={<components.Dialogue53 />} />
        <Route path="/cutscene7" element={<components.Cutscene7 />} />
        <Route path="/challenge5" element={<components.Challenge5 />} />
        <Route path="/musicbuilding" element={<components.Musicbuilding />} />
        <Route path="/cutscene8" element={<components.Cutscene8 />} />
        <Route path="/dialogue6" element={<components.Dialogue6 />} />
        <Route path="/curriculum" element={<components.Curriculum />} />
        <Route path="/challenge6instruments" element={<components.Challenge6instruments />} />
        <Route path="/accuse" element={<components.Accuse />} />
        <Route path="/dialogue7" element={<components.Dialogue7 />} />
        <Route path="/leavingRU" element={<components.LeavingRU />} />
        <Route path="/poliana" element={<components.Poliana />} />
        <Route path="/question2" element={<components.Question2 />} />
        <Route path="/question21" element={<components.Question21 />} />
        <Route path="/question22" element={<components.Question22 />} />
        <Route path="/question23" element={<components.Question23 />} />
        <Route path="/melanieSelena" element={<components.MelanieSelena />} />
        <Route path="/dialogue8" element={<components.Dialogue8 />} />
        <Route path="/closer" element={<components.Closer />} />
        <Route path="/polianahacker" element={<components.Polianahacker />} />
        <Route path="/dialogue9" element={<components.Dialogue9 />} />
        <Route path="/resolved" element={<components.Resolved />} />
        <Route path="/payoff" element={<components.Payoff />} />
        <Route path="/cosmo" element={<components.Cosmo />} />
        <Route path="/end" element={<components.End />} />
        <Route path="/planetariumqr" element={<components.Planetariumqr />} />
        <Route path="/end" element={<components.End />} />
        <Route path="/c52" element={<components.C52 />} />
        <Route path="/c53" element={<components.C53 />} />
        <Route path="/c54" element={<components.C54 />} />
        <Route path="/c55" element={<components.C55 />} />
        <Route path="/c56" element={<components.C56 />} />
        <Route path="/c57" element={<components.C57 />} />
        <Route path="/c62" element={<components.C62 />} />
        <Route path="/c63" element={<components.C63 />} />
        <Route path="/c64" element={<components.C64 />} />
        <Route path="/c65" element={<components.C65 />} />
        <Route path="/c66" element={<components.C66 />} />
        <Route path="/c68" element={<components.C68 />} />
        <Route path="/c7" element={<components.C7 />} />
        <Route path="/followed" element={<components.Followed />} />
        <Route path="/sobre" element={<components.Sobre />} />
        <Route path="/contato" element={<components.Contato />} />
        <Route path="/login" element={<components.Login />} />
        <Route path="/cadastro" element={<components.Cadastro />} />
        <Route path="/usuario" element={<components.Usuario />} />
      </Routes>
    </Router>
  );
}

export default App;
