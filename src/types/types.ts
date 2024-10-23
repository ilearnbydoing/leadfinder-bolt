export interface Business {
  id: string;
  name: string;
  address: string;
  rating: number;
  reviews: number;
  phone: string;
  website?: string;
  category: string;
}

export interface SearchParams {
  term: string;
  location: string;
}