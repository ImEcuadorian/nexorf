"use client";

import { useEffect, useRef, useState } from "react";

export function BannerOffset({ children }: { children: React.ReactNode }) {
    const bannerRef = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const updateOffset = () => {
            const closed = localStorage.getItem("bannerClosed") === "true";
            setOffset(closed ? 0 : bannerRef.current?.offsetHeight || 0);
        };

        updateOffset();

        window.addEventListener("resize", updateOffset);
        return () => window.removeEventListener("resize", updateOffset);
    }, []);

    return (
        <>
            <div ref={bannerRef}>
                {children}
            </div>
            <div style={{ height: offset }} />
        </>
    );
}
