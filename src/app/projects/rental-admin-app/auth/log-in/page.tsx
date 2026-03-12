import Link from "next/link";
import { ScanFace } from "lucide-react";
import { Button } from "@/projects/rental-admin-app/button";
import { Input } from "@/projects/rental-admin-app/input";

export default function LoginPage() {
  return (
    <section className="flex flex-col gap-4">
      <header className="flex flex-col items-center gap-0">
        <div className="p-2 bg-white rounded-xl shadow">
          <ScanFace className="w-12 h-12" />
        </div>

        <h1 className="text-3xl font-bold text-sky-600 my-4">
          Bienvenido de vuelta
        </h1>

        <p className="text-center text-md text-neutral-500 my-0">
          Administra tus proyectos, rentas y demás datos de tu negocio
        </p>
      </header>

      <form className="flex flex-col gap-4">
        <Input
          label="Correo electrónico"
          type="email"
          placeholder="tu@email.com"
          required
        />

        <Input
          label="Contraseña"
          type="password"
          placeholder="••••••••"
          required
        />

        <div className="flex flex-col items-end w-full gap-2">
          <Link
            href="/projects/rental-admin-app/auth/forgot-password"
            className="text-sm text-sky-600 no-underline hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </Link>
          <Link
            href="/projects/rental-admin-app/auth/reset-password"
            className="text-sm text-sky-600 no-underline hover:underline"
          >
            Restablecer contraseña
          </Link>
          <Link
            href="/projects/rental-admin-app/auth/sign-up"
            className="text-sm text-sky-600 no-underline hover:underline"
          >
            Registrarse
          </Link>
        </div>

        <Button>
          Iniciar sesión
        </Button>
      </form>
    </section>
  );
}