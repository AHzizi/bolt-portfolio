import React from 'react';
import {
  Braces,
  Database,
  Server,
  Code2,
  Figma,
  GitBranch,
  Cloud,
  Terminal,
  Cpu,
  Layout
} from 'lucide-react';

const Skills = () => {
  const skills = {
    "Frontend": [
      { name: "React", icon: <Code2 className="w-8 h-8" /> },
      { name: "TypeScript", icon: <Braces className="w-8 h-8" /> },
      { name: "Next.js", icon: <Terminal className="w-8 h-8" /> },
      { name: "UI/UX", icon: <Layout className="w-8 h-8" /> }
    ],
    "Backend": [
      { name: "Node.js", icon: <Server className="w-8 h-8" /> },
      { name: "Python", icon: <Cpu className="w-8 h-8" /> },
      { name: "PostgreSQL", icon: <Database className="w-8 h-8" /> }
    ],
    "Tools": [
      { name: "Git", icon: <GitBranch className="w-8 h-8" /> },
      { name: "AWS", icon: <Cloud className="w-8 h-8" /> },
      { name: "Figma", icon: <Figma className="w-8 h-8" /> }
    ]
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6 text-center">{category}</h3>
              <div className="grid grid-cols-2 gap-6">
                {items.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <div className="p-3 bg-white rounded-lg shadow-md text-blue-600 hover:text-blue-700 transition-colors">
                      {skill.icon}
                    </div>
                    <span className="text-gray-600 text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;