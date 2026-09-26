"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring, type Variants } from "framer-motion";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { certifications, education, experience, projects, site, skills } from "@/data/site";

const navItems = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFloatingProfile, setShowFloatingProfile] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowFloatingProfile(latest > 560);
  });

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <motion.div className="progress" style={{ scaleX }} />

      <motion.a
        className="floating-profile"
        href="#top"
        aria-label="Back to Anirban Jana profile"
        initial={{ opacity: 0, scale: 0.7, y: -12 }}
        animate={showFloatingProfile ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.7, y: -12 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        style={{ pointerEvents: showFloatingProfile ? "auto" : "none" }}
      >
        <Image src="/profile.png" alt="Anirban Jana" fill sizes="52px" className="floating-profile-image" />
      </motion.a>

      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Anirban Jana home">
            <span className="brand-mark">AJ</span>
            <span>Anirban<span className="brand-dot">.</span></span>
          </a>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
            ))}
            <a className="nav-cta" href={site.resume} target="_blank" rel="noreferrer" onClick={closeMenu}>
              Resume <Download size={15} />
            </a>
          </div>

          <button className="menu-button" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle navigation">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <section id="top" className="hero section">
        <div className="hero-grid" />
        <div className="glow glow-one" />
        <div className="glow glow-two" />
        <div className="ecosystem-scene" aria-hidden="true">
          <div className="ecosystem-orbit ecosystem-orbit-one"><span className="ecosystem-node node-one" /></div>
          <div className="ecosystem-orbit ecosystem-orbit-two"><span className="ecosystem-node node-two" /></div>
          <div className="ecosystem-orbit ecosystem-orbit-three"><span className="ecosystem-node node-three" /></div>
          <div className="model-node model-one" />
          <div className="model-node model-two" />
          <div className="model-node model-three" />
          <div className="data-route route-one"><span className="data-packet" /></div>
          <div className="data-route route-two"><span className="data-packet" /></div>
          <div className="data-route route-three"><span className="data-packet" /></div>
        </div>
        <div className="container hero-inner">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
          >
            <motion.div className="eyebrow" variants={reveal}>
              <span className="status-dot" /> Available for opportunities
            </motion.div>
            <motion.h1 variants={reveal}>
              Building digital products that feel <span>thoughtful.</span>
            </motion.h1>
            <motion.p className="hero-lead" variants={reveal}>
              I&apos;m <strong>Anirban Jana</strong>, a Computer Science Engineer focused on full-stack development,
              clean interfaces and data-driven systems.
            </motion.p>
            <motion.div className="hero-actions" variants={reveal}>
              <a className="button primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button secondary" href={`mailto:${site.email}`}>Let&apos;s talk <Mail size={17} /></a>
            </motion.div>
            <motion.div className="hero-meta" variants={reveal}>
              <a className="location-link" href="https://share.google/Ba8oYXWjkeXgxtVrH" target="_blank" rel="noreferrer" aria-label={`Open ${site.location} in maps`}><MapPin size={15} /> {site.location}</a>
              <span><Code2 size={15} /> React · Node.js · Data</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <motion.div className="profile-card" whileHover={{ y: -8, rotate: -1, scale: 1.02 }} transition={{ duration: 0.3, ease: "easeOut" }}>
              <div className="profile-image-wrap">
                <Image src="/profile.png" alt="Professional headshot of Anirban Jana" fill priority sizes="(max-width: 800px) 80vw, 430px" className="profile-image" />
              </div>
              <div className="profile-caption">
                <div>
                  <span className="caption-label">CURRENT FOCUS</span>
                  <strong>Full-Stack Engineering</strong>
                </div>
                <span className="caption-icon"><Sparkles size={16} /></span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <a className="scroll-cue" href="#about"><ArrowDown size={17} /> Scroll to explore</a>
      </section>

      <section id="about" className="section section-dark">
        <div className="container split-grid">
          <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={reveal}>
            <span className="section-kicker">01 — ABOUT</span>
            <h2>Engineering with a product mindset.</h2>
          </motion.div>
          <motion.div className="about-copy" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={reveal}>
            <p className="large-copy">I enjoy turning ideas into polished, reliable web experiences — from the first component to the data flowing behind it.</p>
            <p>My background spans React-based interfaces, Node.js and Express backends, relational and document databases, and enterprise data integration with Informatica. I care about readable code, useful UX and solutions that can scale beyond a demo.</p>
            <div className="stat-row">
              <div><strong>8.6</strong><span>CGPA / 10</span></div>
              <div><strong>2+</strong><span>Featured projects</span></div>
              <div><strong>7+</strong><span>Core technologies</span></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <motion.div className="section-heading centered" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <span className="section-kicker">02 — TOOLKIT</span>
            <h2>Technologies I work with.</h2>
            <p>A practical stack for building interfaces, APIs and data workflows.</p>
          </motion.div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                className="skill-card"
                key={skill.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: Math.min(index * 0.035, 0.35), duration: 0.45 }}
              >
                <div className="skill-top"><span>{skill.name}</span><small>{skill.category}</small></div>
                <div className="skill-track"><motion.div className="skill-fill" initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 0.9, ease: "easeOut" }} /></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section section-tint">
        <div className="container">
          <motion.div className="section-heading centered" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <span className="section-kicker">03 — EXPERIENCE</span>
            <h2>Where I&apos;ve applied the craft.</h2>
          </motion.div>
          <div className="timeline">
            {experience.map((item) => (
              <motion.article className="experience-card" key={item.company} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
                <div className="timeline-marker"><BriefcaseBusiness size={17} /></div>
                <div className="experience-main">
                  <div className="experience-head">
                    <div><span className="company">{item.company}</span><h3>{item.role}</h3></div>
                    <span className="period">{item.period}</span>
                  </div>
                  <p>{item.summary}</p>
                  <ul>{item.bullets.map((bullet) => <li key={bullet}><CheckCircle2 size={16} />{bullet}</li>)}</ul>
                  <div className="tags">{item.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <div className="section-row">
            <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
              <span className="section-kicker">04 — SELECTED WORK</span>
              <h2>Projects with purpose.</h2>
            </motion.div>
            <p className="section-side-copy">A small selection of applications that show how I approach product thinking, engineering and user experience.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article className={`project-card ${project.accent}`} key={project.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal} whileHover={{ y: -8 }}>
                <div className="project-number">0{index + 1}</div>
                <div className="project-icon"><Layers3 size={21} /></div>
                <span className="project-type">{project.type} · {project.year}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-highlights">{project.highlights.map((item) => <li key={item}><span />{item}</li>)}</ul>
                <div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                {project.link ? <a className="project-link" href={project.link} target="_blank" rel="noreferrer">View live project <ExternalLink size={15} /></a> : null}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark education-section">
        <div className="container split-grid">
          <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <span className="section-kicker">05 — EDUCATION</span>
            <h2>The foundation behind the work.</h2>
            <p>Computer science fundamentals paired with hands-on product development.</p>
          </motion.div>
          <div className="education-list">
            {education.map((item, index) => (
              <motion.div className="education-item" key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} transition={{ delay: index * 0.08 }}>
                <div className="education-icon"><GraduationCap size={19} /></div>
                <div><span>{item.period}</span><h3>{item.title}</h3><p>{item.institution}</p><strong>{item.result}</strong></div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="container cert-strip">
          <div className="cert-title">CERTIFICATIONS</div>
          {certifications.map((cert) => <div className="cert" key={cert.name}><CheckCircle2 size={17} /><span><a href={cert.link} target="_blank" rel="noreferrer"><strong>{cert.name}</strong></a> — {cert.issuer}{cert.date ? ` · ${cert.date}` : ""}</span></div>)}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-card">
          <div className="contact-glow" />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <span className="section-kicker">06 — CONTACT</span>
            <h2>Have a product, role or idea in mind?</h2>
            <p>Let&apos;s build something useful, elegant and technically solid.</p>
            <div className="contact-actions">
              <a className="button primary" href={`mailto:${site.email}`}>Send me an email <Mail size={17} /></a>
              <a className="button ghost" href={`tel:${site.phone.replace(/\s/g, "")}`}>Call me <Phone size={17} /></a>
            </div>
            <div className="contact-details">
              <a href={`mailto:${site.email}`}><Mail size={16} />{site.email}</a>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}><Phone size={16} />{site.phone}</a>
              <a href={site.github} target="_blank" rel="noreferrer"><Github size={16} />GitHub</a>
              <a href={site.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} />LinkedIn</a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {site.name}. Built with Next.js.</span>
          <div className="footer-links">
            {site.github ? <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a> : null}
            {site.linkedin ? <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a> : null}
            <a href={site.resume} target="_blank" rel="noreferrer" aria-label="Open resume"><ExternalLink size={18} /></a>
            <a href="#top" aria-label="Back to top"><ArrowUp size={18} /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
