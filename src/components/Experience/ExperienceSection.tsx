import ExperienceItem from '@/components/Experience/ExperienceItem'
import { experiences } from '@/data/experience'
import type { Experience } from '@/types'


function ExperienceSection() {
    return (
        <section id='experience' className="items-center section-container lg:items-start">
            <h2 className="mb-12 text-3xl font-bold">Experiencia laboral</h2>
            <ol className="relative pl-10 space-y-12 border-l-2 border-gray-200 border-opacity-10">
                {
                experiences.map((exp:Experience) => (
                    <ExperienceItem key={`${exp.company}-${exp.role}`} {...exp} />
                ))
                }
            </ol>
        </section>
    )
}

export default ExperienceSection