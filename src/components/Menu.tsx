import { profile } from '../data/portfolio'

const links = [
    { label: 'À PROPOS', href: '#about' },
    { label: 'PROJETS', href: '#projects' },
    { label: 'COMPÉTENCES', href: '#skills' },
    { label: 'EXPÉRIENCES', href: '#experience' },
    { label: 'CONTACT', href: '#contact' },
]

export default function Menu() {
    return (
        <header className='container-menu'>
            <a href='#top' className='logo'>
                {profile.firstName} {profile.lastName[0]}.
            </a>
            <nav className='menu-links'>
                {links.map((link) => (
                    <a key={link.href} href={link.href}>
                        {link.label}
                    </a>
                ))}
            </nav>
        </header>
    )
}
