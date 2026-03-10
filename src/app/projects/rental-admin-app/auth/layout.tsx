import { ReactNode } from "react";
import Image from "next/image";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="min-h-screen flex flex-col bg-linear-to-b from-sky-500 from-0% to-white to-60%">
      <nav className="px-16 py-4 shrink-0">
        <Image
          src="/logoipsum.svg"
          alt="Logo"
          width={120}
          height={40}
        />
      </nav>

      <section className="flex flex-1 w-full h-full items-center justify-center">
        <article className="w-full max-w-md p-10 rounded-xl shadow-xl bg-linear-to-b from-sky-200 from-0% to-white to-50%">
          {children}
        </article>
      </section>
    </main>
  );
}