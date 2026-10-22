import Menu from './components/Menu'
// import Presentation from './components/Presentation'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Scene from './components/Scene'

import { gsap } from './lib/gsap'
import { useEffect, useRef } from 'react'

function App() {
    const mainRef = useRef<HTMLElement>(null)
    const sceneRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const scene = sceneRef.current!

            gsap.timeline({
                scrollTrigger: {
                    trigger: mainRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1,
                    invalidateOnRefresh: true,
                    onUpdate: (self) => {},
                },
            }).to(scene, {
                ease: 'none',
                x: '-25vw',
                // Descend jusqu'en bas de la fenêtre sans en sortir
                y: () =>
                    window.innerHeight - scene.offsetTop - scene.offsetHeight,
            })
        })

        return () => ctx.revert()
    }, [])
    return (
        <>
            <Menu />
            <main ref={mainRef}>
                <Scene ref={sceneRef} />
                {/*<Presentation />*/}
                <About />
                <Projects />
                <Skills />
                <Experience />
            </main>
            <Contact />
        </>
    )
}

export default App
