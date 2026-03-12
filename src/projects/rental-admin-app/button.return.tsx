import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";

interface Props {
    isMobile?: boolean;
    href: string;
}

export default function ReturnButton({ isMobile = false, href }: Props) {
    return (
        <Link
            href={href}
            className={`
                inline-flex items-center gap-2.5 px-2 py-0.5
                w-fit rounded-md
                text-md no-underline font-semibold
                text-sky-600 hover:text-sky-700
                hover:bg-sky-200/50
                transition-colors
            `}
        >
            <IconArrowLeft stroke={2} className="h-6 w-6" />
            Volver
        </Link>
    );
}