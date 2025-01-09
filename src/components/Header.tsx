import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/projects" className="text-gray-600 hover:text-gray-900">Projects</Link>
            <Link to="/skills" className="text-gray-600 hover:text-gray-900">Skills</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </nav>

          <div className="hidden md:flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <Linkedin size={20} />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-900">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>About</Link>
              <Link to="/projects" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>Projects</Link>
              <Link to="/skills" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>Skills</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>Contact</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;