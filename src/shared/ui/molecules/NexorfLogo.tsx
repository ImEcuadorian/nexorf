"use client"
import {useTheme} from "next-themes"
import {useEffect, useState} from "react"
import NexorfIcon from "@/shared/ui/atoms/NexorfIcon";
import {Skeleton} from "@/shared/ui/molecules/Skeleton";

interface NexorfLogoProps {
    className?: string
    size?: "small" | "medium" | "large" | "extraLarge" | "extraExtraLarge"
    fill?: string
}

const NexorfLogo = ({
                        className = "",
                        size = "medium",
                        fill = "#000000",
                    }: Readonly<NexorfLogoProps>) => {
    const {theme} = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const sizeClasses = {
        small: "w-8 h-8",
        medium: "w-16 h-16",
        large: "w-32 h-32",
        extraLarge: "w-48 h-48",
        extraExtraLarge: "w-64 h-64",
    }

    if (!mounted) {
        return (
            <Skeleton
                className={`${sizeClasses[size]} ${className} rounded-md`}
            />
        )
    }

    const isDarkMode = theme === "dark"
    const effectiveFill = isDarkMode ? "#FFFFFF" : fill

    return (
        <NexorfIcon
            fill={effectiveFill}
            className={`${sizeClasses[size]} ${className} transition-colors duration-300 ease-in-out`}
        />
    )
}

export default NexorfLogo;