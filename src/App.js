import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Header Component
function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Huelgas , James Anilov G.</h1>
        <nav>
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Gabriel. All rights reserved.</p>
        <p>Created with React.js</p>
      </div>
    </footer>
  );
}

// Home Page
function Home() {
  return (
    <div className="home-page">
      <div className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm a Information Technology student passionate about web development and emerging technologies.</p>
        <div className="cta-buttons">
          <Link to="/about" className="btn primary">Learn More</Link>
          <Link to="/contact" className="btn secondary">Get In Touch</Link>
        </div>
      </div>
    </div>
  );
}

// About Page
function About() {
  return (
    <div className="about-page container">
      <h2 className="page-title">About Me</h2>
      <div className="about-content">
        <p>
          I am a dedicated computer science student with a passion for building web applications
          and exploring emerging technologies. My journey in tech started when I was in high school,
          and I've been developing my skills ever since.
        </p>
        <h3>Hobbies & Interests</h3>
        <ul>
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>Machine Learning</li>
          <li>Photography</li>
        </ul>
        <h3>Skills</h3>
        <div className="skills-grid">
          <span className="skill-tag">React.js</span>
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">HTML/CSS</span>
          <span className="skill-tag">Git</span>
        </div>
      </div>
    </div>
  );
}

// Education Page
function Education() {
  return (
    <div className="education-page container">
      <h2 className="page-title">Education</h2>
      <div className="education-list">
        <div className="education-card">
          <h3>College of Computing Studies</h3>
          <p className="degree">Bachelor of Science in Information Technology</p>
          <p className="period">2022 - Present</p>
          <h4>Key Courses:</h4>
          <ul>
            <li>Application Development and Emerging Technologies</li>
            <li>Web Development</li>
            <li>Data Structures and Algorithms</li>
            <li>Database Systems</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Projects Page
function Projects() {
  return (
    <div className="projects-page container">
      <h2 className="page-title">Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>E-commerce Website</h3>
          <p>A full-stack e-commerce platform with product catalog, shopping cart, and payment integration.</p>
          <h4>Technologies Used:</h4>
          <div className="tech-tags">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">MongoDB</span>
          </div>
        </div>
        <div className="project-card">
          <h3>Task Management App</h3>
          <p>A responsive task management application with user authentication.</p>
          <h4>Technologies Used:</h4>
          <div className="tech-tags">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Firebase</span>
            <span className="tech-tag">CSS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Contact Page
function Contact() {
  return (
    <div className="contact-page container">
      <h2 className="page-title">Contact Me</h2>
      <div className="contact-content">
        <p>Email: huelgasjames46@gmail.com</p>
        <div className="social-links">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn primary">Send Message</button>
        </form>
      </div>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
