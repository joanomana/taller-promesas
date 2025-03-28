"use client";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { useState } from "react";

const codeExample = `
function testAny(setResultado) {
    setResultado("Ejecutando...");

    // Se crea una promesa que se rechaza en 1 segundo
    const promesa1 = new Promise((_, reject) => 
        setTimeout(() => reject("❌ Error 1"), 1000)
    );

    // Se crea una promesa que se resuelve en 2 segundos
    const promesa2 = new Promise((resolve) => 
        setTimeout(() => resolve("✅ Éxito 2"), 2000)
    );

    // Se crea una promesa que se rechaza en 3 segundos
    const promesa3 = new Promise((_, reject) => 
        setTimeout(() => reject("❌ Error 3"), 3000)
    );

    // Se usa Promise.any para obtener la primera promesa que se resuelva con éxito
    Promise.any([promesa1, promesa2, promesa3])
    .then(resultado => setResultado("Primera en resolverse: " + resultado)) // Se imprime la primera promesa que tenga éxito
    .catch(error => setResultado("Todas fallaron: " + error.errors.join(", "))); // Si todas fallan, se captura el error con un array de errores
}
`;

export default function Any() {
    const [resultado, setResultado] = useState("Presiona el botón para ejecutar");

    function ejecutarCodigo() {
        testAny(setResultado);
    }

    return (
        <div className="flex flex-col items-start gap-4">
            <h1 className="text-red-400 text-7xl">1. Promise.any()</h1>

            {/* Explicación */}
            <div className="flex flex-col items-start gap-1 px-3 text-left text-black">
                <h1 className="text-black font-bold text-3xl">Explicación</h1>
                <p>
                    <span className="text-red-500">Promise.any()</span> recibe un array de promesas y devuelve una nueva promesa que se resuelve <br /> cuando  cualquiera de las promesas dadas se resuelve correctamente. Si todas fallan, <br />devuelve un error <span className="text-red-800">AggregateError</span>.
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
                    onClick={ejecutarCodigo}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 mt-4"
                >
                    Ejecutar Promise.any()
                </button>
            </div>

            {/* Casos de uso */}
            <div className="flex flex-col items-start gap-1 px-3 text-left text-black">
                <h1 className="text-black font-bold text-3xl">Casos de uso</h1>
                <ul className="text-black list-disc list-inside">
                    <li>Ideal cuando queremos la primera promesa exitosa sin importar el resto.</li>
                    <li>Seleccionar el primer servidor que responda correctamente.</li>
                    <li>Procesar varias tareas opcionales, tomando solo la primera que funcione.</li>
                </ul>
            </div>
        </div>
    );
}

// Definimos la función fuera del componente
function testAny(setResultado) {
    setResultado("Ejecutando...");

    const promesa1 = new Promise((_, reject) => 
        setTimeout(() => reject("❌ Error 1"), 1000)
    );

    const promesa2 = new Promise((resolve) => 
        setTimeout(() => resolve("✅ Éxito 2"), 2000)
    );

    const promesa3 = new Promise((_, reject) => 
        setTimeout(() => reject("❌ Error 3"), 3000)
    );

    Promise.any([promesa1, promesa2, promesa3])
        .then(res => setResultado("Primera en resolverse: " + res))
        .catch(err => setResultado("Todas fallaron: " + err.errors.join(", ")));
}
