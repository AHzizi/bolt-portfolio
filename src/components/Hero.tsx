import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">John Doe</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            A passionate Full Stack Developer crafting beautiful and functional web experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Work
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;