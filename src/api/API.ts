const BASE_URL = 'http://localhost:3001'; // или ваш URL

export const API = {
  getAllGames: async () => {
    try {
      const response = await fetch(`${BASE_URL}/games`);
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    } catch (error) {
      console.error('Error fetching games:', error);
      throw error;
    }
  },

  getGameById: async (id: number) => {
    try {
      const response = await fetch(`${BASE_URL}/games/${id}`);
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    } catch (error) {
      console.error('Error fetching game:', error);
      throw error;
    }
  }
};