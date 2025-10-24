import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import ExperienceSection from '@/components/Experience/ExperienceSection'
import ProjectsSection from '@/components/Projects/ProjectsSection'

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updatePosition)
    return () => window.removeEventListener('mousemove', updatePosition)
  }, [])

  return (
    <main>
      <Navbar />
      <div
        className="fixed inset-0 z-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle 150px at ${position.x}px ${position.y}px, rgba(255, 189, 10, 0.025), transparent 500%)`,
        }}
      />
      <section className="flex flex-col justify-center h-screen gap-12 md:items-center md:justify-between md:flex-row section-container">
        <div>
          <h1 className="text-4xl font-bold text-white">Mario García Relaño</h1>
          <h2 className="mt-2 text-xl text-white">Programador Full-Stack</h2>
          <p className="max-w-lg mt-4">Combino backend y frontend para crear <span className='underlined-text'>soluciones web escalables</span>, con especial interés en integrar <span className='underlined-text'>inteligencia artificial</span> y automatización para mejorar procesos y explorar nuevas tecnologías.</p>
        </div>
        <div className="flex flex-row gap-8 md:flex-col">
          <a href="#">github</a>
          <a href="#">likedin</a>
          <a href="#">correo</a>
        </div>
      </section>
      <section id='skills' className="px-12 py-20 text-center section-container">
        <h2 className="mb-16 text-xl font-bold">Algunas de mis habilidades</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-x-20 md:gap-y-6">
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>Typescript</p>
          <p>Java</p>
          <p>Python</p>
          <p>PHP</p>
          <p>SQL</p>
          <p>Angular</p>
          <p>Vue</p>
          <p>Spring Boot</p>
          <p>Git</p>
        </div>
      </section>
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
