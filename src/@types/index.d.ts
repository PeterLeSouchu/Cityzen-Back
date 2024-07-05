// Type d'une activité
export interface Activities {
  id: number;
  title: string;
  url: string;
  description: string;
  avg_rate: number;
  image: string;
  address: string;
  phone: string;
  latitude: number;
  longitude: number;
  city_id: number;
}

// Type des information de l'utilisateur
export interface Credentials {
  pseudo: string;
  email: string;
}
