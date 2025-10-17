import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
          <div className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">
           <Link to="/">Festify Dashboard</Link>
            <nav className="hidden md:flex items-center gap-4 text-sm">
             <Link to="/artists"
             className="mt-6 px-4 py-2 bg-orange-600 text-white rounded hover:bg-red-700 transition">
        Artistas
      </Link>
              <a href="#">Festivales</a>
              <a href="#">Escenarios</a>
              <a href="#">Entradas</a>
              <a href="#">Noticias</a>
              <a href="#">Usuarios</a>
            </nav>
          </div>
        </header>  
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-extrabold mb-4">Festify</h1>
        <p className="text-neutral-600 mb-8 max-w-xl">La plataforma integral de gestión de festivales musicales</p>
      </main>
   <Footer></Footer>
    </>
  );
}
