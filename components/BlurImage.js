import Image from 'next/image'
import { useState } from 'react'

function cn(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function BlurImage({ src, ...props }) {
    const [isLoading, setLoading] = useState(true)
    return (
        <Image
            {...props}
            src={src}
            className={cn(
                'duration-700 ease-in-out',
                isLoading
                    ? 'grayscale blur scale-110'
                    : 'grayscale-0 blur-0 scale-100'
            )}
            onLoadingComplete={() => setLoading(false)}
        />
    )
}