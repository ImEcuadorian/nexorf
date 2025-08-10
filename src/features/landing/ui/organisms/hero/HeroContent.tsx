import NexorfLogo from "@/shared/ui/molecules/NexorfLogo"
import { Button } from "@/shared/ui/atoms/Button"
import HeroText from "@/features/landing/ui/molecules/hero/HeroText";

type HeroContentProps = {
    isVisible: boolean
    onScrollToContact: () => void
}

export default function HeroContent({ isVisible, onScrollToContact }: HeroContentProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
            <div className="container mx-auto text-center">
                <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    <div className="mb-8 flex justify-center">
                        <div className="transition-transform duration-700 ease-in-out hover:rotate-[15deg] hover:scale-105">
                            <NexorfLogo size="extraLarge" className="transition-colors duration-500" />
                        </div>
                    </div>

                    <HeroText
                        title="Nexorf"
                        subtitle="Ingeniería de Software Personalizada"
                        description="Tecnología con propósito, diseño con visión, soluciones con resultados."
                    />

                    <Button
                        size="lg"
                        className="text-lg px-8 py-6 hover:font-semibold bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95"
                        onClick={onScrollToContact}
                    >
                        Solicita una cotización gratuita
                    </Button>
                </div>
            </div>
        </section>
    )
}
