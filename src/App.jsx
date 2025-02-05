import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Presentation from './sections/presentation/Presentation';
import Projects from './sections/projects/Projects';
import SkillSet from './sections/skill-set/SkillSet';
import GithubStats from './sections/githubStats/GithubStats';
import Formation from './sections/formation/Formation';
import Header from './sections/header/Header';
import Footer from './sections/footer/Footer';
import Contact from './sections/contact/Contact';
import MentionsLegales from './pages/mentionsLegales/MentionsLegales';
import PolitiqueConfidentialite from './pages/politiqueConfidentialite/PolitiqueConfidentialite';
import ScrollToTopButton from './component/scrollToTopButton/ScrollToTopButton';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Page principale */}
        <Route
          path="/portfolio"
          element={
            <main>
              <Presentation />
              <Projects />
              <SkillSet />
              <GithubStats />
              <Formation />
              <Contact />
            </main>
          }
        />

        {/* Pages légales */}
        <Route
          path="/portfolio/mentions-legales"
          element={<MentionsLegales />}
        />
        <Route
          path="/portfolio/politique-confidentialite"
          element={<PolitiqueConfidentialite />}
        />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
