import Link from "next/link";
import { ScanFace } from "lucide-react";
import { Button } from "@/features/projects/rental-admin-app/button";
import { Input } from "@/features/projects/rental-admin-app/input";

export default function LoginPage() {
  return (
    <section className="flex flex-col gap-4">
      <header className="flex flex-col items-center">
        <div className="p-2 bg-white rounded-xl shadow mb-4">
          <ScanFace className="w-12 h-12" />
        </div>

        <h1 className="text-2xl font-bold">
          Inicia sesión con tu correo
        </h1>

        <p className="text-center text-md text-neutral-500">
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

        <div className="flex justify-end">
          <Link
            href="/auth/forgot-password"
            className="text-sm text-sky-600 hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        <Button>
          Iniciar sesión
        </Button>
      </form>
    </section>
  );
}