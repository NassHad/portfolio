import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { profile } from '../data/portfolio'

export default function Contact() {
    const container = useRef<HTMLElement>(null)
    useReveal(container)

    return (
        <footer className='container-contact' id='contact' ref={container}>
            <h2 className='section-title' data-reveal>
                <span className='mono'>05</span> Contact
            </h2>
            <p className='contact-intro' data-reveal>
                Un projet, une idée, une collaboration ? Écrivez-moi.
            </p>
            <a
                href={`mailto:${profile.email}`}
                className='contact-email'
                data-reveal
            >
                {profile.email}
            </a>
            <div className='contact-bottom'>
                <ul>
                    {profile.links.map((link) => (
                        <li key={link.label}>
                            <a href={link.href} className='link'>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <p className='mono'>
                    © {new Date().getFullYear()} {profile.firstName}{' '}
                    {profile.lastName}
                </p>
            </div>
        </footer>
    )
}
