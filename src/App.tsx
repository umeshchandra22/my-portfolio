import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileText, Briefcase, User, Home, ChevronRight, Code, Award, Menu, X } from 'lucide-react';
import PDFDownloadButton from './components/PDFDownloadButton';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'resume', label: 'Resume', icon: FileText },
  ];

  const skills = [
    { category: 'PLM', items: ['Teamcenter 12.4.X', 'Teamcenter14.X', 'AWC 5.X', 'AWC 6.X'] },
    { category: 'Languages', items: ['Java', 'Python', 'C++', 'SQL'] },
    { category: 'Tools', items: ['JIRA', 'Service Now', 'Zendesk', 'SVN'] },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-10 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* Logo space if needed */}
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isScrolled
                        ? activeSection === item.id
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </button>
                );
              })}
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className={`p-2 rounded-full ${isScrolled ? 'text-gray-600' : 'text-white'}`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center w-full px-4 py-3 rounded-md text-left text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header 
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://landing-page-backend.s3.ap-south-1.amazonaws.com/blog_page_prodimages/5ef1fadb-73d6-45fa-843d-ab6cf93f1f56/shutterstock_1937153053-1_xl.png')`
        }}
      >
         <div className="container mx-auto px-6 py-24 relative">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-8 border-white/30 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQFNyKhFewEM9w/profile-displayphoto-shrink_800_800/B56ZVBsMXCHoAc-/0/1740563859334?e=1746057600&v=beta&t=vCpeDWQTPABXe68DB_BZvUxHqJ7g7g39mTsuENHqDRA"
                  alt="Sai Umesh Chandra Katta"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x400?text=Profile+Photo";
                  }}
                />
              </div>
              <div className="text-center md:text-left text-white">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Sai Umesh<br />Chandra Katta
                </h1>
                <p className="text-2xl md:text-3xl mb-8 text-blue-100">PLM Implementation Consultant</p>
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                  <a
                    href="https://github.com/umeshchandra22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/katta-sai-umesh-chandra-4b18b211b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                  <a
                    href="mailto:ksaiumeshchandra@gmail.com"
                    className="flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email
                  </a>
                </div>
                <PDFDownloadButton />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-8 h-8 text-white rotate-90" />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-24">
        {activeSection === 'home' && (
          <section className="space-y-24">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Welcome to My Portfolio</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                As a seasoned PLM Implementation Consultant, I specialize in Siemens Teamcenter development,
                configuration, and customization. With a proven track record in implementing robust PLM solutions,
                I help organizations streamline their product lifecycle management processes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Code,
                  title: 'Development',
                  description: 'Custom development and configuration of Siemens Teamcenter modules and utilities.'
                },
                {
                  icon: Briefcase,
                  title: 'Implementation',
                  description: 'End-to-end PLM implementation including migration, testing, and deployment.'
                },
                {
                  icon: Award,
                  title: 'Expertise',
                  description: 'Specialized in workflow automation, data migration, and system integration.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-sm p-12">
              <h3 className="text-2xl font-bold mb-8 text-center">Technical Expertise</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-4">
                    <h4 className="text-lg font-semibold text-blue-600">{skill.category}</h4>
                    <ul className="space-y-2">
                      {skill.items.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === 'about' && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Professional Summary</h2>
            <ul className="text-gray-600 leading-relaxed space-y-3 list-disc pl-5">
              <li>Strong hands-on experience in Development and Configuration and Migration of Siemens Teamcenter using IPS Upload and NX Utilities.</li>
              <li>Skilled in performing root cause analysis, gathering requirements, conducting impact analysis, executing testing, and coordinating production releases.</li>
              <li>Crafted detailed migration plans, timelines and risk assessments to ensure seamless data transitions while minimizing system downtime and disruption.</li>
              <li>Worked closely with IT, business stakeholders and third-party vendors to gather requirements, resolve issues, and ensure alignment during migration.</li>
              <li>Hands-on experience in implementing various Teamcenter utilities: process dispatcher requests and automate the workflow task completion, export business object properties, reading of XML's and to the create the objects update properties.</li>
              <li>Implemented/enabled custom Dispatcher translator, WF Action/Rule handlers, extensions for Teamcenter.</li>
              <li>Usage of SQL queries for migration Activities in Database.</li>
            </ul>
          </section>
        )}

        {activeSection === 'experience' && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold">PLM Data Migration Consultant</h3>
                    <p className="text-blue-600 text-lg">Siemens Mobility</p>
                  </div>
                  <p className="text-gray-500">August 2022 - Present</p>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-3">
                  <li>Developed scripts in Python for automation of repetitive tasks such as data validation and reporting</li>
                  <li>ITK Utilities Validating data Integrity and Correction</li>
                  <li>Implemented BOM migration and assisted in transitioning CAD data between legacy systems</li>
                  <li>Wrote shell scripts and SQL queries for data extraction, cleaning and migration</li>
                  <li>Monitored IPS upload utility and configured for errors and performed root cause analysis</li>
                  <li>Usage of UG Clone for Extraction Utility within TeamCenter</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold">Developer</h3>
                    <p className="text-blue-600 text-lg">Lilium GmbH</p>
                  </div>
                  <p className="text-gray-500">September 2020 - August 2022</p>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-3">
                  <li>Custom Translator in Dispatcher to attach Generated Excel to Change Objects</li>
                  <li>Custom Handler to update Signature and Completion date of Review Tasks</li>
                  <li>Implemented scripts to update existing Teamcenter attributes</li>
                  <li>Change Management and Document Management Implementation</li>
                  <li>Created Rule/Action Handlers and Custom Queries</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'resume' && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Resume</h2>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-gray-600 mb-6 text-lg">
                Download my detailed resume to learn more about my experience, skills, and qualifications.
              </p>
              <PDFDownloadButton />
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2024 Sai Umesh Chandra Katta. All rights reserved.</p>
            <div className="flex space-x-6">
              <a
                href="https://github.com/umeshchandra22"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/katta-sai-umesh-chandra-4b18b211b"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:ksaiumeshchandra@gmail.com"
                className="hover:text-blue-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;