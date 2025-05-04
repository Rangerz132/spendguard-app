import { useState } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;

    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setStoredValue: React.Dispatch<React.SetStateAction<T>> = (
    newValue
  ) => {
    setValue((prevValue) => {
      const valueToStore =
        typeof newValue === "function"
          ? (newValue as (prevState: T) => T)(prevValue)
          : newValue;

      try {
        localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.warn(`Error writing localStorage key "${key}":`, error);
      }

      return valueToStore;
    });
  };

  return [value, setStoredValue];
}
