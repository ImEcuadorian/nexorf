"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

const schema = z
  .object({
    nombre: z.string().min(3, "El nombre debe tener mínimo 3 caracteres"),

    email: z.string().email("Email inválido"),

    password: z.string().min(6, "La contraseña debe tener mínimo 6 caracteres"),

    confirmPassword: z.string(),

    terms: z.boolean().refine((val) => val === true, {
      message: "Debes aceptar los términos",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Registro:", data);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-4">

      <div className="w-full max-w-md bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow">

        <h2 className="text-3xl font-bold text-center mb-6">
          Crear cuenta
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Nombre */}
          <div>
            <input
              {...register("nombre")}
              placeholder="Nombre completo"
              className="w-full p-2 border rounded"
            />
            {errors.nombre && (
              <p className="text-red-500 text-sm">{errors.nombre.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              {...register("email")}
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              {...register("password")}
              placeholder="Contraseña"
              className="w-full p-2 border rounded"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <input
              type="password"
              {...register("confirmPassword")}
              placeholder="Confirmar contraseña"
              className="w-full p-2 border rounded"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Terminos */}
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" {...register("terms")} />
            <span>Acepto los términos y condiciones</span>
          </div>

          {errors.terms && (
            <p className="text-red-500 text-sm">{errors.terms.message}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Crear cuenta
          </button>

          {/* Divider */}
          <div className="flex items-center gap-2">
            <hr className="flex-1" />
            <span className="text-sm text-gray-500">o</span>
            <hr className="flex-1" />
          </div>

          {/* Google */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
            />
            Continuar con Google
          </button>

          {/* Login link */}
          <p className="text-center text-sm mt-4">
            ¿Ya tienes cuenta?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Inicia sesión
            </Link>
          </p>

        </form>
      </div>
    </section>
  );
}