import { useEffect, useState } from 'react';

interface UseLocalStorageParams<I> {
  key: string;
  initialValue: I;
}

export const useLocalStorage = <I>({
  key,
  initialValue,
}: UseLocalStorageParams<I>): [I, (data: I) => void] => {
  const [value, setValue] = useState<I>(initialValue);

  useEffect(() => {
    const value = localStorage.getItem(key);

    if (value) setValue(JSON.parse(value));
  }, []);

  const setData = (data: I) => {
    localStorage.setItem(key, JSON.stringify(data));
    setValue(data);
  };

  return [value, setData];
};
