import { Link } from "react-router-dom";

export default function Festivales (){
    return(
        <><header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
            <div className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">
                <Link to="/">Festify Dashboard</Link>
            <nav className="hidden md:flex items-center gap-4 text-sm">
             <Link to="/artists"
             className="mt-6 px-4 py-2 bg-orange-600 text-white rounded hover:bg-red-700 transition">
        Artistas
      </Link>
      <Link to="/Festivales"
      className="mt-6 px-4 py-2 bg-orange-600 text-white rounded hover:bg-red-700 transition">
      Festivales
      </Link>
                    <a href="#">Escenarios</a>
                    <a href="#">Entradas</a>
                    <a href="#">Noticias</a>
                    <a href="#">Usuarios</a>
                </nav>
            </div>
        </header><main className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                    <div>
                        <h1 className="text-2xl font-extrabold">Festivales</h1>
                        <p className="text-sm text-neutral-600">Crea y gestiona eventos.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <input placeholder="Buscar por nombre/ciudad" className="px-3 py-2 rounded-lg border w-64" />
                        <a href="./admin-festival-nuevo.html" className="px-3 py-2 rounded-lg bg-neutral-900 text-white text-sm">Nuevo festival</a>
                    </div>
                </div>

                <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead><tr className="text-left border-b"><th className="py-2">Festival</th><th>Fechas</th><th>Ciudad</th><th>Precio</th><th>Estado</th><th className="text-right">Acciones</th></tr></thead>
                        <tbody>
                            <tr className="border-b hover:bg-neutral-50">
                                <td className="py-2 font-medium">SunWave Fest</td>
                                <td>12–14 Jul 2025</td>
                                <td>Barcelona</td>
                                <td>Desde 89€</td>
                                <td><span className="px-2 py-1 rounded bg-green-100 text-green-800 text-xs">Publicado</span></td>
                                <td className="text-right">
                                    <a href="./admin-festival-editar.html" className="px-2 py-1 rounded border">Editar</a>
                                    <button className="px-2 py-1 rounded border text-red-700">Eliminar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main></>
    );
}