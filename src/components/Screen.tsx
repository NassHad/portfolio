import {
    Float,
    PerspectiveCamera,
    PresentationControls,
    useGLTF,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

function Model() {
    const model = useGLTF('./models/flat-screen.glb')
    return <primitive object={model.scene} scale={1.5} />
}

export default function Screen() {
    return (
        <>
            <Canvas>
                <PerspectiveCamera
                    fov={45}
                    near={0.1}
                    far={10000}
                    makeDefault
                    position={[0, 0, 10]}
                />
                <ambientLight intensity={1.5} />
                <directionalLight position={[3, 3, 5]} intensity={2} />
                <PresentationControls
                    global
                    rotation={[0.13, 0.1, 0]}
                    polar={[-0.4, 0.2]}
                    azimuth={[-1, 0.75]}
                    damping={0.1}
                    snap
                >
                    <Suspense fallback={null}>
                        <Float rotationIntensity={0.4}>
                            <Model />
                        </Float>
                    </Suspense>
                </PresentationControls>
            </Canvas>
        </>
    )
}
