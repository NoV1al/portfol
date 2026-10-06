
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <a href="#" className="logo">
            NoViAl INC.
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <p className="eyebrow">IT Graduate · English Teacher</p>

          <h1>
            Hi, I'm <span>Vince Quinto.</span>
          </h1>

          <p className="hero-description">
            I like building websites, learning new things, and figuring out
            how technology can make everyday tasks a little easier.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button primary">
              See My Projects
            </a>

            <a href="#contact" className="button secondary">
              Get in Touch
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about">
          <p className="section-label">ABOUT</p>

          <h2>A bit about me.</h2>

          <p>
            I'm an IT graduate who enjoys working on websites and software
            projects. Most of what I know came from school, personal projects,
            and a lot of trial and error.
          </p>

          <p>
            I also work as an English teacher. Teaching has helped me become
            more comfortable communicating with different people and
            explaining things in a simple way.
          </p>
        </section>

        {/* Skills */}
        <section id="skills">
          <p className="section-label">SKILLS</p>

          <h2>Things I work with.</h2>

          <p>
            I'm still learning, but these are the technologies I've had the
            most experience working with so far.
          </p>

          <div className="skills">
            <span>HTML & CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Python</span>
            <span>Django</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>PostgreSQL</span>
            <span>Git & GitHub</span>
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <p className="section-label">PROJECTS</p>

          <h2>Some things I've built.</h2>

          <div className="projects">

            <article className="project-card">
              <div className="project-image">
                LOANMOTO
              </div>

              <div className="project-info">
                <p className="project-type">CAPSTONE PROJECT</p>

                <h3>LOANMOTO</h3>

                <p>
                  A loan management system made for handling borrower
                  information, loan applications, payments, risk assessment,
                  and other day-to-day tasks.
                </p>

                <div className="project-tags">
                  <span>Django</span>
                  <span>PostgreSQL</span>
                  <span>JavaScript</span>
                </div>

                <div className="project-links">
                  <a href="#" target="_blank" rel="noreferrer">
                    View Project →
                  </a>

                  <a href="#" target="_blank" rel="noreferrer">
                    GitHub →
                  </a>
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image">
                Portfolio
              </div>

              <div className="project-info">
                <p className="project-type">PERSONAL PROJECT</p>

                <h3>Personal Portfolio</h3>

                <p>
                  The website you're looking at right now. I built it to have
                  one place where I can show my projects, skills, and
                  experience.
                </p>

                <div className="project-tags">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>CSS</span>
                </div>

                <div className="project-links">
                  <a href="#" target="_blank" rel="noreferrer">
                    Live Site →
                  </a>

                  <a href="#" target="_blank" rel="noreferrer">
                    GitHub →
                  </a>
                </div>
              </div>
            </article>

          </div>
        </section>

        {/* Experience */}
        <section id="experience">
          <p className="section-label">EXPERIENCE</p>

          <h2>What I've been up to.</h2>

          <div className="experience">
            <div>
              <h3>English Teacher</h3>
              <p>Online ESL Teaching</p>
            </div>

            <span>2022 — Present</span>
          </div>

          <div className="experience">
            <div>
              <h3>Information Technology</h3>
              <p>Bachelor of Science in Information Technology</p>
            </div>

            <span>2026</span>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <p className="section-label">CONTACT</p>

          <h2>Want to talk?</h2>

          <p>
            If you have a project, a job opportunity, or just want to say hi,
            you can send me a message here.
          </p>

          <form>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />

            <textarea
              name="message"
              placeholder="Your message"
              rows="6"
              required
            />

            <button type="submit">
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer>
        <p>© 2026 Vince Quinto</p>
      </footer>
    </>
  );
}

export default App;
