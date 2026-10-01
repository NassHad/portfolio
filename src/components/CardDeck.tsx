import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { OrbitControls, useGLTF } from '@react-three/drei'

export default function CardDeck() {
    const model = useGLTF('./card_deck.glb')
    return (
        <Canvas>
            <Perf position='top-left' />

            <OrbitControls makeDefault />

            <ambientLight intensity={1.5} />

            <primitive object={model.scene} />
        </Canvas>
    )
}
