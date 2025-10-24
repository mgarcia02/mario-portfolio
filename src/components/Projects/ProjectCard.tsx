import type { Project } from '@/types'

function ProjectCard({ title, technologies, description, codeUrl, previewUrl }:Project) {
    return(
        <article className="flex flex-col gap-6 md:flex-row">
            <div className="w-full bg-gray-400 rounded-sm h-52 md:w-1/2">
            </div>
            <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold">{title}</h3>
            <ul className="flex gap-5">
                {
                technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                ))
                }
            </ul>
            <p>{description}</p>
            <footer className="flex gap-5 mt-8">
                <a href={codeUrl} target="_blank">Code</a>
                <a href={previewUrl} target="_blank">Preview</a>
            </footer>
            </div>
        </article>
    )
}

export default ProjectCard