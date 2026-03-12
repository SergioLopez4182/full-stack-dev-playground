"use client";

import LogoButton from "../buttons/logo-button";
import NavButton from "../buttons/nav-button";
import ProfileMenu from "../buttons/profile/menu";


export default function DashboardNavbar() {
    const sections = [
        {
            name: "Permisos",
            url: "/projects/work-permission-app/dashboard/permissions",
        },
        {
            name: "Administración",
            url: "/projects/work-permission-app/dashboard/admin",
        },
    ];

    return (
        <nav className="px-8 h-16 flex items-center justify-between gap-4 bg-cyan-800 dark:bg-neutral-800">
            <section className="flex gap-4 items-center h-full">
                <LogoButton />

                {/* <div className="w-1 h-8 bg-white" /> */}

                {/* Desktop */}
                <section className="hidden lg:flex items-end gap-2 h-full">
                    {
                        sections.map((section, i) => (
                            <NavButton
                                key={i}
                                name={section.name}
                                href={section.url}
                            />
                        ))
                    }
                </section>
            </section>

            <section>
                <ProfileMenu />
            </section>
        </nav>
    );
}