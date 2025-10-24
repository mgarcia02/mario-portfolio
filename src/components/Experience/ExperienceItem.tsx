import type { Experience } from "@/types"

function ExperienceItem({ role, company, from, to, description }: Experience) {
    return (
        <li>
            <div className="grid pb-12 md:grid-cols-5">
            <span className="absolute -left-[1px] text-5xl -translate-x-1/2 rounded-full">•</span>
            <div className="pb-8 md:col-span-2">
                <h3 className="text-2xl font-bold">{role}</h3>
                <h4 className="text-xl font-bold">{company}</h4>
                <p><time>{from}</time> a <time>{to}</time></p>
            </div>
            <div className="md:col-span-3">
                <p>{description}</p>
            </div>
            </div>
        </li>
    )
}

export default ExperienceItem