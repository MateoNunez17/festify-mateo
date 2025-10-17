import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
interface Artist {
    id: string; 
    name: string;
    genres: string[]; 
    listeners: string; 
    country_emoji: string;
    festivals_count: number;
    status: 'Activo' | 'Borrador'; 
    image_url: string;
}

function Footer() {
    return (
        <footer className="max-w-7xl mx-auto px-4 py-4 text-center text-sm text-neutral-500 border-t mt-8">
            © 2025 Festify
        </footer>
    );
}

export default function Artists() {
    const [artists, setArtists] = useState<Artist[]>([]);

    useEffect(() => {
        console.log("cargando artistas....");

        fetch("http://localhost:8080/artists", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((res: Artist[]) => { 
                setArtists(res);
            })
            .catch(error => console.error("Error fetching artists:", error)); 
    }, []);

    return (
        <>
            <header>
                <div className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">
                <Link to="/">
                Festify Dashboard
                </Link>
                    <nav className="hidden md:flex items-center gap-4 text-sm">
                        <a href="./admin-artistas.html">Artistas</a>
                        <a href="./admin-festivales.html">Festivales</a>
                        <a href="#">Escenarios</a>
                        <a href="#">Entradas</a>
                        <a href="#">Noticias</a>
                        <a href="#">Usuarios</a>
                    </nav>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                    <div>
                        <h1 className="text-2xl font-extrabold">Artistas</h1>
                        <p className="text-sm text-neutral-600">Gestiona artistas: crear, editar, eliminar.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <input placeholder="Buscar por nombre o género" className="px-3 py-2 rounded-lg border w-64" />
                        <Link to="/new-artist"
                        className="mt-6 px-4 py-2 bg-orange-600 text-white rounded hover:bg-red-700 transition">
                        Nuevo artista
                    </Link>
                    </div>
                </div>

                <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="text-left border-b">
                                <th className="py-2">Artista</th>
                                <th>Generos</th>
                                <th>Oyentes</th>
                                <th>Pais</th>
                                <th>Festivales</th>
                                <th>Estado</th>
                                <th className="text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {artists.map((artist) => (
                                <tr key={artist.id} className="border-b hover:bg-neutral-50">
                                    <td className="py-2">
                                        <div className="flex items-center gap-3">
                                            <img className="w-10 h-10 rounded-md object-cover" 
                                            src={artist.image_url || "https://placeholder.co/120x120"} 
                                            alt={`Foto de ${artist.name}`} />
                                            <div>
                                                <p className="font-medium">{artist.name}</p>
                                                <p className="text-xs text-neutral-500">ID: {artist.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{artist.genres ? artist.genres.join(', ') : 'N/A'}</td>
                                    <td>{artist.listeners}</td>
                                    <td>{artist.country_emoji}</td>
                                    <td>{artist.festivals_count}</td>
                                    <td>
                                        <span className={`px-2 py-1 rounded text-xs ${artist.status === 'Activo' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                            {artist.status}
                                        </span>
                                    </td>
                                    <td className="text-right">
                                        <a href={`./admin-artista-editar.html?id=${artist.id}`} 
                                        className="px-2 py-1 rounded border">Editar</a>
                                        <button className="px-2 py-1 rounded border text-red-700">Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>

            <Footer />
        </>
    );
}