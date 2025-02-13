import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './sections/header/Header';
import Footer from './sections/footer/Footer';
import Portfolio from './pages/portfolio/portfolio';
import MentionsLegales from './pages/mentionsLegales/MentionsLegales';
import PolitiqueConfidentialite from './pages/politiqueConfidentialite/PolitiqueConfidentialite';
import ScrollToTopButton from './component/scrollToTopButton/ScrollToTopButton';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Page principale */}
        <Route path="/portfolio" element={<Portfolio />} />

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
