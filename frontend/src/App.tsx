import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Layout Components
import AppNavbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Page Components
import HomePage from './components/pages/HomePage';
import LawsPage from './components/pages/LawsPage';
import CaseStudiesPage from './components/pages/CaseStudiesPage';
import ResourcesPage from './components/pages/ResourcesPage';
import PlaygroundPage from './components/pages/PlaygroundPage';
import ProfilePage from './components/pages/ProfilePage';
import ContactPage from './components/pages/ContactPage';

function App() {
  return (
    <Router>
      {/* Corrected minHeight from 10h to 100vh */}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppNavbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/laws" element={<LawsPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/playground" element={<PlaygroundPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;