import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Globe, ChevronDown, ExternalLink, Award } from 'lucide-react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { translations } from './constants';

export default function Portfolio() {
  const [lang, setLang] = useState('en');
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const canvasRef = useRef(null);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['about', 'experience', 'certificates', 'education', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // 3D Network Visualization (Subtle Version)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 5;

    const nodes = [];
    // Reduced number of nodes for less noise
    for (let i = 0; i < 20; i++) {
      const geometry = new THREE.SphereGeometry(0.05, 32, 32); // Smaller dots
      const material = new THREE.MeshBasicMaterial({ color: 0x22d3ee }); 
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(Math.random() * 6 - 3, Math.random() * 4 - 2, Math.random() * 4 - 2);
      scene.add(sphere);
      nodes.push(sphere);
    }

    const lines = [];
    // More transparent lines
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x1e3a8a, transparent: true, opacity: 0.15 });

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.85) {
          const points = [nodes[i].position, nodes[j].position];
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          const line = new THREE.Line(geometry, lineMaterial);
          scene.add(line);
          lines.push({ line, n1: nodes[i], n2: nodes[j] });
        }
      }
    }

    const animate = () => {
      requestAnimationFrame(animate);
      nodes.forEach((node, i) => {
        // Slower animation speed
        node.position.y += Math.sin(Date.now() * 0.0005 + i) * 0.001;
        node.rotation.y += 0.002;
      });
      // Update lines
      lines.forEach(link => {
        const positions = link.line.geometry.attributes.position.array;
        positions[0] = link.n1.position.x;
        positions[1] = link.n1.position.y;
        positions[2] = link.n1.position.z;
        positions[3] = link.n2.position.x;
        positions[4] = link.n2.position.y;
        positions[5] = link.n2.position.z;
        link.line.geometry.attributes.position.needsUpdate = true;
      });
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30">
      {/* 3D Background - Very Low Opacity (10%) */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full opacity-10 pointer-events-none" />
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-slate-950/95 backdrop-blur-md border-slate-800 py-3 shadow-lg' : 'bg-transparent border-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold text-white tracking-wider">
            ME.
          </div>
          <div className="hidden md:flex gap-1 bg-slate-900/80 p-1 rounded-full border border-slate-800 backdrop-blur-sm">
            {['about', 'experience', 'certificates', 'education', 'skills', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeSection === section
                    ? 'bg-cyan-700 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {t.nav[section]}
              </button>
            ))}
          </div>
          <button
            onClick={() => setLang(lang === 'en' ? 'de' : 'en')}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 hover:border-cyan-500/50 transition-all hover:text-cyan-400 group"
          >
            <Globe className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            <span className="font-mono text-sm">{lang === 'en' ? 'DE' : 'EN'}</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl text-center z-10"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-slate-900/80 text-cyan-400 rounded-full text-sm font-medium border border-cyan-800/30 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            {t.hero.greeting}
          </div>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
            {t.hero.name}
          </h1>
          <h2 className="text-2xl md:text-4xl text-cyan-400 mb-6 font-semibold drop-shadow-md">
            {t.hero.title}
          </h2>
          <div className="bg-slate-900/60 p-6 rounded-2xl backdrop-blur-sm border border-slate-800/50 inline-block mb-10">
            <p className="text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:mohamedalshraby3@gmail.com"
               className="flex items-center gap-2 px-8 py-4 bg-cyan-700 text-white rounded-xl hover:bg-cyan-600 transition-all shadow-lg font-semibold">
              <Mail className="w-5 h-5" />
              {t.hero.cta}
            </a>
            <div className="flex gap-2">
              <a href="https://github.com/Mohamed-khaled0" target="_blank" rel="noopener noreferrer"
                 className="p-4 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-all border border-slate-700">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/mohamedkhaled4/" target="_blank" rel="noopener noreferrer"
                 className="p-4 bg-blue-900/30 text-blue-400 rounded-xl hover:bg-blue-900/50 transition-all border border-blue-800/50">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
        <button onClick={() => scrollToSection('about')} className="absolute bottom-10 animate-bounce text-slate-500 hover:text-cyan-400 transition-colors">
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-950 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-800"
          >
            <h2 className="text-3xl font-bold mb-8 text-white border-l-4 border-cyan-500 pl-4">{t.about.title}</h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>{t.about.text}</p>
              <p className="text-cyan-200 font-medium bg-cyan-950/30 p-4 rounded-lg border border-cyan-900/50">{t.about.current}</p>
              <p>{t.about.extra}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-10 pt-10 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-slate-900 rounded-lg text-cyan-500"><MapPin className="w-6 h-6" /></div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Location</p>
                  <p className="font-medium text-slate-200">Giza, Egypt</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-slate-900 rounded-lg text-cyan-500"><Mail className="w-6 h-6" /></div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Email</p>
                  <p className="font-medium text-sm text-slate-200">mohamedalshraby3@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-slate-900 rounded-lg text-cyan-500"><Phone className="w-6 h-6" /></div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Phone</p>
                  <p className="font-medium text-slate-200">+20 102 626 8073</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center text-white">{t.experience.title}</h2>
          <div className="space-y-12">
            {t.experience.jobs.map((job, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative pl-8 md:pl-0"
              >
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 md:left-1/2 md:-translate-x-1/2"></div>
                <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-cyan-500 -translate-x-[5px] md:left-1/2 md:-translate-x-[5px] ring-4 ring-slate-950"></div>

                <div className={`md:flex justify-between items-start gap-12 ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 mb-2 md:mb-0 md:text-right md:pt-1">
                     <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 text-cyan-400 border border-slate-800 ${idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                        {job.period}
                     </span>
                  </div>
                  <div className="md:w-1/2 bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-colors shadow-lg">
                    <h3 className="text-xl font-bold text-white mb-1">{job.title}</h3>
                    <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mb-4">
                      <span>{job.company}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                    </div>
                    <ul className="space-y-2">
                      {job.duties.map((duty, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0"></span>
                          <span>{duty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-24 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white flex items-center justify-center gap-3">
            <Award className="text-cyan-400" />
            {t.certificates.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.certificates.items.map((cert, idx) => (
              <motion.a 
                href={cert.link} 
                target="_blank"
                rel="noopener noreferrer"
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-slate-950 rounded-xl p-6 border border-slate-800 hover:border-cyan-500/50 group transition-all shadow-xl"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 group-hover:border-cyan-500/30 text-cyan-400">
                    <cert.icon className="w-8 h-8" />
                  </div>
                  {cert.link !== "#" && <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-cyan-400" />}
                </div>
                <h3 className="font-bold text-lg text-white mb-2 line-clamp-2 min-h-[3.5rem]">{cert.name}</h3>
                <p className="text-sm text-cyan-400 mb-1">{cert.issuer}</p>
                <p className="text-xs text-slate-500">{cert.date}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">{t.education.title}</h2>
          <div className="grid gap-8">
            {t.education.degrees.map((degree, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900 rounded-2xl p-8 border border-slate-800 flex flex-col md:flex-row gap-6 items-start shadow-lg"
              >
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-cyan-400">
                  <Globe className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{degree.degree}</h3>
                  <p className="text-lg text-cyan-400 mb-2">{degree.institution}</p>
                  <p className="text-slate-500 text-sm mb-4">{degree.period} | {degree.location}</p>
                  <ul className="grid gap-2">
                    {degree.details.map((detail, i) => (
                      <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                         <span className="text-cyan-500 mt-1">›</span> {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">{t.skills.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                <span className="text-cyan-400">#</span> {t.skills.technical}
              </h3>
              <div className="flex flex-wrap gap-2">
                {t.skills.techList.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-slate-900 text-cyan-100 rounded-lg text-sm border border-slate-800">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                 <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Soft Skills</h4>
                 <div className="flex flex-wrap gap-2">
                  {t.skills.soft.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-900/10 text-blue-300 rounded-full text-xs border border-blue-900/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-cyan-400" /> {t.skills.languages}
              </h3>
              <div className="space-y-6">
                {Object.values(t.skills.langList).map((langItem, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 font-medium">{langItem.split(':')[0]}</span>
                      <span className="text-cyan-400 text-sm">{langItem.split(':')[1]}</span>
                    </div>
                    <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: idx === 2 ? '100%' : '75%' }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-cyan-600 to-blue-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">{t.contact.title}</h2>
          <p className="text-xl text-slate-400 mb-12">{t.contact.subtitle}</p>
          
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 mb-8 text-left">
               <a href="mailto:mohamedalshraby3@gmail.com" className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-800 transition-colors group border border-transparent hover:border-slate-700">
                  <div className="p-3 bg-cyan-900/20 rounded-full text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                     <Mail className="w-6 h-6" />
                  </div>
                  <div>
                     <p className="text-xs text-slate-500">Email Me</p>
                     <p className="text-slate-200 font-medium break-all">mohamedalshraby3@gmail.com</p>
                  </div>
               </a>
               <a href="tel:+201026268073" className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-800 transition-colors group border border-transparent hover:border-slate-700">
                  <div className="p-3 bg-cyan-900/20 rounded-full text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                     <Phone className="w-6 h-6" />
                  </div>
                  <div>
                     <p className="text-xs text-slate-500">Call Me</p>
                     <p className="text-slate-200 font-medium">+20 102 626 8073</p>
                  </div>
               </a>
            </div>
            <div className="pt-6 border-t border-slate-800 text-center">
              <p className="text-emerald-400 text-sm font-medium bg-emerald-950/30 inline-block px-4 py-2 rounded-full border border-emerald-900/50">
                {t.contact.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-slate-600 py-8 px-6 border-t border-slate-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2025 Mohamed Elsharaby. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
             <span>Giza, Egypt</span>
             <span>•</span>
             <span>Open to Relocation</span>
          </div>
        </div>
      </footer>
    </div>
  );
}