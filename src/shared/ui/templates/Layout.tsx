import React from "react"
import {GeometricBackground} from "@/shared/ui/organisms/GeometricBackground";
import {Footer} from "@/shared/ui/organisms/footer/Footer";
import {ScrollToTop} from "@/shared/ui/organisms/scroll/ScrollToTop";
import Header from "@/shared/ui/organisms/header/Header";
import WhatsAppButton from "@/shared/ui/atoms/WhatsAppButton";


const MainLayout = ({
                        children,
                    }: Readonly<{
    children: React.ReactNode
}>) => {

    return (
        <main
            className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-x-hidden transition-all duration-300 ease-in-out"
        >
            <WhatsAppButton />
            <GeometricBackground/>
            <ScrollToTop/>
            <Header />
            {children}
            <Footer/>
        </main>
    )
}

export default MainLayout;

