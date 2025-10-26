import type { Project } from '@/types'

function ProjectCard({ title, technologies, description, codeUrl }:Project) {
    return(
        <article className="flex flex-col gap-6 md:flex-row">
            <div className="w-full bg-gray-400 rounded-sm h-52 md:w-1/2">
            </div>
            <div className="flex flex-col w-full gap-2 md:w-1/2">
                <h3 className="text-2xl font-bold">{title}</h3>
                <ul className="flex gap-5">
                    {
                    technologies.map((tech) => (
                        <li className='z-20 p-2 pl-4 pr-4 tracking-widest rounded-full bg-primary' key={tech}>{tech}</li>
                    ))
                    }
                </ul>
                <p>{description}</p>
                <footer className="flex gap-5 mt-8">
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