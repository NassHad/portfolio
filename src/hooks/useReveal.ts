import { useLayoutEffect, type RefObject } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap'

// Fait apparaître (fondu + montée) les éléments [data-reveal] de la section
// quand ils entrent dans l'écran. Rien n'est animé si l'utilisateur
// a demandé à réduire les animations.
export function useReveal(scope: RefObject<HTMLElement | null>) {
    useLayoutEffect(() => {
        const mm = gsap.matchMedia(scope)

        mm.add('(prefers-reduced-motion: no-preference)', () => {
            const targets = gsap.utils.toArray<HTMLElement>('[data-reveal]')
            gsap.set(targets, { autoAlpha: 0, y: 40 })

            ScrollTrigger.batch(targets, {
                start: 'top 85%',
                once: true,
                onEnter: (batch) =>
                    gsap.to(batch, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'power3.out',
                        stagger: 0.08,
                    }),
            })
        })

        return () => mm.revert()
    }, [scope])
}
