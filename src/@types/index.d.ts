// Type d'une activité
export interface Activities {
  activity_id: number;
  slug: string;
  url: string;
  title: string;
  description: string;
  url_image: string;
  address: string;
  avg_note: number;
  phone: string;
  latitude: number;
  longitude: number;
  user_id: number;
  city_id: number;
}

// Type des information de l'utilisateur
export interface Credentials {
  pseudo: string;
  email: string;
}
