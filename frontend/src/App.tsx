// frontend/src/App.tsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';

// Layout Components
import AppNavbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ProtectedRoute from './components/common/ProtectedRoute';

// all pages
import HomePage from './components/pages/HomePage';
import LawsPage from './components/pages/LawsPage';
import CaseStudiesPage from './components/pages/CaseStudiesPage';
import ResourcesPage from './components/pages/ResourcesPage';
import PlaygroundPage from './components/pages/PlaygroundPage';
import ProfilePage from './components/pages/ProfilePage';
import ContactPage from './components/pages/ContactPage';
import LoginPage from './components/pages/LoginPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <AppNavbar />
          <main style={{ flex: 1 }}>
            <Routes>
              {/* --- Public Routes --- */}
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />

              {/* --- Protected Routes --- */}
              <Route element={<ProtectedRoute />}>
                <Route path="/laws" element={<LawsPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/playground" element={<PlaygroundPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Route>
              
              <Route path="*" element={<h2 className="text-center p-5">404: Page Not Found</h2>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;