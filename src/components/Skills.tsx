import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { skills } from '../data/portfolio'

export default function Skills() {
    const container = useRef<HTMLElement>(null)
    useReveal(container)

    return (
        <section className='container-skills' id='skills' ref={container}>
            <h2 className='section-title' data-reveal>
                <span className='mono'>03</span> Compétences
            </h2>
            {skills.map((group) => (
                <div className='skills-group' key={group.category}>
                    <h3 className='mono' data-reveal>
                        {group.category}
                    </h3>
                    <ul>
                        {group.items.map((skill) => (
                            <li key={skill.name} data-reveal>
                                {skill.icon ? (
                                    <img src={skill.icon} alt='' />
                                ) : (
                                    <span className='monogram'>
                                        {skill.name.slice(0, 2)}
                                    </span>
                                )}
                                <span>{skill.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    )
}
