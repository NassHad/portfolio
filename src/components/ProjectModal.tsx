import { useEffect, useRef } from 'react'
import type { Project } from '../data/portfolio'

type Props = {
    project: Project | null
    onClose: () => void
}

// <dialog> natif : fermeture avec Échap, focus gardé dans la modale
// et affichage au-dessus du reste de la page.
export default function ProjectModal({ project, onClose }: Props) {
    const dialog = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        if (project) dialog.current?.showModal()
        else dialog.current?.close()
    }, [project])

    return (
        <dialog
            className='project-modal'
            ref={dialog}
            onClose={onClose}
            onClick={(event) => {
                // Clic sur le fond (en dehors du contenu)
                if (event.target === dialog.current) onClose()
            }}
            aria-labelledby='project-modal-title'
        >
            {project && (
                <div className='project-modal-inner'>
                    <button
                        type='button'
                        className='project-modal-close'
                        onClick={onClose}
                        aria-label='Fermer'
                    >
                        ×
                    </button>
                    <img
                        src={project.image}
                        alt={`Aperçu du projet ${project.title}`}
                    />
                    <div className='project-modal-body'>
                        <p className='mono'>
                            {project.year} · {project.role}
                        </p>
                        <h3 id='project-modal-title'>{project.title}</h3>
                        {project.details.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                        <ul className='tags'>
                            {project.tags.map((tag) => (
                                <li key={tag}>{tag}</li>
                            ))}
                        </ul>
                        <a href={project.link} className='link'>
                            Visiter le site →
                        </a>
                    </div>
                </div>
            )}
        </dialog>
    )
}
