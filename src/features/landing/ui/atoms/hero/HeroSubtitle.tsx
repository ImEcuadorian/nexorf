type HeroSubtitleProps = { text: string }

const HeroSubtitle = ({text}: HeroSubtitleProps) => {
    return (
        <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-gray-600 dark:text-gray-400 mt-2">
      {text}
    </span>
    )
}

export default HeroSubtitle;