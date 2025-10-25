import { useEffect, useRef } from 'react'

function CursorLight() {
    const lightRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
        if (lightRef.current) {
            lightRef.current.style.setProperty('--x', `${e.clientX}px`)
            lightRef.current.style.setProperty('--y', `${e.clientY}px`)
        }
        }
        window.addEventListener('mousemove', updatePosition)
        return () => window.removeEventListener('mousemove', updatePosition)
    }, [])

    return <div ref={lightRef} className="cursor-light cursor-light-bg" />
    }

export default CursorLight