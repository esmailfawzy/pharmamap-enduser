export interface Pharmacy {
  id: number;
  name: string;
  address: string;
  distance: string;
  rating: string;
  reviewCount: string;
  isOpen: boolean;
  image: string;
  lat: number;
  lng: number;
  availabilityStatus: string;
}

export interface UserData {
  name: string;
  email: string;
  phone: string;
}
