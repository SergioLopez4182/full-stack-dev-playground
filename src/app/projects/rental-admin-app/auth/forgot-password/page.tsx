import { RectangleEllipsis } from "lucide-react";
import { Button } from "@/features/projects/rental-admin-app/button";
import { Input } from "@/features/projects/rental-admin-app/input";

export default function ForgotPasswordPage() {
  return (
    <section className="flex flex-col gap-4">
      <header className="flex flex-col items-center">
        <div className="p-2 bg-white rounded-xl shadow mb-4">
          <RectangleEllipsis className="w-12 h-12" />
        </div>

        <h1 className="text-2xl font-bold">
          Olvidé mi contraseña
        </h1>

        <p className="text-center text-md text-neutral-500">
          Ingresa tu correo y te enviaremos un enlace para restablecer tu contraseña
        </p>
      </header>

      <form className="flex flex-col gap-4">
        <Input
          label="Correo electrónico"
          type="email"
          placeholder="tu@email.com"
          required
        />

        <Button>
          Enviar correo
        </Button>
      </form>
    </section>
  );
}