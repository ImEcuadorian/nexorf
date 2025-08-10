"use client"

import React, { useEffect, useState } from "react"

type ShapeType = "square" | "circle" | "x" | "diamond"

interface Shape {
    id: number
    type: ShapeType
    x: number
    size: number
    duration: number
    delay: number
    rotation: number
    opacity: number
}

export function GeometricBackground() {
    const [shapes, setShapes] = useState<Shape[]>([])
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const generateShapes: Shape[] = Array.from({ length: 30 }, (_, i) => ({
            id: i,
            type: ["square", "circle", "x", "diamond"][Math.floor(Math.random() * 4)] as ShapeType,
            x: Math.random() * 100,
            size: Math.random() * 50 + 20,
            duration: Math.random() * 30 + 20,
            delay: Math.random() * 10,
            rotation: Math.random() * 360,
            opacity: 0.06,
        }))
        setShapes(generateShapes)
    }, [])

    if (!mounted) return null

    const renderShape = (shape: Shape) => {
        const baseStyle: React.CSSProperties = {
            left: `${shape.x}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            opacity: shape.opacity,
            animationDuration: `${shape.duration}s`,
            animationDelay: `${shape.delay}s`,
            transform: `rotate(${shape.rotation}deg)`,
        }

        switch (shape.type) {
            case "square":
                return <div className="absolute bg-neutral-800/5 dark:bg-white/20 rounded-sm animate-float-down" style={baseStyle} />
            case "circle":
                return <div className="absolute bg-neutral-800/5 dark:bg-white/20 rounded-full animate-float-down" style={baseStyle} />
            case "diamond":
                return <div className="absolute bg-neutral-800/5 dark:bg-white/5 animate-float-down" style={{ ...baseStyle, transform: `rotate(45deg)` }} />
            case "x":
                return (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="absolute text-neutral-800/5 dark:text-white/20 animate-float-down" style={baseStyle}>
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                )
            default:
                return null
        }
    }

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {shapes.map((shape) => (
                <div key={shape.id}>{renderShape(shape)}</div>
            ))}
        </div>
    )
}
