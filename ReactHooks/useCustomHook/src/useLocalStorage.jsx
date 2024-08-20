import { useState, useEffect } from "react";

function getSavedValue(key, initialValue) {
    const savedValue = localStorage.getItem(key);
  
    // If savedValue is null, return the initial value
    if (savedValue === null) return initialValue;
  
    try {
      return JSON.parse(savedValue);
    } catch (e) {
      // If parsing fails, return the initial value
      return initialValue;
    }
  }
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
