"use client";

import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { encode } from "qss";
import React from "react";
import {
    AnimatePresence,
    motion,
    useMotionValue,
    useSpring,
} from "motion/react";
import {cn} from "@/shared/utils/utils";


type LinkPreviewProps = {
    children: React.ReactNode;
    url: string;
    className?: string;
    width?: number;
    height?: number;
    quality?: number;
    layout?: string;
} & (
    | { isStatic: true; imageSrc: string }
    | { isStatic?: false; imageSrc?: never }
    );

export const LinkPreview = ({
                                children,
                                url,
                                className,
                                width = 200,
                                height = 125,
                                quality = 50,
                                layout = "fixed",
                                isStatic = false,
                                imageSrc = "",
                            }: LinkPreviewProps) => {
    let src;
    if (!isStatic) {
        const params = encode({
            url,
            screenshot: true,
            meta: false,
            embed: "screenshot.url",
            colorScheme: "dark",
            "viewport.isMobile": true,
            "viewport.deviceScaleFactor": 1,
            "viewport.width": width * 3,
            "viewport.height": height * 3,
        });
        src = `https://api.microlink.io/?${params}`;
    } else {
        src = imageSrc;
    }

    const [isOpen, setOpen] = React.useState(false);
    const x = useMotionValue(0);
    const translateX = useSpring(x, { stiffness: 100, damping: 15 });

    const handleMouseMove = (event: React.MouseEvent) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const offsetX = (event.clientX - rect.left - rect.width / 2) / 2;
        x.set(offsetX);
    };

    return (
        <>
            <div className="hidden">
                <img src={src} width={width} height={height} alt="hidden preload" />
            </div>

            <HoverCardPrimitive.Root
                openDelay={50}
                closeDelay={100}
                onOpenChange={setOpen}
            >
                <HoverCardPrimitive.Trigger
                    onMouseMove={handleMouseMove}
                    className={cn("text-black dark:text-white cursor-pointer", className)}
                    asChild
                >
                    <span>{children}</span>
                </HoverCardPrimitive.Trigger>

                <AnimatePresence>
                    {isOpen && (
                        <HoverCardPrimitive.Portal forceMount>
                            <HoverCardPrimitive.Content
                                className="z-50 [transform-origin:var(--radix-hover-card-content-transform-origin)]"
                                side="top"
                                align="center"
                                sideOffset={12}
                                asChild
                            >
                                <motion.div
                                    key="preview"
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                        transition: {
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20,
                                        },
                                    }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    style={{ x: translateX }}
                                    className="shadow-xl rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden"
                                >
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-1"
                                        style={{ fontSize: 0 }}
                                    >
                                        <img
                                            src={src}
                                            width={width}
                                            height={height}
                                            className="rounded-lg"
                                            alt="preview"
                                        />
                                    </a>
                                </motion.div>
                            </HoverCardPrimitive.Content>
                        </HoverCardPrimitive.Portal>
                    )}
                </AnimatePresence>
            </HoverCardPrimitive.Root>
        </>
    );
};
