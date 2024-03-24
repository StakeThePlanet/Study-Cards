import  { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './Navbar.css'; // Import a CSS file for styling
import 'virtual:windi.css'
// import { Link } from 'react-router-dom';
// import Modal from './modal/modal';

const Navbar = () => {
  // //modal state
  // const [isModalOpen, setModalOpen] = useState(false);
  // const openModal = () => setModalOpen(true);
  // const closeModal = () => setModalOpen(false);

  //darkmode state
  // const [isDarkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setDarkMode(!isDarkMode);
  // };

  return (
    <nav className="bg-white shadow">
    <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
        
            <div className="flex-shrink-0 flex items-center">
                <a href="#" className="text-lg font-bold text-gray-800">Logo</a>
            </div>
        
            <div className="hidden md:flex md:items-center md:space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
                <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
                <a href="#" className="text-gray-600 hover:text-gray-800">Services</a>
                <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
            </div>
            
            <div className="flex md:hidden">
                <button className="mobile-menu-button">
                    <svg className="h-6 w-6 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M2 5h20a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zm20 4H2a1 1 0 1 1 0-2h20a1 1 0 1 1 0 2zm0 6H2a1 1 0 1 1 0-2h20a1 1 0 1 1 0 2z"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <div className="md:hidden mobile-menu hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="block text-gray-600 hover:text-gray-800">Home</a>
            <a href="/About" className="block text-gray-600 hover:text-gray-800">About</a>
            <a href="/Service" className="block text-gray-600 hover:text-gray-800">Services</a>
            <a href="/Contact" className="block text-gray-600 hover:text-gray-800">Contact</a>
        </div>
    </div>
</nav>
  );
};

export default Navbar;
