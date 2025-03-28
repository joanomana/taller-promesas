"use client";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { useState } from "react";

const codeExample = `
function testRace(setResultado) {
    setResultado("Ejecutando...");

    // Se crea una promesa que se resuelve en 1 segundo
    const promesaRapida = new Promise((resolve) => 
        setTimeout(() => resolve("✅ Promesa Rápida"), 1000)
    );

    // Se crea una promesa que se resuelve en 3 segundos
    const promesaLenta = new Promise((resolve) => 
        setTimeout(() => resolve("🐢 Promesa Lenta"), 3000)
    );

    // Se crea una promesa que se rechaza en 2 segundos
    const promesaFallida = new Promise((_, reject) => 
        setTimeout(() => reject("❌ Error en Promesa"), 2000)
    );

    // Se usa Promise.race para ejecutar varias promesas en paralelo y obtener la que termine primero
    Promise.race([promesaRapida, promesaLenta, promesaFallida])
        .then(res => setResultado(res)) // Se muestra la promesa que se resuelva más rápido
        .catch(err => setResultado(err)); // Si la primera en completarse es rechazada, se captura el error
}
`;

export default function Race() {
    const [resultado, setResultado] = useState("Presiona el botón para ejecutar");

    return (
        <div className="flex flex-col items-start gap-4">
            <h1 className="text-red-400 text-7xl">1. Promise.race()</h1>

            {/* Explicación */}
            <div className="flex flex-col  gap-1 px-3 text-start text-black">
                <h1 className="text-black font-bold text-3xl">Explicación</h1>
                <p>
                    <span className="text-red-500">Promise.race()</span> recibe un array de promesas y devuelve una nueva promesa que se resuelve <br /> o rechaza tan pronto como la primera promesa del array se haya completado (ya sea que se <br /> haya resuelto con éxito o haya sido rechazada).
                </p>
            </div>

            {/* Ejemplo en código */}
            <div className="flex flex-col items-start gap-1 px-3 text-left text-black w-full">
                <h1 className="text-black font-bold text-3xl">Ejemplo en código</h1>

                <LiveProvider code={codeExample} noInline>
                    <div className="bg-gray-800 p-4 rounded-lg w-full max-w-2xl">
                        <LiveEditor className="bg-black text-green-400 p-3 rounded-lg" />
                    </div>

                    

                    <div className="bg-white shadow-xl p-4 rounded-lg mt-4">
                        <strong>Salida:</strong>
                        <p className="text-green-400 font-bold">{resultado}</p>
                    </div>
                </LiveProvider>

                {/* Botón para ejecutar el código */}
                <button 
                    onClick={() => eval(`(${codeExample})`)(setResultado)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 mt-4"
                >
                    Ejecutar Promise.race()
                </button>
            </div>
            <div className="flex flex-col items-start gap-1 px-3 text-left text-black">
                <h1 className="text-black font-bold text-3xl">Casos de uso</h1>
                <ul className="text-black list-disc list-inside">
                    <li>Útil para establecer **timeouts** en solicitudes HTTP.</li>
                    <li>Seleccionar la primera respuesta entre varios servidores.</li>
                    <li>Ejecutar varias tareas en paralelo y quedarse con la primera completada.</li>
                </ul>
            </div>
        </div>
    );
}
