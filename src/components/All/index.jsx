"use client";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { useState } from "react";

const codeExample = `
function testAny(setResultado) {
    setResultado("Ejecutando...");

    // Se crea una promesa que se resuelve en 1 segundo con "Datos de Usuario"
const promesaA = new Promise((resolve) => 
    setTimeout(() => resolve("Datos de Usuario"), 1000)
);

// Se crea una promesa que se resuelve en 2 segundos con "Historial de Compras"
const promesaB = new Promise((resolve) => 
    setTimeout(() => resolve("Historial de Compras"), 2000)
);

// Se crea una promesa que se resuelve en 3 segundos con "Recomendaciones"
const promesaC = new Promise((resolve) => 
    setTimeout(() => resolve("Recomendaciones"), 3000)
);

// Se usa Promise.all para esperar a que todas las promesas se resuelvan
Promise.all([promesaA, promesaB, promesaC])
    .then(resultados => console.log("Todas completadas:", resultados)) 
    // Se ejecuta cuando todas las promesas se resuelven exitosamente.
    // Imprime un array con los resultados en el mismo orden que las promesas: 
    // ["Datos de Usuario", "Historial de Compras", "Recomendaciones"]

    .catch(error => console.error("Alguna falló:", error)); 
    // Si alguna promesa falla, se ejecuta este bloque y se captura el error.
    // En ese caso, Promise.all se rechaza inmediatamente y no espera a las demás.

}
`;

export default function All() {
    const [resultado, setResultado] = useState("Presiona el botón para ejecutar");

    function ejecutarCodigo() {
        testAll(setResultado);
    }

    return (
        <div className="flex flex-col items-start gap-4">
            <h1 className="text-red-400 text-7xl">1. Promise.all()</h1>

            {/* Explicación */}
            <div className="flex flex-col items-start gap-1 px-3 text-left text-black">
                <h1 className="text-black font-bold text-3xl">Explicación</h1>
                <p>
                    <span className="text-red-500">Promise.all()</span> recibe un array de promesas y devuelve una nueva promesa que:
                </p>
                <ul className="list-disc list-inside">
                    <li>Se resuelve cuando todas las promesas se resuelven exitosamente.</li>
                    <li>Se rechaza si cualquiera de las promesas falla.</li>
                </ul>
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
                    onClick={ejecutarCodigo}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 mt-4"
                >
                    Ejecutar Promise.all()
                </button>
            </div>

            {/* Casos de uso */}
            <div className="flex flex-col items-start gap-1 px-3 text-left text-black">
                <h1 className="text-black font-bold text-3xl">Casos de uso</h1>
                <ul className="text-black list-disc list-inside">
                    <li>Cargar datos en paralelo (usuario, compras, recomendaciones, etc.).</li>
                    <li>Ejecutar múltiples operaciones necesarias juntas (validar múltiples fuentes de datos).</li>
                    <li>Optimizar rendimiento al evitar esperas secuenciales innecesarias.</li>
                </ul>
            </div>
        </div>
    );
}

// Definimos la función fuera del componente
function testAll(setResultado) {
    setResultado("Ejecutando...");

    const promesaA = new Promise((resolve) => 
        setTimeout(() => resolve("📄 Datos de Usuario"), 1000)
    );

    const promesaB = new Promise((resolve) => 
        setTimeout(() => resolve("🛒 Historial de Compras"), 2000)
    );

    const promesaC = new Promise((resolve) => 
        setTimeout(() => resolve("⭐ Recomendaciones"), 3000)
    );

    Promise.all([promesaA, promesaB, promesaC])
        .then(res => setResultado("✅ Todas completadas: " + res.join(", ")))
        .catch(err => setResultado("❌ Alguna falló: " + err));
}
