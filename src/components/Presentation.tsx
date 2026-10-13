import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import { profile } from '../data/portfolio'
import { SplitText } from 'gsap/SplitText'

export default function Presentation() {
    const container = useRef<HTMLElement>(null)

    useLayoutEffect(() => {
        const mm = gsap.matchMedia(container)

        mm.add('(prefers-reduced-motion: no-preference)', () => {
            gsap.registerPlugin(SplitText)
            gsap.timeline({ defaults: { ease: 'power4.out' } })
                .from('.line > span', {
                    yPercent: 110,
                    duration: 1.1,
                    stagger: 0.12,
                })
                .from(
                    '.hero-meta',
                    { autoAlpha: 0, y: 20, duration: 0.8 },
                    '-=0.6',
                )
            let split = SplitText.create('.presentation-text', {
                type: 'words',
            })

            gsap.from(split.lines, {
                y: 100,
                autoAlpha: 0,
                stagger: 0.05,
            })
        })

        return () => mm.revert()
    }, [])

    return (
        <section className='container-presentation' id='top' ref={container}>
            <h1 className='presentation-text'>
                <span className='line'>
                    <span>{profile.firstName}</span>
                </span>
                <span className='line'>
                    <span>{profile.lastName},</span>
                </span>
                <span className='line'>
                    <span className='accent'>{profile.role}</span>
                </span>
            </h1>
            <div className='hero-meta'>
                <p>{profile.tagline}</p>
                <p className='mono'>
                    {profile.location} · Disponible pour de nouveaux projets
                </p>
                <a href='#about' className='mono scroll-hint'>
                    Scroll ↓
                </a>
            </div>
        </section>
    )
}
