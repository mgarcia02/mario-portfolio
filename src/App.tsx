import Navbar from '@/components/Navbar'
import CursorLight from '@/components/CursorLight'
import Skills from '@/components/Skills'
import ExperienceSection from '@/components/Experience/ExperienceSection'
import ProjectsSection from '@/components/Projects/ProjectsSection'

import GitHubIcon from '@/assets/icons/github.svg?react'
import EmailIcon from '@/assets/icons/email.svg?react'
import LinkedInIcon from '@/assets/icons/linkedin.svg?react'

function App() {
  return (
    <main>
      <Navbar />
      <CursorLight />
      <section className="flex flex-col justify-center h-screen gap-12 md:items-center md:justify-between md:flex-row section-container">
        <div>
          <h1 className="text-4xl font-bold text-white">Mario García Relaño</h1>
          <h2 className="mt-2 text-xl text-white">Programador Full-Stack</h2>
          <p className="max-w-lg mt-4">Combino backend y frontend para crear <span className='underlined-text'>soluciones web escalables</span>, con especial interés en integrar <span className='underlined-text'>inteligencia artificial</span> y automatización para mejorar procesos y explorar nuevas tecnologías.</p>
        </div>
        <div className="flex flex-row items-center gap-8 md:flex-col">
          <a href="#"><GitHubIcon className="text-white transition-transform duration-1000 w-7 hover:scale-125" /></a>
          <a href="#"><EmailIcon className="text-white transition-transform duration-1000 w-7 hover:scale-125"/></a>
          <a href="#"><LinkedInIcon className="w-6 text-white transition-transform duration-1000 hover:scale-125"/></a>
        </div>
      </section>
      <Skills />
      <ExperienceSection />
      <ProjectsSection />
      <section id='about' className="section-container">
        <h2 className="mb-12 text-3xl font-bold">Sobre mí</h2>
        <article className="space-y-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            <span className="underlined-text"> Ex veritatis</span>, iste quidem 
            <span className="underlined-text"> porro deleniti</span> vitae possimus neque aliquid sed distinctio quam vero 
            <span className="underlined-text"> provident rerum</span> quia ad nobis! Sint, incidunt quas?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem corporis 
            <span className="underlined-text"> molestias doloremque</span> maiores quaerat totam, ullam dolorum ipsam quasi? 
            Pariatur recusandae, numquam molestiae minus laborum molestias nam libero ratione quas?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit provident porro 
            <span className="underlined-text"> exercitationem dolore</span>. Magni, laboriosam labore modi, facere architecto mollitia quo sed vero 
            <span className="underlined-text"> necessitatibus</span>, adipisci numquam quod voluptatibus accusantium doloremque.
          </p>
        </article>
      </section>
    </main>
  )
}

export default App
