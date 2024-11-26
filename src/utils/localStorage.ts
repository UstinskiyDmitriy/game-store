export const loadFromLocalStorage = <T>(key: string, fallback: T): T => {
  try {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : fallback;
  } catch (error) {
    console.error(`Error loading data from localStorage: ${error}`);
    return fallback;
  }
};

export const saveToLocalStorage = <T>(key: string, data: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving data to localStorage: ${error}`);
  }
};
