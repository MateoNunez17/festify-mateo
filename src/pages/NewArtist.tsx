import type { CreateArtistRequest } from "@/types/artist";
import React, {useState} from "react";
import {Link} from "react-router-dom";

type ArtistForm = {
    name: string;
    genres: string;
    country: string;
    listeners: number | "";
    bio: string;
    status: "Activo" | "Borrador";
};
const defaultArtistForm: ArtistForm = {
    name: "",
    genres: "",
    country: "ES",
    listeners: 0,
    status: "Activo",
    bio: "",
};

export default function NewArtist() {
    const [form, setForm] = useState<ArtistForm>(defaultArtistForm);{
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, name: e.target.value }));
};  

    const handleGenresChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, genres: e.target.value }));
};

    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, country: e.target.value }));
};
    const handleListenersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm(prev => ({ ...prev, listeners: value === "" ? "" : Number(value) }));
};
    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let Nuevo:  "Activo" | "Borrador" = "Activo";
    if (e.target.value === "Borrador") {
        Nuevo = "Borrador";
    }
    setForm(prev => ({ ...prev, status: Nuevo }));  
};

    const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, bio: e.target.value }));
};
const handleReset =() => {
        setForm(defaultArtistForm); 
    }

    const handleSubmit =() => {
        const request : CreateArtistRequest= {
            name: form.name,
            bio: form.bio,
            country: form.country,
            status: form.status,
            genres: form.genres.split(','),
            listeners: Number(form.listeners),
        }
    }

            
        return (
        <main className="max-w-4xl mx-auto px-4 py-8">
            <Link
                to="/artists"
                className="text-sm px-3 py-2 rounded-lg border"
            >
                Volver
            </Link>

            <div className="max-w-5xl mx-auto h-16 px-4 flex items-center justify-center">
                <h1 className="font-semibold">Nuevo artista</h1>
            </div>

            <form
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm"
            >
                <div className="sm:col-span-2">
                    <label className="block text-neutral-700 mb-1" htmlFor="name">
                        Nombre <span className="text-red-600">*</span>
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="w-full px-3 py-2 rounded-lg border"
                        placeholder="Nombre del artista"
                        value={form.name}
                        onChange={handleNameChange}
                        required
                    />
                </div>

                <div>
                    <label className="block text-neutral-700 mb-1" htmlFor="genres">
                        Géneros (separados por coma)
                    </label>
                    <input
                        id="genres"
                        name="genres"
                        type="text"
                        className="w-full px-3 py-2 rounded-lg border"
                        placeholder="Indie, Electrónica"
                        value={form.genres}
                        onChange={handleGenresChange}
                    />
                </div>

                <div>
                    <label className="block text-neutral-700 mb-1" htmlFor="country">
                        País
                    </label>
                    <select
                        id="country"
                        name="country"
                        className="w-full px-3 py-2 rounded-lg border"
                        value={form.country}
                        onChange={handleCountryChange}
                    >
                        <option value="ES">ES</option>
                        <option value="FR">FR</option>
                        <option value="PT">PT</option>
                        <option value="UK">UK</option>
                        <option value="PR">PR</option>
                        <option value="PE">PE</option>
                        <option value="COL">COL</option>
                    </select>
                </div>

                <div>
                    <label className="block text-neutral-700 mb-1" htmlFor="listeners">
                        Oyentes mensuales
                    </label>
                    <input
                        id="listeners"
                        name="listeners"
                        type="text"
                        inputMode="numeric"
                        pattern="\d*"
                        className="w-full px-3 py-2 rounded-lg border"
                        placeholder="1200000"
                        value={form.listeners}
                        onChange={handleListenersChange}
                    />
                    <p className="text-neutral-500 mt-1">
                        Solo números. Déjalo vacío si no lo sabes.
                    </p>
                </div>

                <div>
                    <label className="block text-neutral-700 mb-1" htmlFor="status">
                        Estado
                    </label>
                    <select
                        id="status"
                        name="status"
                        className="w-full px-3 py-2 rounded-lg border"
                        value={form.status}
                        onChange={handleStatusChange}
                    >
                        <option value="Activo">Activo</option>
                        <option value="Borrador">Borrador</option>
                    </select>
                </div>

                <div className="sm:col-span-2">
                    <label className="block text-neutral-700 mb-1" htmlFor="bio">
                        Biografía
                    </label>
                    <textarea
                        id="bio"
                        name="bio"
                        rows={5}
                        className="w-full px-3 py-2 rounded-lg border"
                        placeholder="Resumen del artista, estilo, trayectoria…"
                        value={form.bio}
                        onChange={handleBioChange}
                    />
                </div>

                <div className="sm:col-span-2 flex items-center gap-3 mt-2">
                    <button
                        type="submit"
                        className="px-4 py-2 rounded-lg bg-neutral-900 text-white disabled:opacity-60"
                        disabled={false}
                        onClick={handleSubmit}
                    >
                        { "Guardar artista"}
                    </button>

                    <button onClick={handleReset} type="reset" className="px-4 py-2 rounded-lg border" disabled={false}>
                        Limpiar
                    </button>

                </div>
            </form>
        </main>
    )
}