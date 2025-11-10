import type { Project } from '@/types'
import urlShortenerImg from '@/assets/projects/url-shortener-portada.png'

export const projects: Project[] = [
    {
        id: 'url-shortener',
        title: 'Url Shortener',
        technologies: ['React', 'NodeJS', 'TypeScript'],
        description:
        'Acortador de enlaces con alias personalizados. Incluye gestión de URLs tanto en modo demo como con autenticación y persistencia en backend.',
        codeUrl: 'https://github.com/mgarcia02/url-shortener',
        previewUrl: '#',
        image: urlShortenerImg,
    },
    
]