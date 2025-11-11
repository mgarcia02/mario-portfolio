import type { Project } from '@/types'
import { useEffect, useState } from 'react'

function ProjectCard({ title, technologies, description, codeUrl, image }:Project) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    const visibleTechs = technologies.slice(0, isMobile ? 2 : 3)

    return(
        <article className="flex flex-col gap-6 md:flex-row">
            <div className="w-full overflow-hidden rounded-sm h-52 md:w-1/2 opacity-90">
                <img
                src={image}
                alt={title}
                className="object-cover w-full h-full"
                />
            </div>
            <div className="flex flex-col w-full gap-2 md:w-1/2">
                <h3 className="text-2xl font-bold">{title}</h3>
                <ul className="flex gap-5">
                    {
                    visibleTechs.map((tech) => (
                        <li className='z-20 p-2 pl-4 pr-4 text-xs tracking-widest rounded-full bg-primary' key={tech}>{tech}</li>
                    ))
                    }
                </ul>
                <p>{description}</p>
                <footer className="flex gap-5 mt-6">
                    <a className='button' href={codeUrl} target="_blank">
                        <span className="actual-text">&nbsp;Código&nbsp;</span>
                        <span aria-hidden="true" className="hover-text">&nbsp;Código&nbsp;</span>
                    </a>
                </footer>
            </div>
        </article>
    )
}

export default ProjectCard