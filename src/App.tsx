function App() {

  return (
    <>
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
      <section className="px-12 py-20 text-center section-container">
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
      <section className="items-center section-container lg:items-start">
        <h2 className="mb-12 text-3xl font-bold">Experiencia laboral</h2>
        <ol className="relative pl-10 border-l-2 border-gray-300">
          <li>
            <div className="grid pb-12 md:grid-cols-5">
              <span className="absolute -left-[1px] text-5xl -translate-x-1/2 rounded-full">•</span>
              <div className="pb-8 md:col-span-2">
                <h3 className="text-2xl font-bold">Diseñador Web</h3>
                <h4 className="text-xl font-bold">Future Space</h4>
                <p><time>Septiembre 2022</time> a <time>Junio 2023</time></p>
              </div>
              <div className="md:col-span-3">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum necessitatibus eaque sint reiciendis, itaque alias quo. Aut doloribus velit culpa et ducimus, iure, praesentium natus quia a ratione impedit autem.</p>
              </div>
            </div>
          </li>
        </ol>
      </section>
      <section className="items-center section-container lg:items-start">
        <h2 className="mb-12 text-3xl font-bold">Proyectos</h2>
        <div>
          <article className="flex flex-col gap-6 md:flex-row">
            <div className="w-full bg-gray-200 rounded-sm h-52 md:w-1/2">
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold">TITULO</h3>
              <ul className="flex gap-5">
                <li>HTML</li>
                <li>CSS</li>
              </ul>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error ducimus asperiores quod, mollitia amet tempore modi qui velit. Ullam aliquid ut enim corrupti sed rem praesentium necessitatibus explicabo neque autem.</p>
              <footer className="flex gap-5 mt-8">
                <a href="#">Code</a>
                <a href="#">Preview</a>
              </footer>
            </div>
          </article>
        </div>
      </section>
      <section className="section-container">
        <h2 className="mb-12 text-3xl font-bold">Sobre mí</h2>
        <article className="space-y-6">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis, iste quidem porro deleniti vitae possimus neque aliquid sed distinctio quam vero provident rerum quia ad nobis! Sint, incidunt quas?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem corporis molestias doloremque maiores quaerat totam, ullam dolorum ipsam quasi? Pariatur recusandae, numquam molestiae minus laborum molestias nam libero ratione quas?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit provident porro exercitationem dolore. Magni, laboriosam labore modi, facere architecto mollitia quo sed vero necessitatibus, adipisci numquam quod voluptatibus accusantium doloremque.</p>
        </article>
      </section>
    </>
  )
}

export default App
