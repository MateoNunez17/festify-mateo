import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import PageNotFound from "@/pages/PageNotFound";
import Artists from "@/pages/Artists";
import Festivales from "@/pages/Festivales";
import NewArtist from "@/pages/NewArtist";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "*", element: <PageNotFound /> },
  {path:"/artists", element:<Artists />},
  {path:"/Festivales",element:<Festivales/>},
  {path:"/new-artist", element:<NewArtist/>}
]);
