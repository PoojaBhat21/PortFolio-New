import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Mail, Linkedin, Twitter, Instagram, ChevronUp } from 'lucide-react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "Spotify Profile",
      description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      tech: ["React", "Styled Components", "Express", "Spotify API"],
      github: "https://github.com",
      external: "https://spotify-profile.herokuapp.com",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Halcyon Theme",
      description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      tech: ["VS Code", "Sublime Text", "Atom", "iTerm2"],
      github: "https://github.com",
      external: "https://marketplace.visualstudio.com",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Build a Spotify Connected App",
      description: "Having struggled with existing Spotify apps and tutorials myself, I wanted to create a comprehensive resource for understanding the Spotify Web API and building connected apps.",
      tech: ["React", "Express", "Spotify API", "Heroku"],
      github: "https://github.com",
      external: "https://web-app-tutorial.herokuapp.com",
      image: "/api/placeholder/600/400"
    }
  ];

  const experiences = [
    {
      title: "Software Application Development Engineer",
      company: "Intel",
      period: "2022 Aug – present",
      description: [
        "Designed and developed end-to-end web applications using React.js for the front-end, Node as wrapper and .NET Core (C#) for the back-end, delivering scalable and responsive solutions.Write modern, performant, maintainable code for a diverse array of client and internal projects",
        "Built RESTful APIs to enable seamless communication between the frontend and back-end systems, ensuring optimized performance and data integrity and integrated with external apps for several usecasesWork with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
        "Deployed and managed applications on AWS services such as EC2, ECS, S3, and Lambda, implementing DevOps practices to automate deployments using CI/CD pipelines.Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
        "Configured Docker containers to standardize development and deployment environments, ensuring consistency and reducing deployment errors.",
      "Monitored and optimized applications for performance, scalability, and reliability using tools like AWS CloudWatch and Postman for API testing.",
    "Worked with relational databases like PostgreSQL and MySQL for efficient data storage and retrieval.",  
    " Conducted code reviews, mentored junior developers, and participated in agile ceremonies (stand-ups, sprint planning, and retrospectives)"
    ]
    },
    {
      title: "Lead Software Engineer",
      company: "Accenture",
      period: " 2019 May – 2022 Aug",
      description: [
        "Handle the customization of clients systems, including functional requirements documentation, use cases, actual coding, unit testing, and deploymentDeveloped and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
        "Designing responsive web pages with bulk upload, calculations, mapping relations and many more complex functionalities.Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
        "Managed and monitored the implementation of the front-end   and backend development of the analysis, development and integration which involved 15 team membersClients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more",
        "Automated many manual tasks which reduced the team efforts and also led to minimal bugs.",
        "Scheduling and delegating of work items to a team of 15 members"
      ]
    },
    {
      title: "System Engineer",
      company: "Tata Consultancy Services Ltd",
      period: " 2016 Sep – 2019 Apr",
      description: [
        "Development, support, and maintenance clients web application systems under Finance domain.",
        "Provided functional guidance to the user community and other stakeholders and solving user queries.",
        "Developing robust codes for upcoming Changes and tracking the progress of work.",
        "Represents IT to addressing Finance questions or concerns and participating in discussions to review and finalize the requirements."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/90 backdrop-blur-sm z-50 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
          <div className="text-teal-300 font-mono text-lg">Pooja K S</div>
          <div className="hidden md:flex space-x-8">
            {['about', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`font-mono text-sm hover:text-teal-300 transition-colors ${
                  activeSection === item ? 'text-teal-300' : ''
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            <a
              href="/Pooja_K_S_Resume.pdf"
              className="border border-teal-300 text-teal-300 px-4 py-2 rounded hover:bg-teal-300/10 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Social Links - Left Side */}
      <div className="fixed left-8 bottom-0 hidden lg:flex flex-col items-center space-y-6 z-40">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <Github className="w-5 h-5 hover:text-teal-300 hover:-translate-y-1 transition-all cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/pooja-k-s-87124b152" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 hover:text-teal-300 hover:-translate-y-1 transition-all cursor-pointer" />
        </a>
        <div className="w-px h-24 bg-slate-400"></div>
      </div>

      {/* Email - Right Side */}
      <div className="fixed right-8 bottom-0 hidden lg:flex flex-col items-center space-y-6 z-40">
        <div className="writing-mode-vertical text-sm hover:text-teal-300 hover:-translate-y-1 transition-all cursor-pointer font-mono vertical-text">
          kiranakerepoojaks@gmail.com
        </div>
        <div className="w-px h-24 bg-slate-400"></div>
      </div>

      {/* Main Content */}
      <main className="px-6 lg:px-12 lg:pl-24">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center max-w-4xl pl-4 lg:pl-8">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-7xl font-bold text-slate-200 leading-tight">
              Pooja K S.
            </h1>
            {/* <h2 className="text-4xl lg:text-7xl font-bold text-slate-400 leading-tight">
              I build things for the web.
            </h2> */}
            <p className="text-lg lg:text-xl text-slate-400 max-w-2xl leading-relaxed">
               I'm a Software engineer with 8+ years of experience in application development. Demonstrates strong 
analytical and problem-solving skills and the ability to follow through with projects from inception to 
completion.
              {/* <span className="text-teal-300">Upstatement</span>. */}
            </p>
            {/* <button className="border border-teal-300 text-teal-300 px-8 py-4 rounded font-mono hover:bg-teal-300/10 transition-colors mt-12">
              Check out my work!
            </button> */}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 max-w-4xl pl-4 lg:pl-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-200 mb-12">
            About Me
          </h2>
          {/* <div className="grid lg:grid-cols-3 gap-12"> */}
            <div className="grid">
            <div className="lg:col-span-2 space-y-4 text-slate-400">
              <p>
                Hello! My name is Pooja and I enjoy creating things that live on the internet. 
              </p>
              <p>
                I started my career in 2016 as a software developer, driven by a passion for creating impactful software solutions. Throughout my journey, I’ve had the privilege of working with leading tech companies, gaining exposure to diverse technologies and domains. These experiences have allowed me to deliver meaningful contributions, continuously learn, and grow both as a professional and as an individual.
                </p>
              <p>I have been actively working with the following technologies in my recent projects:</p>
              
              {/* Languages */}
              <div className="mt-6">
                <h4 className="text-slate-200 font-semibold mb-3">Languages</h4>
                <div className="grid grid-cols-2 gap-2 font-mono text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-teal-300">▹</span>
                    <span>C#</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-teal-300">▹</span>
                    <span>JavaScript</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-teal-300">▹</span>
                    <span>HTML/CSS</span>
                  </div>
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div className="mt-6">
                <h4 className="text-slate-200 font-semibold mb-3">Frameworks & Libraries</h4>
                <div className="grid grid-cols-2 gap-2 font-mono text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-teal-300">▹</span>
                    <span>.NET</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-teal-300">▹</span>
                    <span>ReactJS</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-teal-300">▹</span>
                    <span>jQuery</span>
                  </div>
                </div>
              </div>

              {/* Database */}
              <div className="mt-6">
                <h4 className="text-slate-200 font-semibold mb-3">Database</h4>
                <div className="grid grid-cols-2 gap-2 font-mono text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-teal-300">▹</span>
                    <span>MySQL</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-teal-300">▹</span>
                    <span>PostgreSQL</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-teal-300">▹</span>
                    <span>SQL Server</span>
                  </div>
                </div>
              </div>

              {/* Other */}
              <div className="mt-6">
                <h4 className="text-slate-200 font-semibold mb-3">Other</h4>
                <div className="grid grid-cols-2 gap-2 font-mono text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-teal-300">▹</span>
                    <span>AWS</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-teal-300">▹</span>
                    <span>CI/CD</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-teal-300">▹</span>
                    <span>RESTful APIs</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="relative">
              <div className="relative z-10 bg-teal-300/20 rounded p-4">
                {/* <div className="w-full h-80 bg-slate-700 rounded flex items-center justify-center text-slate-500">
                  Profile Image
                </div> */}
              {/* </div> */}
              {/* <div className="absolute top-6 left-6 w-full h-80 border-2 border-teal-300 rounded -z-10"></div> */}
            {/* </div> */} 
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 max-w-4xl pl-4 lg:pl-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-200 mb-12">
            Where I've Worked
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="flex md:flex-col border-b md:border-b-0 md:border-l border-slate-600 mb-8 md:mb-0">
              {experiences.map((exp, i) => (
                <button
                  key={i}
                  onClick={() => setActiveExperience(i)}
                  className={`px-6 py-3 text-left font-mono text-sm hover:text-teal-300 hover:bg-slate-800/50 transition-colors border-l-2 md:border-l-0 md:border-b-2 ${
                    activeExperience === i 
                      ? 'border-teal-300 text-teal-300 bg-slate-800/50' 
                      : 'border-transparent'
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>
            <div className="md:ml-8 flex-1">
              <h3 className="text-xl font-semibold text-slate-200 mb-2">
                {experiences[activeExperience].title}{' '}
                <span className="text-teal-300">@ {experiences[activeExperience].company}</span>
              </h3>
              <p className="font-mono text-sm text-slate-400 mb-6">{experiences[activeExperience].period}</p>
              <ul className="space-y-3">
                {experiences[activeExperience].description.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-400">
                    <span className="text-teal-300 mt-2">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        {/* <section id="work" className="py-24 max-w-6xl mx-auto pl-4 lg:pl-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-200 mb-12">
            Some Things I've Built
          </h2>
          <div className="space-y-24">
            {projects.map((project, i) => (
              <div key={i} className="grid lg:grid-cols-12 gap-8 items-center">
                <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative group">
                    <div className="bg-teal-300/20 absolute inset-0 rounded lg:group-hover:bg-transparent transition-colors"></div>
                    <div className="w-full h-80 bg-slate-700 rounded flex items-center justify-center text-slate-500">
                      Project Screenshot
                    </div>
                  </div>
                </div>
                <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-1 lg:text-left' : 'lg:text-right'}`}>
                  <p className="font-mono text-teal-300 text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold text-slate-200 mb-4">{project.title}</h3>
                  <div className="bg-slate-800 p-6 rounded lg:shadow-lg">
                    <p className="text-slate-400">{project.description}</p>
                  </div>
                  <div className={`flex flex-wrap gap-4 mt-4 font-mono text-sm text-slate-400 ${i % 2 === 1 ? 'lg:justify-start' : 'lg:justify-end'}`}>
                    {project.tech.map((tech, j) => (
                      <span key={j}>{tech}</span>
                    ))}
                  </div>
                  <div className={`flex space-x-4 mt-4 ${i % 2 === 1 ? 'lg:justify-start' : 'lg:justify-end'}`}>
                    <Github className="w-5 h-5 hover:text-teal-300 transition-colors cursor-pointer" />
                    <ExternalLink className="w-5 h-5 hover:text-teal-300 transition-colors cursor-pointer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Contact Section */}
        <section id="contact" className="py-24 max-w-2xl mx-auto text-center pl-4 lg:pl-8">
          <h2 className="font-mono text-teal-300 text-base lg:text-xl mb-4">What's Next?</h2>
          <h3 className="text-4xl lg:text-6xl font-bold text-slate-200 mb-6">Get In Touch</h3>
          <p className="text-slate-400 text-lg mb-12 max-w-lg mx-auto">
            I’m currently exploring new opportunities where I can leverage my skills and experience to contribute to impactful projects. If you’d like to connect or discuss potential roles, feel free to reach out—I’d be happy to connect and respond at the earliest.
          </p>
          <a
            href="mailto:kiranakerepoojaks@gmail.com"
            className="inline-block border border-teal-300 text-teal-300 px-8 py-4 rounded font-mono hover:bg-teal-300/10 transition-colors"
          >
            Say Hello
          </a>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center">
          <div className="lg:hidden flex justify-center space-x-6 mb-8">
            <Github className="w-6 h-6 hover:text-teal-300 transition-colors cursor-pointer" />
            <Linkedin className="w-6 h-6 hover:text-teal-300 transition-colors cursor-pointer" />
            <Twitter className="w-6 h-6 hover:text-teal-300 transition-colors cursor-pointer" />
            <Instagram className="w-6 h-6 hover:text-teal-300 transition-colors cursor-pointer" />
            <Mail className="w-6 h-6 hover:text-teal-300 transition-colors cursor-pointer" />
          </div>
        </footer>
      </main>

      {/* Scroll to top button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-slate-800 hover:bg-slate-700 text-teal-300 p-3 rounded-full shadow-lg transition-all hover:-translate-y-1 z-50"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default App;
