import ProjectCard from "@/components/Projects/ProjectCard"
import { projects } from "@/data/project"
import type { Project } from '@/types'

function ProjectsSection() {
    return(
        <section id="projects" className="items-center section-container lg:items-start">
            <h2 className="mb-12 text-3xl font-bold">Proyectos</h2>
            <div className="space-y-24">
                {
                projects.map((pro:Project) => (
                    <ProjectCard key={pro.id} {...pro} />
                ))
                }
            </div>
        </section>
    )
}

export default ProjectsSection