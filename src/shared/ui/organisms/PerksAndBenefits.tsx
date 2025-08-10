"use client";

import { useEffect, useRef, useState } from "react";
import { Briefcase, Laptop, Building2, Coffee, Gift, PlaneTakeoff } from "lucide-react";

const perks = [
    {
        icon: Briefcase,
        title: "Salario y Beneficios",
        description: "Ofrecemos sueldos competitivos y beneficios de salud, además de bonificaciones trimestrales."
    },
    {
        icon: Laptop,
        title: "Herramientas",
        description: "Te proporcionamos el equipo necesario para que trabajes de forma eficiente desde el primer día."
    },
    {
        icon: Building2,
        title: "Ambiente de Oficina",
        description: "Un entorno colaborativo, moderno y enfocado en la productividad, ya sea remoto o presencial."
    },
    {
        icon: Coffee,
        title: "Café y Snacks",
        description: "Contamos con una barra de café y refrigerios saludables para mantenerte energizado."
    },
    {
        icon: Gift,
        title: "Swag de la Empresa",
        description: "Recibirás un kit de bienvenida con merchandising exclusivo de Nexorf."
    },
    {
        icon: PlaneTakeoff,
        title: "Equilibrio Vida-Trabajo",
        description: "Ofrecemos horarios flexibles, días libres y vacaciones para mantener un balance saludable."
    },
];

export function PerksAndBenefits() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setIsVisible(true),
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="bg-white dark:bg-black py-20 px-4">
            <div className="container mx-auto">
                <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Beneficios y Cultura</h2>
                        <div className="w-24 h-1 bg-black dark:bg-white mx-auto mb-8" />
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            Queremos que disfrutes tu trabajo y te sientas parte de algo grande 🚀
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {perks.map((perk, index) => (
                            <div
                                key={index}
                                className="group rounded-xl shadow-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all hover:-translate-y-1"
                            >
                                <div className="flex justify-center items-center mb-4">
                                    <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full">
                                        <perk.icon className="w-8 h-8 text-green-600 dark:text-green-300 group-hover:scale-110 transition-transform duration-300" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-2">{perk.title}</h3>
                                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                                    {perk.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
