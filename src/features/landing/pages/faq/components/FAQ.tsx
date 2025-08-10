const faqs = [
    {
        question: "¿Cuánto tiempo tarda un desarrollo?",
        answer: "Dependiendo de la complejidad, puede tomar de 2 a 6 semanas.",
    },
    {
        question: "¿Tienen soporte post-venta?",
        answer: "Sí, ofrecemos soporte técnico personalizado por WhatsApp y correo.",
    },
    {
        question: "¿Aceptan pagos mensuales?",
        answer: "Sí, manejamos planes flexibles según tus necesidades.",
    },
]

export function FAQ() {
    return (
        <section className="py-20 px-4 bg-white dark:bg-black min-h-screen">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Preguntas Frecuentes</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-4">
                        Resuelve tus dudas antes de contactarnos
                    </p>
                </div>
                <div className="max-w-3xl mx-auto space-y-6">
                    {faqs.map((faq, index) => (
                        <details key={index} className="group border rounded-lg p-4 cursor-pointer">
                            <summary className="text-lg font-semibold text-gray-800 dark:text-white group-open:text-green-500 transition-all duration-300">
                                {faq.question}
                            </summary>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    )
}
