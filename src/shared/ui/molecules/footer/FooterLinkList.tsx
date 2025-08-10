import Link from "next/link";

type FooterLink = { label: string; href: string };

type Props = {
    title: string;
    links: FooterLink[];
};

const FooterLinkList = ({ title, links }: Props) => {
    return (
        <div>
            <h3 className="text-white font-bold mb-4">{title}</h3>
            <ul className="space-y-2 text-gray-400">
                {links.map((link, i) => (
                    <li key={i}>
                        <Link
                            className="hover:text-white"
                            href={link.href}>{link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FooterLinkList;