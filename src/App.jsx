import './App.css'

const resume = {
  name: 'Ajeta Salaria',
  title: 'Full Stack Developer',
  email: 'ajetasalaria@gmail.com',
  phone: '+91 9138473415',
  location: 'Chandigarh',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',

  about:
    'Full Stack Developer with 5+ years of experience in PHP, Laravel, WordPress, React.js, Zoho CRM integrations, and REST API development. Experienced in building scalable web applications, third-party integrations, and responsive frontend interfaces.',

  skills: [
    'React.js',
    'JavaScript',
    'PHP',
    'Laravel',
    'CodeIgniter',
    'WordPress',
    'Zoho CRM',
    'REST APIs',
    'MongoDB',
    'MySQL',
    'Bootstrap',
    'Git & GitHub',
    'Shopify',
    'Postman',
    'WooCommerce',
    'jQuery',
    'AJAX',
  ],

  experience: [
    {
      role: 'Software Developer',
      company: 'Easyleadz',
      duration: 'June 2022 – Present',
      points: [
        'Developed scalable web applications using Core PHP and CodeIgniter.',
        'Built and integrated RESTful APIs for frontend and third-party systems.',
        'Integrated Zoho CRM APIs using OAuth 2.0.',
        'Customized WordPress websites using Elementor.',
        'Worked with MySQL and MongoDB databases.',
        'Developed Chrome Extensions for automation and scraping.',
        'Managed hosting, DNS, cPanel, and server configurations.',
      ],
    },

    {
      role: 'Junior PHP Developer',
      company: 'ZestGeek Solutions',
      duration: 'April 2021 – June 2022',
      points: [
        'Customized WordPress themes and plugins.',
        'Worked on Zoho CRM modules and workflow automation.',
        'Integrated payment gateways in WooCommerce.',
        'Used AJAX and jQuery for dynamic UI functionality.',
        'Worked on Wix integrations and customization.',
      ],
    },
  ],

  projects: [
    {
      name: 'Zoho CRM Integration System',
      tech: 'PHP, Zoho CRM API, OAuth 2.0',
      points: [
        'Integrated Zoho CRM APIs for lead and customer management.',
        'Implemented OAuth 2.0 authentication for secure API access.',
        'Automated business workflows and data synchronization.',
      ],
      link: 'https://github.com/yourusername/zoho-crm-project',
    },

    {
      name: 'WordPress WooCommerce Website',
      tech: 'WordPress, WooCommerce, Elementor',
      points: [
        'Customized WooCommerce store with payment gateway integration.',
        'Implemented responsive UI and plugin customizations.',
        'Optimized website performance and SEO.',
      ],
      link: 'https://github.com/yourusername/wordpress-project',
    },

    {
      name: 'React Employee Management App',
      tech: 'React.js, Bootstrap, REST APIs',
      points: [
        'Built employee CRUD operations with responsive UI.',
        'Integrated REST APIs for dynamic data handling.',
        'Implemented search and filter functionality.',
      ],
      link: 'https://github.com/yourusername/react-crud-app',
    },
  ],

  education: [
    {
      degree: 'Bachelor of Technology (Computer Science)',
      school: 'Kurukshetra University',
      year: '2016 – 2020',
    },
  ],

  certifications: [
    'React - The Complete Guide (Udemy)',
    'JavaScript Algorithms and Data Structures',
    'PHP & MySQL Certification',
  ],
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

            <a
              href={resume.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href={resume.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* Body */}

      <div className="resume-body">
        {/* About */}

        <Section title="About Me">
          <p>{resume.about}</p>
        </Section>

        {/* Skills */}

        <Section title="Skills">
          <div className="skills-grid">
            {resume.skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </Section>

        {/* Experience */}

        <Section title="Experience">
          {resume.experience.map((exp, index) => (
            <div key={index} className="entry">
              <div className="entry-header">
                <h3>
                  {exp.role} — <span>{exp.company}</span>
                </h3>

                <span className="duration">
                  {exp.duration}
                </span>
              </div>

              <ul>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        {/* Projects */}

        <Section title="Projects">
          {resume.projects.map((project, index) => (
            <div key={index} className="entry">
              <div className="entry-header">
                <h3>
                  {project.name}

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    ↗
                  </a>
                </h3>

                <span className="duration">
                  {project.tech}
                </span>
              </div>

              <ul>
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        {/* Education */}

        <Section title="Education">
          {resume.education.map((edu, index) => (
            <div key={index} className="entry">
              <div className="entry-header">
                <h3>
                  {edu.degree} — <span>{edu.school}</span>
                </h3>

                <span className="duration">{edu.year}</span>
              </div>
            </div>
          ))}
        </Section>

        {/* Certifications */}

        <Section title="Certifications">
          <ul>
            {resume.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
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