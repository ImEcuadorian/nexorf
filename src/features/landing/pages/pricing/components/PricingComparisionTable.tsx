"use client";

import { Check } from "lucide-react";

const pricingComparison = [
    {
        feature: "Bases",
        plans: ["Unlimited", "Unlimited", "Unlimited", "Unlimited", "Unlimited"],
    },
    {
        feature: "Records por base",
        plans: ["1,000", "5,000", "50,000", "100,000", "Ilimitado"],
    },
    {
        feature: "Almacenamiento por base",
        plans: ["2GB", "5GB", "20GB", "50GB", "100GB"],
    },
    {
        feature: "Historial de revisiones",
        plans: ["2 semanas", "6 meses", "1 año", "3 años", "5 años"],
    },
    {
        feature: "Soporte Prioritario",
        plans: [false, false, true, true, true],
    },
    {
        feature: "Integraciones externas",
        plans: [false, true, true, true, true],
    },
    {
        feature: "Usuarios incluidos",
        plans: ["1", "3", "5", "10", "Ilimitados"],
    },
];

const planTitles = ["Free", "Basic", "Pro", "Premium", "Savage"];

export function PricingComparisonTable() {
    return (
        <section className="bg-white dark:bg-black py-20 px-4">
            <div className="container mx-auto">
                <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">Comparativa de planes</h2>
                <div className="overflow-x-auto border rounded-xl shadow-lg">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-100 dark:bg-gray-800">
                        <tr>
                            <th className="text-left p-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                                Característica
                            </th>
                            {planTitles.map((title) => (
                                <th
                                    key={title}
                                    className="text-center p-4 text-sm font-semibold text-gray-700 dark:text-gray-300"
                                >
                                    {title}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-black divide-y divide-gray-100 dark:divide-gray-800">
                        {pricingComparison.map((row, i) => (
                            <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                                <td className="p-4 text-sm text-gray-800 dark:text-gray-200 font-medium whitespace-nowrap">
                                    {row.feature}
                                </td>
                                {row.plans.map((value, j) => (
                                    <td
                                        key={j}
                                        className="text-center p-4 text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap"
                                    >
                                        {typeof value === "boolean" ? (
                                            value ? (
                                                <Check className="w-5 h-5 mx-auto text-green-500" />
                                            ) : (
                                                <span className="text-gray-400">—</span>
                                            )
                                        ) : (
                                            value
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
