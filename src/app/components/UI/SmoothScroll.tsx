"use client";

import { ReactLenis } from '@studio-freight/react-lenis';

function SmoothScroll({children}: { children: React.ReactNode}) {
    return (
        <ReactLenis root options={{ lerp:0.15}}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScroll