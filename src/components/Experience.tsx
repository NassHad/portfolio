import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import { useReveal } from '../hooks/useReveal'
import { experiences } from '../data/portfolio'

export default function Experience() {
    const container = useRef<HTMLElement>(null)
    useReveal(container)

    useLayoutEffect(() => {
        const mm = gsap.matchMedia(container)

        mm.add('(prefers-reduced-motion: no-preference)', () => {
            gsap.from('.timeline-line', {
                scaleY: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.timeline',
                    start: 'top 70%',
                    end: 'bottom 70%',
                    scrub: true,
                },
            })
        })

        return () => mm.revert()
    }, [])

    return (
        <section
            className='container-experience'
            id='experience'
            ref={container}
        >
            <h2 className='section-title' data-reveal>
                <span className='mono'>04</span> Expériences
            </h2>
            <div className='timeline'>
                <span className='timeline-line' aria-hidden='true' />
                <ol>
                    {experiences.map((experience) => (
                        <li
                            key={experience.period + experience.company}
                            data-reveal
                        >
                            <p className='mono period'>{experience.period}</p>
                            <div>
                                <h3>
                                    {experience.role}
                                    <span> — {experience.company}</span>
                                </h3>
                                <p className='mono location'>
                                    {experience.location}
                                </p>
                                <p>{experience.description}</p>
                                <ul className='tags'>
                                    {experience.stack.map((tech) => (
                                        <li key={tech}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}
