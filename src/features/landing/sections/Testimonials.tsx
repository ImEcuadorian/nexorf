"use client"


import {AnimatedTestimonials} from "@/features/landing/ui/organisms/testimonials/animated-testimonials";

export function Testimonials() {
    const testimonials = [
        {
            quote:
                "La atención al detalle y las funciones innovadoras han transformado completamente nuestro flujo de trabajo. Es justo lo que necesitábamos.",
            name: "Sarah Chen",
            designation: "Gerente de Producto en TechFlow",
            src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            company: "TechFlow",
        },
        {
            quote:
                "La implementación fue fluida y los resultados superaron nuestras expectativas. La flexibilidad de la plataforma es impresionante.",
            name: "Michael Rodriguez",
            designation: "CTO en InnovateSphere",
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            company: "InnovateSphere",
        },
        {
            quote:
                "Esta solución ha mejorado significativamente la productividad de nuestro equipo. La interfaz intuitiva hace que tareas complejas sean simples.",
            name: "Emily Watson",
            designation: "Directora de Operaciones en CloudScale",
            src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            company: "CloudScale",
        },
        {
            quote:
                "Soporte excepcional y funciones robustas. Es raro encontrar un producto que cumpla todo lo que promete.",
            name: "James Kim",
            designation: "Líder de Ingeniería en DataPro",
            src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            company: "DataPro",
        },
        {
            quote:
                "La escalabilidad y el rendimiento han sido un cambio radical para nuestra organización. Altamente recomendado para empresas en crecimiento.",
            name: "Lisa Thompson",
            designation: "VP de Tecnología en FutureNet",
            src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            company: "FutureNet",
        },
    ]

    return (
        <section id="testimonials" className="py-20 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Testimonios</h2>
                    <div
                        className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-900"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Lo que nuestros clientes dicen de nosotros
                    </p>
                </div>
                <AnimatedTestimonials testimonials={testimonials} autoplay={true}/>
            </div>
        </section>
    )
}
