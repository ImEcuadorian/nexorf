"use client";

import { Play, ImageIcon, Video, MessageCircle, Settings, Zap, Database, Server, Users } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { cn } from "@/shared/utils/utils";
import {AnimatedList, AnimatedListDemo} from "@/components/magicui/animated-list";
import { Marquee } from "@/components/magicui/marquee";

const resources = [
    {
        Icon: Play,
        name: "Demos Interactivas",
        description: "Prueba nuestros sistemas en tiempo real.",
        action: "Ver Demo",
        className: "col-span-3 lg:col-span-2",
        background: (
            <Marquee pauseOnHover className="absolute inset-0 opacity-20 dark:opacity-10 [--duration:25s]">
                {[...Array(10)].map((_, i) => (
                    <Play key={i} className="mx-6 text-blue-500 dark:text-blue-400" size={48} />
                ))}
            </Marquee>
        ),
    },
    {
        Icon: ImageIcon,
        name: "Catálogos Visuales",
        description: "Explora nuestros proyectos y casos de éxito.",
        action: "Ver Catálogo",
        className: "col-span-3 lg:col-span-1",
        background: (
            <Marquee reverse pauseOnHover className="absolute inset-0 opacity-20 dark:opacity-10 [--duration:30s]">
                {[...Array(8)].map((_, i) => (
                    <ImageIcon key={i} className="mx-6 text-green-500 dark:text-green-400" size={48} />
                ))}
            </Marquee>
        ),
    },
    {
        Icon: Video,
        name: "Videos Explicativos",
        description: "Tutoriales y presentaciones de nuestras soluciones.",
        action: "Ver Videos",
        className: "col-span-3 lg:col-span-1",
        background: (
            // Lista animada con mensajes de video
            <AnimatedList className="absolute inset-0 p-4 scale-75 opacity-30 dark:opacity-20">
                {[...Array(5)].map((_, i) => (
                    <figure
                        key={i}
                        className={cn(
                            "mb-3 rounded-xl bg-white bg-opacity-40 p-2 shadow-sm dark:bg-gray-800 dark:bg-opacity-30",
                            "text-center text-sm font-semibold text-gray-800 dark:text-gray-200"
                        )}
                    >
                        Video Tutorial #{i + 1}
                    </figure>
                ))}
            </AnimatedList>
        ),
    },
    {
        Icon: Settings,
        name: "Configuración Avanzada",
        description: "Personaliza tu experiencia con opciones detalladas.",
        action: "Configurar",
        className: "col-span-3 lg:col-span-2",
        background: (
            <AnimatedList className="absolute inset-0 p-4 opacity-20 dark:opacity-10">
                {["Opciones", "Preferencias", "Seguridad", "Notificaciones"].map((item, i) => (
                    <figure
                        key={i}
                        className="mb-2 rounded-md bg-gray-200 bg-opacity-30 p-2 text-center font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                    >
                        {item}
                    </figure>
                ))}
            </AnimatedList>
        ),
    },
    {
        Icon: MessageCircle,
        name: "Atención Personalizada",
        description: "Resolvemos todas tus dudas de forma directa.",
        action: "Contactar",
        className: "col-span-3 lg:col-span-2",
        background: (
            <AnimatedListDemo className="absolute right-0 top-2 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
        ),
    },
    {
        Icon: Zap,
        name: "Automatizaciones",
        description: "Optimiza procesos con flujos automáticos inteligentes.",
        action: "Ver Automatizaciones",
        className: "col-span-3 lg:col-span-1",
        background: (
            <Marquee reverse pauseOnHover className="absolute inset-0 opacity-10 dark:opacity-5 [--duration:28s]">
                {[...Array(15)].map((_, i) => (
                    <Zap key={i} className="mx-6 text-yellow-400 dark:text-yellow-300" size={40} />
                ))}
            </Marquee>
        ),
    },
    {
        Icon: Database,
        name: "Gestión de Datos",
        description: "Centraliza y administra toda tu información eficazmente.",
        action: "Gestionar Datos",
        className: "col-span-3 lg:col-span-1",
        background: (
            <AnimatedList className="absolute inset-0 p-4 opacity-25 dark:opacity-15">
                {["Bases de datos", "Consultas", "Reportes", "Backup"].map((item, i) => (
                    <figure
                        key={i}
                        className="mb-2 rounded-md bg-blue-200 bg-opacity-30 p-2 text-center font-semibold text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                    >
                        {item}
                    </figure>
                ))}
            </AnimatedList>
        ),
    },
    {
        Icon: Server,
        name: "Hosting Seguro",
        description: "Infraestructura robusta para máxima disponibilidad.",
        action: "Conoce Más",
        className: "col-span-3 lg:col-span-2",
        background: (
            <Marquee pauseOnHover className="absolute inset-0 opacity-15 dark:opacity-10 [--duration:22s]">
                {[...Array(12)].map((_, i) => (
                    <Server key={i} className="mx-6 text-gray-400 dark:text-gray-600" size={42} />
                ))}
            </Marquee>
        ),
    },

];

export function Resources() {
    return (
        <section className="py-20 px-4 transition-colors duration-500 relative">
            <div className="container mx-auto max-w-screen-xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                        Recursos Disponibles
                    </h2>
                    <div className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-900"></div>
                    <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
                        Todo lo que necesitas para conocer nuestras soluciones
                    </p>
                </div>

                <BentoGrid>
                    {resources.map((item, idx) => (
                        <BentoCard
                            key={idx}
                            Icon={item.Icon}
                            href="#"
                            cta={item.action}
                            name={item.name}
                            description={item.description}
                            className={item.className}
                            background={item.background}
                            style={{ position: "relative", overflow: "hidden" }}
                        >
                            <div className="flex justify-center items-center h-full pointer-events-none" />
                        </BentoCard>
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}
