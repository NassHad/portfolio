import { useRef, useState, type CSSProperties } from 'react'
import { useReveal } from '../hooks/useReveal'
import { projects, type Project } from '../data/portfolio'
import ProjectModal from './ProjectModal'

// Le projet le plus récent est le premier de la liste
const project = projects[0]

export default function Projects() {
    const container = useRef<HTMLElement>(null)
    const [selected, setSelected] = useState<Project | null>(null)
    useReveal(container)

    return (
        <section className='container-projects' id='projects' ref={container}>
            <h2 className='section-title' data-reveal>
                <span className='mono'>02</span> Projets
            </h2>
            <article
                className='project-featured'
                style={{ '--card-color': project.color } as CSSProperties}
            >
                <div className='project-featured-image' data-reveal>
                    <img
                        src={project.image}
                        alt={`Aperçu du projet ${project.title}`}
                    />
                </div>
                <div className='project-featured-body' data-reveal>
                    <p className='mono status'>
                        <span className='status-dot' aria-hidden='true' />
                        En cours · {project.year}
                    </p>
                    <h3>{project.title}</h3>
                    <p className='mono'>{project.role}</p>
                    <p className='description'>{project.description}</p>
                    <ul className='tags'>
                        {project.tags.map((tag) => (
                            <li key={tag}>{tag}</li>
                        ))}
                    </ul>
                    <button
                        type='button'
                        className='link'
                        onClick={() => setSelected(project)}
                    >
                        Voir le projet →
                    </button>
                </div>
            </article>
            <ProjectModal
                project={selected}
                onClose={() => setSelected(null)}
            />
        </section>
    )
}
