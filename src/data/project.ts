import type { Project } from '@/types'

export const projects: Project[] = [
    {
        id: 'portfolio',
        title: 'Portfolio personal',
        technologies: ['React', 'TypeScript', 'Tailwind'],
        description:
        'Aplicación web responsiva para mostrar experiencia, proyectos y contacto. Implementación de alias, diseño modular y buenas prácticas profesionales.',
        codeUrl: '#',
        previewUrl: '#',
        //image: '/assets/a.png',
    },
    {
        id: 'taskflow',
        title: 'TaskFlow',
        technologies: ['Next.js', 'MongoDB', 'n8n'],
        description:
        'Gestor de tareas con automatización de flujos usando n8n. CRUD completo, autenticación y panel de administración.',
        codeUrl: '#',
        previewUrl: '#',
        //image: '/assets/b.png',
    },
]