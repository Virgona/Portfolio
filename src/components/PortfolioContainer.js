import React, { useState } from 'react';
import Header from './Header'
import Footer from './Footer'
import Home from './pages/Home';
import About from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import './portfolioContainer.css'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Projects') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='portfolio-container'>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <div style={{ height: "80vh" }}>
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}
