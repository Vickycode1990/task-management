import create from 'zustand';
import axios from 'axios';

interface AuthState {
  token: string | null;
  user: any | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  register: (username: string, email: string, password: string) => Promise<void>;
}

const API_URL = 'http://localhost:8001';

export const useAuth = create<AuthState>((set) => ({
  token: localStorage.getItem('token'),
  user: null,
  isAuthenticated: !!localStorage.getItem('token'),

  login: async (username: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/token`, {
        username,
        password,
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      const { access_token } = response.data;
      localStorage.setItem('token', access_token);
      
      // Get user info
      const userResponse = await axios.get(`${API_URL}/users/me`, {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      });

      set({
        token: access_token,
        user: userResponse.data,
        isAuthenticated: true
      });
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    set({
      token: null,
      user: null,
      isAuthenticated: false
    });
  },

  register: async (username: string, email: string, password: string) => {
    try {
      await axios.post(`${API_URL}/users/`, {
        username,
        email,
        password
      });
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  }
})); 