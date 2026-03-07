"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { contactIconMap, skillIconMap } from "@/lib/icons";

type Project = (typeof portfolioData.projects)[number];
type Experience = (typeof portfolioData.experience)[number];

export default function Home() {
  const { personal, experience, skills, projects } = portfolioData;

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedProject(null);
        setSelectedExperience(null);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const EmailIcon = contactIconMap.email;
  const PhoneIcon = contactIconMap.phone;
  const GithubIcon = contactIconMap.github;
  const LinkedinIcon = contactIconMap.linkedin;

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="text-2xl font-black tracking-wide text-red-500 sm:text-3xl">
            {personal.logo}
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#home" className="hover:text-[var(--primary)]">
              Home
            </a>
            <a href="#experience" className="hover:text-[var(--primary)]">
              Experience
            </a>
            <a href="#projects" className="hover:text-[var(--primary)]">
              Projects
            </a>
            <a href="#skills" className="hover:text-[var(--primary)]">
              Skills
            </a>
            <a href="#contact" className="hover:text-[var(--primary)]">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[var(--muted)] hover:text-white"
            >
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[var(--muted)] hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <section id="home" className="mx-auto max-w-7xl px-5 pb-12 pt-16 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-4xl">
            <p className="mb-4 inline-block rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]">
              {personal.location}
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
              {personal.name}
            </h1>

            <h2 className="mt-4 text-lg text-[var(--muted)] sm:text-xl lg:text-2xl">
              {personal.role}
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              {personal.tagline}
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              {personal.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[var(--primary-hover)]"
              >
                View Projects
              </a>

              <a
                href={personal.resume}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold transition hover:bg-[var(--surface-soft)]"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[420px] w-[320px] overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--surface)] shadow-2xl sm:h-[500px] sm:w-[380px]">
              <Image
                src="/omkar.png"
                alt="Omkar Chhabra portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Experience</h2>
        <p className="mt-4 text-lg text-[var(--muted)]">What I’ve worked on and contributed to</p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {experience.map((job) => (
            <button
              key={job.id}
              onClick={() => setSelectedExperience(job)}
              className="group overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] text-left transition hover:scale-[1.01]"
            >
              <div className="relative h-[280px] w-full">
                <Image src={job.image} alt={job.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute left-5 right-5 bottom-5 rounded-2xl bg-black/70 p-4 backdrop-blur">
                  <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                  <p className="mt-1 text-sm text-zinc-200">{job.company}</p>
                  <p className="mt-3 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-black">
                    More info
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Featured Projects</h2>
        <p className="mt-4 text-lg text-[var(--muted)]">Because ideas deserve execution</p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] text-left transition hover:scale-[1.01]"
            >
              <div className="relative h-[280px] w-full">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute left-5 top-5">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
                <div className="absolute left-5 right-5 bottom-5 flex items-center justify-between gap-4 rounded-2xl bg-black/70 p-4 backdrop-blur">
                  <div>
                    <p className="text-lg font-semibold text-white">{project.subtitle}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black">
                    More info
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Technical Skills</h2>
        <p className="mt-4 text-lg text-[var(--muted)]">Based on what I use every day</p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.title}
              className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-7"
            >
              <h3 className="text-2xl font-semibold">{group.title}</h3>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {group.items.map((item) => {
                  const skillData = skillIconMap[item as keyof typeof skillIconMap];
                  const Icon = skillData?.icon;

                  return (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[#121212] px-4 py-4 text-base font-medium text-zinc-100"
                    >
                      {Icon && <Icon size={24} color={skillData.color} className="shrink-0" />}
                      <span>{item}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] px-6 py-14 text-center">
          <h2 className="text-4xl font-bold">Let&apos;s Connect</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-[var(--muted)]">
            Ready to collaborate on your next project or discuss opportunities
          </p>

          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center justify-center gap-3 rounded-2xl border border-[var(--border)] bg-black px-6 py-6 text-lg font-medium transition hover:border-[var(--primary)]"
            >
              <EmailIcon size={22} className="text-red-500" />
              <span>{personal.email}</span>
            </a>

            <a
              href={`tel:${personal.phone}`}
              className="flex items-center justify-center gap-3 rounded-2xl border border-[var(--border)] bg-black px-6 py-6 text-lg font-medium transition hover:border-[var(--primary)]"
            >
              <PhoneIcon size={22} className="text-red-500" />
              <span>{personal.phone}</span>
            </a>
          </div>

          <div className="mt-10 flex justify-center gap-5">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-full border border-[var(--border)] bg-black px-6 py-4"
            >
              <GithubIcon size={22} />
              <span>GitHub</span>
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-full border border-[var(--border)] bg-black px-6 py-4"
            >
              <LinkedinIcon size={22} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--border)] px-5 py-8 text-sm text-[var(--muted)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {personal.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#home">Home</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[95vh] w-full max-w-6xl overflow-auto rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-5 top-5 z-20 rounded-full bg-black/70 px-4 py-2 text-3xl text-white"
            >
              ×
            </button>

            <div className="relative h-[320px] w-full md:h-[380px]">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                <h3 className="text-4xl font-bold text-white md:text-6xl">
                  {selectedProject.title}
                </h3>
                <p className="mt-4 text-2xl text-zinc-200">{selectedProject.subtitle}</p>

                <div className="mt-6 flex flex-wrap gap-4">
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-red-500 px-6 py-3 text-lg font-semibold text-white"
                    >
                      Live Site
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 md:p-10">
              <p className="text-3xl font-bold text-emerald-400">{selectedProject.completed}</p>

              <p className="mt-8 max-w-5xl text-xl leading-10 text-zinc-200">
                {selectedProject.description}
              </p>

              <div className="mt-10">
                <h4 className="text-2xl font-bold">Technologies Used</h4>
                <div className="mt-5 flex flex-wrap gap-3">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-[var(--border)] bg-zinc-800 px-4 py-2 text-lg text-zinc-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedExperience && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedExperience(null)}
        >
          <div
            className="relative max-h-[95vh] w-full max-w-5xl overflow-auto rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedExperience(null)}
              className="absolute right-5 top-5 z-20 rounded-full bg-black/70 px-4 py-2 text-3xl text-white"
            >
              ×
            </button>

            <div className="relative h-[320px] w-full md:h-[380px]">
              <Image
                src={selectedExperience.image}
                alt={selectedExperience.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                <h3 className="text-4xl font-bold text-white md:text-6xl">
                  {selectedExperience.title}
                </h3>
                <p className="mt-4 max-w-3xl text-xl text-zinc-200 md:text-2xl">
                  {selectedExperience.company}
                </p>
              </div>
            </div>

            <div className="p-6 md:p-10">
              <p className="text-3xl font-bold text-emerald-400">
                {selectedExperience.duration}
              </p>

              <p className="mt-8 max-w-5xl text-xl leading-10 text-zinc-200">
                {selectedExperience.description}
              </p>

              <div className="mt-8">
                <h4 className="text-2xl font-bold">Highlights</h4>
                <ul className="mt-5 space-y-4 text-lg leading-9 text-zinc-200">
                  {selectedExperience.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}