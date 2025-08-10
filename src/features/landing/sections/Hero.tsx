"use client"

import { useEffect, useState } from "react"
import HeroContent from "../ui/organisms/hero/HeroContent"

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const scrollToContact = () => {
        const element = document.getElementById("contact")
        if (element) element.scrollIntoView({ behavior: "smooth" })
    }

    return <HeroContent isVisible={isVisible} onScrollToContact={scrollToContact} />
}
