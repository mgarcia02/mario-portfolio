export type Experience = {
    role: string
    company: string
    from: string
    to: string
    description: string
}

export type Project = {
    id: string
    title: string
    technologies: string[]
    description: string
    codeUrl: string
    previewUrl: string
    //image: string // configuración futura
}