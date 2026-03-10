import { RotateCcwKey } from "lucide-react";
import { Button } from "@/features/projects/rental-admin-app/button";
import { Input } from "@/features/projects/rental-admin-app/input";

export default function SignUpPasswordPage() {
  return (
    <section className="flex flex-col gap-4">
      <header className="flex flex-col items-center">
        <div className="p-2 bg-white rounded-xl shadow mb-4">
          <RotateCcwKey className="w-12 h-12" />
        </div>

        <h1 className="text-2xl font-bold">
          Regístrate ahora
        </h1>

        <p className="text-center text-md text-neutral-500">
          Complete su información a continuación
        </p>
      </header>

      <form className="flex flex-col gap-4">
        <Input
          label="Nombre completo"
          type="text"
          placeholder="John Doe"
          required
        />

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

        <Button>
          Registrarse
        </Button>
      </form>
    </section>
  );
}