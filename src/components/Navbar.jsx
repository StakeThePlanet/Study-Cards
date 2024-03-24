import  { useState } from 'react';
import './Navbar.css'; // Import a CSS file for styling
import '../App.css'
import { Link } from 'react-router-dom';
import Modal from './modal/modal';

const Navbar = () => {
  //modal state
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  //darkmode state
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="brand">Supabase - Study Cards</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/Lessons">Lessons</Link>
        <Link to="/Contact">Contact</Link>
        <a href="/Lessons">Lessons</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="navbar-buttons">
        <button className="login-button" onClick={openModal}>Log In</button>
        <label className="switch">
          <input type="checkbox" onChange={toggleDarkMode} />
          <span className="slider round"></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
