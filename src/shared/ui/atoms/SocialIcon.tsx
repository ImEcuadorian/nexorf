import {LucideIcon} from "lucide-react";

type Props = {
    icon: LucideIcon;
    url: string;
};

const SocialIcon = ({icon: Icon, url}: Readonly<Props>) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white text-gray-400"
        >
            <Icon className="w-5 h-5"/>
        </a>
    );
}

export default SocialIcon;