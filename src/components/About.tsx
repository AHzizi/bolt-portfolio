import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
              alt="Working on laptop"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-600 mb-6">
              I'm a full stack developer with a passion for creating beautiful and functional web applications. 
              With over 5 years of experience in web development, I specialize in building responsive and 
              user-friendly applications using modern technologies.
            </p>
            <p className="text-gray-600 mb-6">
              My expertise includes React, Node.js, TypeScript, and various other modern web technologies. 
              I'm constantly learning and staying up-to-date with the latest trends in web development.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-gray-600">B.S. Computer Science</p>
                <p className="text-gray-500">University of Technology</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Experience</h3>
                <p className="text-gray-600">5+ Years</p>
                <p className="text-gray-500">Full Stack Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;