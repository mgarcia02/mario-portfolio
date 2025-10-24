import Navbar from '@/components/Navbar'
import ExperienceSection from '@/components/Experience/ExperienceSection'
import ProjectsSection from '@/components/Projects/ProjectsSection'

function App() {

  return (
    <main className='bg-slate-200'>
      <Navbar />
      <section className="flex flex-col justify-center h-screen gap-12 md:items-center md:justify-between md:flex-row section-container">
        <div>
          <h1 className="text-4xl font-bold">Mario García Relaño</h1>
        <h2 className="mt-2 text-2xl text-gray-700">Programador Full-Stack</h2>
        <p className="max-w-lg mt-4 text-gray-600">Combino backend y frontend para crear soluciones web escalables, con especial interés en integrar inteligencia artificial y automatización para mejorar procesos y explorar nuevas tecnologías.</p>
        </div>
        <div className="flex flex-row gap-8 md:flex-col">
          <p>github</p>
          <p>likedin</p>
          <p>correo</p>
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis, iste quidem porro deleniti vitae possimus neque aliquid sed distinctio quam vero provident rerum quia ad nobis! Sint, incidunt quas?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem corporis molestias doloremque maiores quaerat totam, ullam dolorum ipsam quasi? Pariatur recusandae, numquam molestiae minus laborum molestias nam libero ratione quas?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit provident porro exercitationem dolore. Magni, laboriosam labore modi, facere architecto mollitia quo sed vero necessitatibus, adipisci numquam quod voluptatibus accusantium doloremque.</p>
        </article>
      </section>
    </main>
  )
}

export default App
