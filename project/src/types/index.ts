export type UserRole = 'public' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

export interface Station {
  id: string;
  name: string;
  location: string;
  image: string;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  location: string;
  stationId: string;
  status: 'operational' | 'maintenance' | 'closed';
  icon: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}