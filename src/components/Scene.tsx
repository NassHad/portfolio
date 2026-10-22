import type { Ref } from 'react'
import Screen from './Screen'

export default function Scene({ ref }: { ref?: Ref<HTMLDivElement> }) {
    return (
        <div className='screen' ref={ref}>
            <Screen />
        </div>
    )
}
