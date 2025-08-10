"use client"

import CountUp from 'react-countup'
import { Smile, Briefcase, Award } from "lucide-react"

const stats = [
    { label: "Clientes Satisfechos", value: 250, icon: Smile },
    { label: "Proyectos Entregados", value: 140, icon: Briefcase },
    { label: "Años de Experiencia", value: 5, icon: Award },
]

export function Stats() {
    return (
        <section className="py-20 px-4 dark:from-neutral-950 dark:to-neutral-900 dark:bg-gradient-to-b bg-slate-50">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestros Logros</h2>
                    <div className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-900"></div>
                    <p className="text-gray-600 dark:text-gray-400">Creciendo junto a nuestros clientes</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <stat.icon className="w-12 h-12 text-green-500 mb-4" />
                            <div className="text-4xl font-extrabold text-gray-900 dark:text-white">
                                <CountUp end={stat.value} duration={2} enableScrollSpy />
                            </div>
                            <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
