import { type ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
};

export function Button({
    variant = "primary",
    className,
    ...props
}: ButtonProps) {
    const base = `
        w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors
        active:scale-[0.98] transition border-transparent
    `;

    const variants = {
        primary:
            "bg-sky-600 text-white hover:bg-sky-700",
        secondary:
            "bg-neutral-200 text-neutral-900 hover:bg-neutral-300",
    };

    return (
        <button
            className={`${base} ${variants[variant]} ${className ?? ""}`}
            {...props}
        />
    );
}
