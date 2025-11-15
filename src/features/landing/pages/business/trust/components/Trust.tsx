"use client";

import { ShieldCheck, LockKeyhole, GlobeLock, FileText } from "lucide-react";
import {cn} from "@/shared/utils/utils";

const features = [
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "Cifrado de extremo a extremo",
        description: "Protegemos todos tus datos con cifrado AES-256 y conexiones TLS 1.3.",
    },
    {
        icon: <LockKeyhole className="w-8 h-8" />,
        title: "Autenticación avanzada",
        description: "Compatibilidad con 2FA, inicio de sesión biométrico y roles personalizados.",
    },
    {
        icon: <GlobeLock className="w-8 h-8" />,
        title: "Infraestructura segura",
        description: "Servidores en la nube auditados y redundantes (Azure, AWS, Google Cloud).",
    },
    {
        icon: <FileText className="w-8 h-8" />,
        title: "Cumplimiento legal",
        description: "Nos alineamos a normativas como la LOPD, GDPR y requisitos del SRI ecuatoriano.",
    },
];

export function TrustSection() {
    return (
        <section className="bg-gray-100 dark:bg-gray-950 py-20 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Seguridad y Confianza
                    </h2>
                    <div className="w-24 h-1 bg-black dark:bg-white mx-auto mb-6" />
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Nos tomamos tu seguridad en serio. Nexorf está construido con las mejores prácticas de la industria.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <FeatureCard key={feature.title} {...feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeatureCard({
                         title,
                         description,
                         icon,
                         index,
                     }: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800 px-6",
                (index === 0 || index === 2) && "lg:border-l dark:border-neutral-800",
                index < 2 && "lg:border-b dark:border-neutral-800"
            )}
        >
            <div className={cn(
                "absolute inset-0 h-full w-full transition duration-200 pointer-events-none",
                index < 2
                    ? "opacity-0 group-hover/feature:opacity-100 bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent"
                    : "opacity-0 group-hover/feature:opacity-100 bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent"
            )} />

            <div className="mb-4 relative z-10 text-green-600 dark:text-green-300">
                {icon}
            </div>
            <div className="text-lg font-semibold mb-2 relative z-10">
                <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-green-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-800 dark:text-white">
          {title}
        </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs relative z-10">
                {description}
            </p>
        </div>
    );
}
