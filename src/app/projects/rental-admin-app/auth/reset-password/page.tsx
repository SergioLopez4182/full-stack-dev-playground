import { RotateCcwKey } from "lucide-react";
import { Button } from "@/projects/rental-admin-app/button";
import { Input } from "@/projects/rental-admin-app/input";
import ReturnButton from "@/projects/rental-admin-app/button.return";

export default function ResetPasswordPage() {
  return (
    <section className="flex flex-col gap-4">
      <ReturnButton href="/projects/rental-admin-app/auth/log-in"/>
      <header className="flex flex-col items-center">
        <div className="p-2 bg-white rounded-xl shadow mb-4">
          <RotateCcwKey className="w-12 h-12" />
        </div>

        <h1 className="text-2xl font-bold">
          Nueva contraseña
        </h1>

        <p className="text-center text-md text-neutral-500">
          Tu identidad ha sido verificada, establece tu nueva contraseña
        </p>
      </header>

      <form className="flex flex-col gap-4">
        {/* Password */}
        <Input
          label="Nueva contraseña"
          type="password"
          placeholder="••••••••"
          required
        />

        <Input
          label="Confirmar contraseña"
          type="password"
          placeholder="••••••••"
          required
        />

        {/* Submit */}
        <Button>
          Actualizar contraseña
        </Button>
      </form>
    </section>
  );
}