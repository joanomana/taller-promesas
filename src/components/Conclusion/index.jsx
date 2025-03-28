export default function Conclusion(){
    return (
       
        <div className="flex flex-col items-start gap-4 text-black text-left">
            <h1 className="text-5xl">Conclusion</h1>
            <p>Cada uno de estos métodos tiene un propósito específico y se usa en diferentes situaciones:</p>
            <ul className="list-disc list-inside">
                <li><span className="text-red-500">Promise.race()</span>: La primera promesa en resolverse o fallar gana.</li>
                <li><span className="text-red-500">Promise.any()</span>: La primera promesa en resolverse con éxito gana (ignora fallos hasta que todas fallen).</li>
                <li><span className="text-red-500">Promise.all()</span>: Espera que todas las promesas se resuelvan; si una falla, la operación completa falla..</li>
            </ul>
        </div>
        
    );
}