import Navbar from '@/components/Navbar'
import CursorLight from '@/components/CursorLight'
import ExperienceSection from '@/components/Experience/ExperienceSection'
import ProjectsSection from '@/components/Projects/ProjectsSection'

import GitHubIcon from '@/assets/icons/github.svg?react'
import EmailIcon from '@/assets/icons/email.svg?react'
import LinkedInIcon from '@/assets/icons/linkedin.svg?react'

import HTMLIcon from '@/assets/icons/html5.svg?react'
import CSSIcon from '@/assets/icons/css.svg?react'
import JavaScriptIcon from '@/assets/icons/javascript.svg?react'
import TypeScriptIcon from '@/assets/icons/typescript.svg?react'
import ReactIcon from '@/assets/icons/react.svg?react'
import JavaIcon from '@/assets/icons/java.svg?react'
import SpringBootIcon from '@/assets/icons/springboot.svg?react'
import MySQLIcon from '@/assets/icons/mysql.svg?react'
import DockerIcon from '@/assets/icons/docker.svg?react'
import GitIcon from '@/assets/icons/git.svg?react'
import PythonIcon from '@/assets/icons/python.svg?react'
import PyTorchIcon from '@/assets/icons/pytorch.svg?react'

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
          <a href="#"><GitHubIcon className="text-white w-7" /></a>
          <a href="#"><EmailIcon className="w-7 *:text-white "/></a>
          <a href="#"><LinkedInIcon className="w-6 text-white"/></a>
        </div>
      </section>
      <section id='skills' className="px-12 py-20 text-center section-container">
        <h2 className="mb-16 text-xl font-bold">Algunas de mis habilidades</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-x-20 md:gap-y-6">
          <div className='flex flex-col items-center gap-2'>
            <HTMLIcon className="w-8 text-gray-200 text-opacity-40" />
            <p>HTML</p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <CSSIcon className="w-8 text-gray-200 text-opacity-40" />
            <p>CSS</p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <JavaScriptIcon className="w-8 text-gray-200 text-opacity-40" />
            <p>Javascript</p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <TypeScriptIcon className="w-8 text-gray-200 text-opacity-40" />
            <p>Typescript</p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <ReactIcon className="w-8 text-gray-200 text-opacity-40" />
            <p>React</p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <JavaIcon className="w-8 text-gray-200 text-opacity-40" />
            <p>Java</p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <SpringBootIcon className="w-8 text-gray-200 text-opacity-40" />
            <p>Spring Boot</p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <MySQLIcon className="w-8 text-gray-200 text-opacity-40" />
            <p>MySQL</p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <DockerIcon className="w-8 text-gray-200 text-opacity-40" />
            <p>Docker</p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <GitIcon className="w-8 text-gray-200 text-opacity-40" />
            <p>Git</p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <PythonIcon className="w-8 text-gray-200 text-opacity-40" />
            <p>Python</p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <PyTorchIcon className="w-8 text-gray-200 text-opacity-40" />
            <p>PyTorch</p>
          </div>
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
