import Menu from './components/Menu'
import Presentation from './components/Presentation'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Screen from './components/Screen'

function App() {
    return (
        <>
            <Menu />
            <main>
                <Screen />
                <Presentation />
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
