import './App.css'

const resume = {
  name: 'Your Name',
  title: 'Frontend Developer',
  email: 'you@email.com',
  phone: '+91 98765 43210',
  location: 'Ludhiana, Punjab',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  about: 'Passionate Frontend Developer with hands-on experience building React applications. I love creating clean, responsive UIs and turning ideas into real products.',
  skills: ['React', 'JavaScript', 'HTML & CSS', 'Bootstrap', 'Git & GitHub', 'Vite', 'REST APIs', 'Context API'],
  experience: [
    {
      role: 'Frontend Developer Intern',
      company: 'ABC Tech',
      duration: 'Jan 2024 – Apr 2024',
      points: [
        'Built reusable React components for the company dashboard.',
        'Integrated REST APIs and managed state using Context API.',
        'Improved page load speed by 30% through code optimization.',
      ]
    }
  ],
  projects: [
    {
      name: 'ShopZone — E-commerce App',
      tech: 'React, Bootstrap, Context API',
      points: [
        'Full e-commerce app with authentication, product CRUD, cart system.',
        'Protected routes, search & filter, add to cart with quantity control.',
      ],
      link: 'https://github.com/yourusername/ecommerce-app'
    },
    {
      name: 'Employee CRUD App',
      tech: 'React, Bootstrap',
      points: [
        'Form with validation to add, edit, delete employee records.',
        'Live search and responsive table layout.',
      ],
      link: 'https://github.com/yourusername/crud-app'
    }
  ],
  education: [
    {
      degree: 'B.Tech in Computer Science',
      school: 'Your College Name',
      year: '2021 – 2025',
    }
  ],
  certifications: [
    'React - The Complete Guide (Udemy)',
    'JavaScript Algorithms and Data Structures (freeCodeCamp)',
  ]
}

function App() {
  return (
    <div className="resume">

      {/* Header */}
      <header className="resume-header">
        <div>
          <h1>{resume.name}</h1>
          <p className="title">{resume.title}</p>
          <div className="contact-row">
            <span>📧 {resume.email}</span>
            <span>📞 {resume.phone}</span>
            <span>📍 {resume.location}</span>
            <a href={resume.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={resume.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </header>

      <div className="resume-body">

        {/* About */}
        <Section title="About Me">
          <p>{resume.about}</p>
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <div className="skills-grid">
            {resume.skills.map(s => <span key={s} className="skill-tag">{s}</span>)}
          </div>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          {resume.experience.map((e, i) => (
            <div key={i} className="entry">
              <div className="entry-header">
                <h3>{e.role} — <span>{e.company}</span></h3>
                <span className="duration">{e.duration}</span>
              </div>
              <ul>{e.points.map((p, j) => <li key={j}>{p}</li>)}</ul>
            </div>
          ))}
        </Section>

        {/* Projects */}
        <Section title="Projects">
          {resume.projects.map((p, i) => (
            <div key={i} className="entry">
              <div className="entry-header">
                <h3>
                  {p.name}{' '}
                  <a href={p.link} target="_blank" rel="noreferrer" className="project-link">↗</a>
                </h3>
                <span className="duration">{p.tech}</span>
              </div>
              <ul>{p.points.map((pt, j) => <li key={j}>{pt}</li>)}</ul>
            </div>
          ))}
        </Section>

        {/* Education */}
        <Section title="Education">
          {resume.education.map((e, i) => (
            <div key={i} className="entry">
              <div className="entry-header">
                <h3>{e.degree} — <span>{e.school}</span></h3>
                <span className="duration">{e.year}</span>
              </div>
            </div>
          ))}
        </Section>

        {/* Certifications */}
        <Section title="Certifications">
          <ul>
            {resume.certifications.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </Section>

      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <section className="resume-section">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">{children}</div>
    </section>
  )
}

export default App