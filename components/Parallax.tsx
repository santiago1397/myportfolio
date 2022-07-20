import React, { useEffect, useState, useRef } from 'react'
import { useParallax } from "react-scroll-parallax";

type Props = {
    title: string,
    children: JSX.Element,
};

export function Parallax({ children, lmao }: { children: React.ReactNode, lmao: string }) {
    const target = useRef(null);

    const train = useParallax<HTMLDivElement>({
        speed: -15,
        targetElement: target.current || undefined,
    })

    const [offsetY, setOffsetY] = useState<number>(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return ( 

        <div ref={train.ref} style={{zIndex: '1', position: 'relative'}}>
            {children}
        </div>
        

    )

}

export default Parallax