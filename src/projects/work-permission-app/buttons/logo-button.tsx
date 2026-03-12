"use client";

import Link from "next/link";
import Image from "next/image";

export default function LogoButton() {

    return (
        <Link
            href="/projects/work-permission-app/dashboard"
            className="flex px-2 py-1 transition-opacity rounded-lg hover:bg-white/10 scale-95"
        >
            <Image
                src="/nav-logo.svg"
                alt="app-logo"
                width={180}
                height={40}
                priority
            />
        </Link>
    );
}
