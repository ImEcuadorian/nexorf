import FooterLinkList from "../../molecules/footer/FooterLinkList";
import FooterContact from "@/shared/ui/molecules/footer/FooterContact";
import NexorfLogo from "@/shared/ui/molecules/NexorfLogo";
import FooterSocials from "@/shared/ui/molecules/footer/FooterSocials";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-black dark:from-neutral-950 dark:to-neutral-900 dark:bg-gradient-to-b text-white px-6 py-20">
            <div className="container mx-auto grid md:grid-cols-6 gap-6 text-sm">
                <FooterLinkList
                    title="Producto"
                    links={[
                        { label: "ERP", href: "#" },
                        { label: "POS", href: "#" },
                        { label: "Apps móviles", href: "#" },
                        { label: "Webs", href: "#" },
                        { label: "E-Commerce", href: "#" },
                    ]}
                />
                <FooterLinkList
                    title="Negocios"
                    links={[
                        { label: "PyMEs", href: "#" },
                        { label: "Grandes Corporaciones", href: "#" },
                        { label: "Negocios Especializados", href: "#" },
                        { label: "Emprendedores", href: "#" },
                        { label: "Instituciones y Organizaciones", href: "#" },
                    ]}
                />
                <FooterLinkList
                    title="Recursos"
                    links={[
                        { label: "Blog", href: "/blog" },
                        { label: "Demo", href: "#" },
                        { label: "FAQs", href: "/faq" },
                    ]}
                />
                <FooterLinkList
                    title="Legal"
                    links={[
                        { label: "Términos y condiciones", href: "#" },
                        { label: "Política de privacidad", href: "#" },
                        { label: "Política de cookies", href: "#" },
                        { label: "Licencias y tecnologías", href: "#" },
                    ]}
                />
                <FooterLinkList
                    title="Empresa"
                    links={[
                        { label: "Nosotros", href: "#about" },
                        { label: "Contáctanos", href: "/contact" },
                        { label: "Trabaja con nosotros", href: "/careers" },
                    ]}
                />
                <div>
                    <FooterContact />
                    <FooterSocials />
                </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-xs">
                <NexorfLogo className="w-6 h-6 inline-block mr-2" fill="#ffffff" />
                © {year} Nexorf · Todos los derechos reservados · Quito, Ecuador
            </div>
        </footer>
    );
}
