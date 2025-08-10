import HeroTitle from "@/features/landing/ui/atoms/hero/HeroTitle";
import HeroSubtitle from "@/features/landing/ui/atoms/hero/HeroSubtitle";

type HeroTextProps = {
    title: string
    subtitle: string
    description: string
}

const HeroText = ({title, subtitle, description}: HeroTextProps) => {
    return (
        <>
            <HeroTitle text={title}/>
            <HeroSubtitle text={subtitle}/>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-8 mt-4 max-w-4xl mx-auto leading-relaxed">
                {description}
            </p>
        </>
    )
}

export default HeroText