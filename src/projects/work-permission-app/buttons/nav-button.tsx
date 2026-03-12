"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    isMobile?: boolean;
    name: string;
    href: string;
}

export default function NavButton({ name, href }: Props) {
    const pathname = usePathname();

    console.log("pathname", pathname)
    console.log("href", href)

    const isActive = pathname === href || pathname.startsWith(`${href}/`);

    console.log("is_active", isActive)

    return (
        <Link
            href={href}
            className={
                "no-underline text-lg font-bold rounded-t-lg px-3 py-2 duration-50 border-b-0 border-b-transparent transition-color -mb-px " +
                (isActive
                    ? "text-cyan-800 bg-gray-300 "
                    : "border-2 border-gray-300 text-white hover:bg-gray-300/20")
            }
        >
            {name}
        </Link>
    );
}
