type HeroTitleProps = { text: string }

const HeroTitle = ({text}: HeroTitleProps) => {
    return (
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
            {text}
        </h1>
    )
}

export default HeroTitle;