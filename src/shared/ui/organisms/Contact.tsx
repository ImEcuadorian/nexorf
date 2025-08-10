import {Button} from "@/shared/ui/atoms/Button";

export function Contact() {
    return (
        <section id="contact" className="py-20 px-4 bg-white dark:bg-black">
            <div className="container mx-auto max-w-2xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold">Contáctanos</h2>
                    <p className="text-gray-600 dark:text-gray-400">Estamos listos para ayudarte</p>
                </div>
                <form className="space-y-6">
                    <input type="text" placeholder="Tu nombre" className="w-full p-4 border rounded" />
                    <input type="email" placeholder="Tu correo" className="w-full p-4 border rounded" />
                    <textarea placeholder="Mensaje..." className="w-full p-4 border rounded h-32" />
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Enviar mensaje</Button>
                </form>
            </div>
        </section>
    )
}
