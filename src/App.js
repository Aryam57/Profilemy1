import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HelpSection from './components/HelpSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/footer';
import CssPage from './components/CssPage'; // تأكد من وجود هذا المكون
import ContactForm from './components/ContactForm'


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <HelpSection />
                  <SkillsSection />
                  <ProjectsSection />
                <ContactForm/>
                </>
              }
            />
          
            <Route path="/css" element={<CssPage />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}




export default App;
