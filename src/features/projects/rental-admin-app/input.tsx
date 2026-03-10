import { type InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
};

export function Input({ label, error, className, ...props }: InputProps) {
    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label className="text-sm font-medium text-neutral-700">
                    {label}
                </label>
            )}

            <input
                className={`
                    w-full rounded-lg border px-3 py-2 text-sm
                    bg-white
                    border-neutral-300
                    focus:outline-none focus:ring-2 focus:ring-sky-500
                    disabled:opacity-50 disabled:cursor-not-allowed
                    focus:border-sky-500 transition
                    ${error ? "border-red-500 focus:ring-red-500" : ""}
                    ${className ?? ""}
                `}
                {...props}
            />

            {error && (
                <span className="text-xs text-red-500">
                    {error}
                </span>
            )}
        </div>
    );
}
