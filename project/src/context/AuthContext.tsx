import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, UserRole, AuthState } from '../types';

// Mock user data for demonstration
const MOCK_USERS = [
  { id: '1', email: 'admin@railway.com', password: 'admin123', name: 'Admin User', role: 'admin' as UserRole },
  { id: '2', email: 'user@example.com', password: 'user123', name: 'Public User', role: 'public' as UserRole },
];

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string, role: UserRole) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    // Check for saved user in localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setAuthState({
          user: parsedUser,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        });
      } catch (error) {
        console.error('Failed to parse saved user:', error);
        localStorage.removeItem('user');
        setAuthState({ ...authState, isLoading: false });
      }
    } else {
      setAuthState({ ...authState, isLoading: false });
    }
  }, []);

  const login = async (email: string, password: string) => {
    setAuthState({ ...authState, isLoading: true, error: null });
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Find user
      const user = MOCK_USERS.find(
        (u) => u.email === email && u.password === password
      );
      
      if (user) {
        // Remove password before storing
        const { password: _, ...secureUser } = user;
        localStorage.setItem('user', JSON.stringify(secureUser));
        
        setAuthState({
          user: secureUser as User,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        });
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (error) {
      setAuthState({
        ...authState,
        isLoading: false,
        error: error instanceof Error ? error.message : 'An error occurred',
      });
      throw error; // Re-throw to handle in the component
    }
  };

  const register = async (email: string, password: string, name: string, role: UserRole) => {
    setAuthState({ ...authState, isLoading: true, error: null });
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if user already exists
      if (MOCK_USERS.some((u) => u.email === email)) {
        throw new Error('User with this email already exists');
      }
      
      // Create a new user object
      const newUser = {
        id: `${MOCK_USERS.length + 1}`,
        email,
        name,
        role,
      };
      
      localStorage.setItem('user', JSON.stringify(newUser));
      
      setAuthState({
        user: newUser,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setAuthState({
        ...authState,
        isLoading: false,
        error: error instanceof Error ? error.message : 'An error occurred',
      });
      throw error; // Re-throw to handle in the component
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};