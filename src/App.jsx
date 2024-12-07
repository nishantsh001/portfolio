import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name = "John Doe";
  const profession = "full stack developer";
  const projects = [
    {
      title: "Project 1",
      description: "A web Application using React",
      link:"#"
    },
    {
      title: "Project 2",
      description: "An e commerce platform",
      link:"#"
    }
  ];
  return (
    <>
      <div className='App'>
        <header className='header'>
          <h1>{name}</h1>
          <p>{profession}</p>
          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section id="about" className='about-section'>
          <h2>About Me</h2>
          <p>
            Hello! I am{name}, a passionate{profession}, I love building web application real world problems.
          </p>
        </section>

        <section id="projects" className='projects-section'>
          <h2>Projects</h2>
          <div className='projects-list'>
            {projects.map((project, index) => (
              <div key={index} className='project-item'>
                <h3>{project.title}</h3>
                <h3>{project.description}</h3>
                <a href='{project.link}' target='_blank' rel='noopener noreferrer'>Vite Project</a>
              </div>
            ))}
          </div>
        </section>
        <section id='contact' className='contact-section'>
            <h2>Contact me</h2>
            <p>If you want would like to get in touch, feel free to connect <a href='johndoe@gmail.com'>johndoe@gmail.com</a></p>
        </section>

        <section className='footer'>
            <p>2024. All rights reserved</p>
        </section>
      </div>
    </>
  )
}

export default App
