import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const experiences = [
    {
      company: "Epsilon C5I",
      role: "Software Intern",
      period: "June 2025 - Aug 2025",
      achievements: [
        "Developed APIs for classified DoD Sensor Systems to capture data from a new source using TCP sockets in an Agile environment",
        "Built a logging mechanism to reduce debugging time by 30% by extracting incoming and outgoing XML messages",
        "Engineered unit tests to ensure 100% code compliance by utilizing Google Test"
      ],
      tech: ["C++", "Google Test", "Jenkins", "Scrum"]
    },
    {
      company: "Dell Technologies",
      role: "Software Engineer Intern",
      period: "Jan 2024 - May 2024, July 2023 - Sept 2023",
      achievements: [
        "Developed REST APIs using .NET Core for an internal sales platform accounting for 40% of online sales",
        "Introduced 3 features by collaborating with cross-functional teams to deliver backend microservices used in production",
        "Completed feature to process and store new fields by altering SQL DB tables with over 200k records in production",
        "Optimized system security by fixing over 50 security issues across 9 applications using Snyk vulnerability scanning"
      ],
      tech: [".NET Core", "C#", "Azure DevOps", "SQL Server", "MongoDB"]
    }
  ];

  const projects = [
    {
      name: "EduClip",
      description: "Headed a team of 5 to implement a cross-platform TikTok-like Short-Video App for knowledge-based content",
      tech: ["Flutter", "Firebase"],
      github: "https://github.com/Srikar-D-Palmite/EduClip"
    },
    {
      name: "Inkwell",
      description: "Co-implemented a decentralized note-taking application using blockchain technology. Features markdown editing, note categorization, modern glassmorphism UI, note sharing, and CRUD operations",
      tech: ["React JS", "Motoko", "Blockchain"],
      github: "https://github.com/Srikar-D-Palmite/Inkwell",
      demo: "#"
    },
    {
      name: "Prime Planner",
      description: "Led a team of 4 during a hackathon to develop a cross-platform medicine and events scheduling app for the elderly. Reads digital prescriptions and links users to online pharmacies",
      tech: ["Flutter", "Firebase", "Python", "Flask"],
      github: "https://github.com/Srikar-D-Palmite/PrimePlanner"
    },
    {
      name: "JungleChats",
      description: "Co-created and hosted a simple and modern chat display website. Developed reusable Angular components for generating each chat dynamically",
      tech: ["Angular.js", "Bootstrap"],
      github: "https://github.com/Srikar-D-Palmite/JungleChats",
      demo: "#"
    }
  ];

  const skills = {
    "Languages": ["C/C++", "C#", "Python", "Java", "SQL"],
    "Backend & Systems": ["REST APIs", "Microservices", ".NET Core", "Flask", "TCP/IP", "Concurrency"],
    "Databases": ["SQL Server", "MongoDB", "Firebase"],
    "DevOps & Tools": ["Docker", "Git", "Jenkins", "Azure DevOps", "Linux"],
    "Testing": ["Unit Testing", "Google Test", "xUnit", "Google Mock"],
    "Practices": ["Agile/Scrum", "CI/CD", "Code Reviews", "Technical Documentation"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Srikar Tadeparti
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-blue-400 transition-colors ${activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Srikar Tadeparti
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-6">
              Backend Software Engineer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Master's student in Computer Science specializing in backend systems, microservices, and distributed systems. 
              Experienced in building scalable APIs and production-ready solutions.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/Srikar-D-Palmite" target="_blank" rel="noopener noreferrer" 
               className="hover:text-blue-400 transition-colors">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/srikar-tadeparti" target="_blank" rel="noopener noreferrer"
               className="hover:text-blue-400 transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="mailto:srikartadeparti@gmail.com" className="hover:text-blue-400 transition-colors">
              <Mail size={28} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
          >
            <ChevronDown size={32} className="text-blue-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700">
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                I'm a Master's student in Computer Science at the University of Florida (GPA: 3.72), 
                with a strong foundation in backend development and distributed systems.
              </p>
              <p className="text-lg">
                My experience includes developing APIs for DoD systems at Epsilon C5I and building 
                production microservices at Dell Technologies that handle millions of dollars in sales. 
                I specialize in C++, C#, .NET Core, and have a strong background in systems programming, 
                networking, and DevOps practices.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Education</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold">University of Florida</p>
                      <p className="text-sm text-gray-400">MS Computer Science | GPA: 3.72</p>
                      <p className="text-sm text-gray-400">Aug 2024 - May 2026</p>
                    </div>
                    <div>
                      <p className="font-semibold">Mahindra University</p>
                      <p className="text-sm text-gray-400">BTech CSE | GPA: 8.06/10</p>
                      <p className="text-sm text-gray-400">Rank 27/214</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Achievements</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Top 3% in CodeKaze (200k+ participants)</li>
                    <li>• 2nd place YeetCode competition</li>
                    <li>• 2 merit scholarships (top 10%)</li>
                    <li>• Harvard CS50 Certificate</li>
                    <li>• Secret Clearance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400">{exp.company}</h3>
                    <p className="text-xl text-gray-300">{exp.role}</p>
                  </div>
                  <p className="text-gray-400 mt-2 md:mt-0">{exp.period}</p>
                </div>
                <ul className="space-y-2 mb-4 text-gray-300">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-400 mr-2">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-all hover:transform hover:scale-105">
                <h3 className="text-2xl font-bold text-blue-400 mb-3">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                     className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                       className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                      <ExternalLink size={20} className="mr-2" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-blue-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="px-3 py-2 bg-slate-700/50 text-gray-300 rounded-lg text-sm hover:bg-blue-500/20 hover:text-blue-300 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-3xl mx-auto w-full text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm currently seeking backend software engineering roles for Summer 2026 and beyond. 
            Feel free to reach out if you'd like to connect!
          </p>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700">
            <div className="space-y-4">
              <a href="mailto:srikartadeparti@gmail.com" 
                 className="flex items-center justify-center text-lg hover:text-blue-400 transition-colors">
                <Mail size={24} className="mr-3" />
                srikartadeparti@gmail.com
              </a>
              <a href="tel:+13527562964" 
                 className="flex items-center justify-center text-lg hover:text-blue-400 transition-colors">
                <Phone size={24} className="mr-3" />
                (352) 756-2964
              </a>
              <div className="flex justify-center space-x-6 pt-4">
                <a href="https://github.com/Srikar-D-Palmite" target="_blank" rel="noopener noreferrer"
                   className="hover:text-blue-400 transition-colors">
                  <Github size={32} />
                </a>
                <a href="https://linkedin.com/in/srikar-tadeparti" target="_blank" rel="noopener noreferrer"
                   className="hover:text-blue-400 transition-colors">
                  <Linkedin size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 backdrop-blur-sm py-6 text-center text-gray-400">
        <p>© 2025 Srikar Tadeparti. Built with React.</p>
      </footer>
    </div>
  );
}