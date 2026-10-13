import { Float, PresentationControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

function Model() {
    const model = useGLTF('./models/flat-screen.glb')
    return <primitive object={model.scene} />
}

export default function Screen() {
    return (
        <div className='screen'>
            <Canvas>
                <PresentationControls global
                    rotation={ [ 0.13, 0.1, 0 ] }
                    polar={ [ - 0.4, 0.2 ] }
                    azimuth={ [ - 1, 0.75 ] }
                    damping={ 0.1 }
                snap>
                  <ambientLight intensity={1.5} />
                  <directionalLight position={[3, 3, 5]} intensity={2} />
                  <Suspense fallback={null}>
                      <Model />
                  </Suspense>
                </PresentationControls>
            </Canvas>
        </div>
    )
}
