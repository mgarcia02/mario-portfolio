function Navbar() {
    return(
        <nav className="fixed z-10 w-full p-10 bg-primary/80 backdrop-blur">
            <ul className="flex justify-center gap-6">
                <li>
                    <a href="#skills" className="relative group">
                        <span className="tracking-widest">
                            Habilidades
                        </span>
                        <span className="underlined-nav"></span>
                    </a>
                </li>
                <li>
                    <a href="#experience" className="relative group">
                        <span className="tracking-widest">
                            Experiencia
                        </span>
                        <span className="underlined-nav"></span>
                    </a>
                </li>
                <li>
                    <a href="#projects" className="relative group">
                        <span className="tracking-widest">
                            Proyectos
                        </span>
                        <span className="underlined-nav"></span>
                    </a>
                </li>
                <li>
                    <a href="#about" className="relative group">
                        <span className="tracking-widest">
                            Sobre mí
                        </span>
                        <span className="underlined-nav"></span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar