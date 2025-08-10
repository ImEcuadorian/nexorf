import {Facebook, Instagram, Twitter, Linkedin, Youtube, Github} from "lucide-react";
import SocialIcon from "@/shared/ui/atoms/SocialIcon";

const FooterSocials = () => {
    const socials = [
        {icon: Facebook, url: "https://facebook.com"},
        {icon: Instagram, url: "https://instagram.com"},
        {icon: Twitter, url: "https://twitter.com"},
        {icon: Linkedin, url: "https://linkedin.com"},
        {icon: Youtube, url: "https://youtube.com"},
        {icon: Github, url: "https://github.com"},
    ];

    return (
        <div className="flex space-x-4">
            {socials.map((social, i) => (
                <SocialIcon key={i} icon={social.icon} url={social.url}/>
            ))}
        </div>
    );
}

export default FooterSocials;