export type Artist = {
  id: number;
  name: string;
  genres: string[];
  country: string;
  totalFestivals: number;
  listeners: number;
  status: "Activo" | "Borrador";
};

export type CreateArtistRequest = {
  name: string;
  genres: string[];
  country: string;
  listeners: number;
  status: "Activo" | "Borrador";
  bio: string;
}