import { useState, useEffect } from 'react';

export const useCategoriesLoad = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/categories`)
      .then((res) => res.json())
      .then((json) => {
        if (json !== null) {
          setCategories(json);
        }
      });
  }, []);

  return categories;
};
