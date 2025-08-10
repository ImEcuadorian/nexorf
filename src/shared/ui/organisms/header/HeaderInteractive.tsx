"use client";

import {useTheme} from "next-themes";
import {Moon, Sun, Menu, X} from "lucide-react";
import Link from "next/link";
import {Button} from "../../atoms/Button";
import {useEffect, useState} from "react";
import {Skeleton} from "@/shared/ui/molecules/Skeleton";
import ServicesMegaMenu from "./menu/ServicesMegaMenu";
import SolutionsMegaMenu from "@/shared/ui/organisms/header/menu/SolutionsMegaMenu";
import ResourcesMegaMenu from "@/shared/ui/organisms/header/menu/ResourcesMegaMenu";
import BusinessMegaMenu from "@/shared/ui/organisms/header/menu/BusinessMegaMenu";
import PricingMegaMenu from "@/shared/ui/organisms/header/menu/PricingMegaMenu";
import CompanyMegaMenu from "@/shared/ui/organisms/header/menu/CompanyMegaMenu";

export default function HeaderInteractive() {
    const {theme, setTheme} = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false)

    const toggleDarkMode = () => setTheme(theme === "dark" ? "light" : "dark");

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="flex items-center space-x-4">
                <Skeleton className="w-9 h-9 rounded-md"/>
                <Skeleton className="hidden md:block w-20 h-9 rounded-md"/>
                <Skeleton className="hidden md:block w-24 h-9 rounded-md"/>
            </div>
        )
    }

    return (
        <>
            <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="w-9 h-9">
                    {theme === "dark" ? <Sun className="h-4 w-4"/> : <Moon className="h-4 w-4"/>}
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden w-9 h-9"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X className="h-4 w-4"/> : <Menu className="h-4 w-4"/>}
                </Button>

                <Link href="/login">
                    <Button
                        size="sm"
                        className="hidden md:inline-block hover:bg-gray-100 hover:dark:bg-gray-800 text-black dark:text-white bg-transparent transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95"
                    >
                        Ingresa
                    </Button>
                </Link>

                <Link href="/register">
                    <Button
                        size="sm"
                        className="hidden md:inline-block bg-black hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-200 dark:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95"
                    >
                        Regístrate
                    </Button>
                </Link>
            </div>

            {isMenuOpen && (
                <div className="fixed inset-0 z-50 bg-white dark:bg-black flex flex-col">
                    <div className="flex justify-end p-4 border-b border-gray-200 dark:border-gray-800">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="Cerrar menú"
                        >
                            <X className="h-6 w-6"/>
                        </Button>
                    </div>
                    <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
                        <nav className="container mx-auto px-4 py-4 flex flex-col items-center space-y-4">
                            <ServicesMegaMenu isMobile/>
                            <SolutionsMegaMenu isMobile/>
                            <ResourcesMegaMenu isMobile/>
                            <BusinessMegaMenu isMobile/>
                            <PricingMegaMenu isMobile/>
                            <CompanyMegaMenu isMobile/>
                        </nav>
                    </div>
                    <div className="p-6 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 space-y-6">
                        <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                            <Button className="w-full text-lg py-4 rounded-lg bg-black dark:bg-white text-white dark:text-black shadow hover:shadow-lg">
                                Ingresa
                            </Button>
                        </Link>
                        <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                            <Button className="w-full text-lg py-4 rounded-lg bg-black dark:bg-white text-white dark:text-black shadow hover:shadow-lg">
                                Regístrate
                            </Button>
                        </Link>
                    </div>
                </div>
            )}        </>
    );
}
