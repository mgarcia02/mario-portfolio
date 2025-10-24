function Navbar() {
    return(
        <nav className="fixed w-full p-10">
            <ul className="flex justify-center gap-6">
                <li><a href="#skills">Habilidades</a></li>
                <li><a href="#experience">Experiencia</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#about">Sobre mí</a></li>
            </ul>
        </nav>
    )
}

export default Navbar