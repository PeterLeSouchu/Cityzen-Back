// Type d'une activité
export interface Activities {
  id: number;
  slug: string;
  url: string;
  title: string;
  description: string;
  url_image: string;
  address: string;
  phone: string;
  avg_rating: number;
  latitude: number;
  longitude: number;
  city_id: number;
}

// Type des information de l'utilisateur
export interface Credentials {
  pseudo: string;
  email: string;
}

export interface LoaderActivities {
  recents: Activities[];
  topRated: Activities[];
}
