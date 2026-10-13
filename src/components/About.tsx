import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { profile } from '../data/portfolio'

export default function About() {
    const container = useRef<HTMLElement>(null)
    useReveal(container)

    return (
        <section className='container-about' id='about' ref={container}>
            <h2 className='section-title' data-reveal>
                <span className='mono'>01</span> À propos
            </h2>
            <div className='about-grid'>
                {profile.bio.map((paragraph) => (
                    <p key={paragraph} data-reveal>
                        {paragraph}
                    </p>
                ))}
            </div>
            <ul className='about-stats'>
                {profile.stats.map((stat) => (
                    <li key={stat.label} data-reveal>
                        <strong>{stat.value}</strong>
                        <span className='mono'>{stat.label}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}
