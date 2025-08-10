"use client";

import Link from "next/link";
import React from "react";

export type MegaMenuItemProps = {
    href: string;
    icon: React.ReactNode;
    title: string;
    description: string;
};

const MegaMenuItem = ({href, icon, title, description}: MegaMenuItemProps) => {
    return (
        <Link
            href={href}
            className="flex items-center gap-4 hover:bg-gray-100 p-3 dark:hover:bg-gray-800 rounded-md transition"
            tabIndex={0}
        >
            <div className="w-8 h-8 flex items-center justify-center text-cyan-500">
                {icon}
            </div>
            <div>
                <p className="font-semibold">{title}</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{description}</p>
            </div>
        </Link>
    );
}

export default MegaMenuItem;