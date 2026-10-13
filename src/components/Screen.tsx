import { useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'

function Model() {
    const model = useGLTF('./models/flat-screen.glb')
    return <primitive object={model.scene} />
}

export default function Screen() {
    return (
        <div className='screen'>
            <Canvas>
                <OrbitControls makeDefault />

                <ambientLight intensity={1.5} />
                <directionalLight position={[3, 3, 5]} intensity={2} />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
            </Canvas>
        </div>
    )
}
