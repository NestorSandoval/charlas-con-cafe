"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { DatePicker } from "../ui/date-picker";
import { ArrowLeft } from "lucide-react"; // ícono simple
import Link from "next/link";

export const ReservationForm = () => {
  const [selectedHour, setSelectedHour] = useState("");

  return (
    <>
      <main className="mx-auto max-w-6xl px-6 py-12">
        <header>
          <div className="flex items-center gap-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-sky-300 hover:text-sky-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <p className="text-xs tracking-[0.35em] text-sky-300/80 uppercase">
                Regresar
              </p>
            </Link>
          </div>
          <p className="text-xs tracking-[0.35em] text-sky-300/80 uppercase mt-2">
            Postulate
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Sesiones de Charlas con Café
          </h1>
        </header>
      </main>
      <div className=" w-full flex justify-center items-center">
        <form className="w-full max-w-xl bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-lg space-y-6 border border-white/20">
          {/* Nombre */}
          <div className="space-y-2">
            <label className="text-white font-medium">Nombre completo</label>
            <Input
              type="text"
              placeholder="Escribe tu nombre…"
              className="bg-white"
              required
            />
          </div>

          {/* Correo */}
          <div className="space-y-2">
            <label className="text-white font-medium">Correo electrónico</label>
            <Input
              type="email"
              placeholder="example@correo.com"
              className="bg-white"
              required
            />
          </div>

          {/* Fecha */}
          <div className="space-y-2">
            <label className="text-white font-medium">Fecha deseada</label>
            <div>
              <DatePicker />
            </div>
          </div>

          {/* Horario */}
          <div className="space-y-2">
            <label className="text-white font-medium">Horario disponible</label>

            <div className="grid grid-cols-3 gap-3">
              {[
                "12:00 PM - 1:00 PM",
                "03:00 PM - 4:00 PM",
                "05:00 PM - 6:00 PM",
              ].map((hour) => {
                const isDisabled = false; // cambiarás a true si tu BD marca que está ocupada
                const isSelected = selectedHour === hour;

                return (
                  <button
                    key={hour}
                    type="button"
                    disabled={isDisabled}
                    onClick={() => setSelectedHour(hour)}
                    className={`px-3 py-2 rounded-lg border text-sm font-medium transition-all
            ${
              isDisabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : isSelected
                ? "bg-sky-500 text-white border-sky-600"
                : "bg-white text-black hover:bg-sky-100"
            }
          `}
                  >
                    {hour}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tema */}
          <div className="space-y-2">
            <label className="text-white font-medium">Tema de tu charla</label>
            <Input
              type="text"
              placeholder="Ej. Productividad, diseño, programación..."
              className="bg-white"
              required
            />
          </div>

          {/* Descripción */}
          <div className="space-y-2">
            <label className="text-white font-medium">Descripción breve</label>
            <Textarea
              placeholder="Cuéntanos un poco sobre tu charla…"
              className="bg-white min-h-[120px]"
            />
          </div>

          {/* Botón */}
          <Button
            type="submit"
            variant="outline"
            className="w-full bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-2xl cursor-pointer"
          >
            Reservar mi charla
          </Button>
        </form>
      </div>
    </>
  );
};
