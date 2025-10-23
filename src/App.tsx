function App() {

  return (
    <>
      <section className="flex flex-col justify-center h-screen gap-12 px-12 py-12 bg-gray-300 md:items-center md:justify-between lg:py-48 lg:px-48 md:flex-row">
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
      <section className="items-center px-12 py-12 lg:py-24 lg:px-48 lg:items-start">
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
      <section className="items-center px-12 py-12 lg:py-24 lg:px-48 lg:items-start">
        <h2 className="mb-12 text-3xl font-bold">Proyectos</h2>
        <p>HOLA</p>
      </section>
      <section>
        <h2>Sobre mi/ habilidades</h2>
        <p>HOLA</p>
      </section>
    </>
  )
}

export default App
