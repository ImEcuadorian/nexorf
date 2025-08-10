import {JSX} from "react";

export const pricingTiers = [
    {
        title: "Basic",
        description: "Ideal para pequeños negocios que recién comienzan",
        price: "$9/mo",
        src: "/img/plans/basic.jpg",
        ctaText: "Comenzar",
        ctaLink: "/login",
        content: (): JSX.Element => (
            <ul className="list-disc pl-4 space-y-2">
                <li>1 usuario incluido</li>
                <li>Panel estándar con acceso básico</li>
                <li>Soporte por correo electrónico</li>
                <li>Actualizaciones menores automáticas</li>
                <li>Almacenamiento limitado a 5GB</li>
                <li>Ideal para freelancers o negocios unipersonales</li>
            </ul>
        ),
    },
    {
        title: "Pro",
        description: "Perfecto para equipos que necesitan velocidad",
        price: "$29/mo",
        src: "/img/plans/pro.jpg",
        ctaText: "Comenzar",
        ctaLink: "/login",
        content: () => (
            <ul className="list-disc pl-4 space-y-2">
                <li>Hasta 5 usuarios</li>
                <li>Panel profesional con reportes avanzados</li>
                <li>Soporte por correo prioritario</li>
                <li>Integraciones con herramientas populares</li>
                <li>10GB de almacenamiento en la nube</li>
                <li>Acceso a funcionalidades beta</li>
            </ul>
        ),
    },
    {
        title: "Premium",
        description: "Incluye todas las funciones premium para crecer sin límites",
        price: "$59/mo",
        src: "/img/plans/premium.jpg",
        ctaText: "Comenzar",
        ctaLink: "/login",
        content: () => (
            <ul className="list-disc pl-4 space-y-2">
                <li>Usuarios ilimitados</li>
                <li>Integraciones API personalizadas</li>
                <li>Soporte por chat en tiempo real</li>
                <li>Reportes financieros y métricas avanzadas</li>
                <li>50GB de almacenamiento</li>
                <li>Auditoría de seguridad básica incluida</li>
            </ul>
        ),
    },
    {
        title: "Savage",
        description: "Para negocios que rompen esquemas y crecen rápido",
        price: "$99/mo",
        src: "/img/plans/savage.jpg",
        ctaText: "Comenzar",
        ctaLink: "/login",
        content: () => (
            <ul className="list-disc pl-4 space-y-2">
                <li>Auditoría mensual personalizada</li>
                <li>Backups automáticos diarios</li>
                <li>Consultoría mensual en gestión digital</li>
                <li>Soporte dedicado 24/7</li>
                <li>100GB de almacenamiento encriptado</li>
                <li>Integración con plataformas externas</li>
            </ul>
        ),
    },
    {
        title: "Demo",
        description: "Para quienes quieren probar sin compromiso",
        price: "$0",
        src: "/img/plans/free.jpg",
        ctaLink: "/login",
        ctaText: "Comenzar",
        content: (): JSX.Element => (
            <ul>
                <li>1 usuario incluido</li>
            </ul>
        )
    },
];
