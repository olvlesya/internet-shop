import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { item as itemType } from '../types/item';

export const useItemLoad = (id: string) => {
  const router = useRouter();
  const [item, setItem] = useState<itemType>();

  useEffect(() => {
    if (id) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`)
        .then((res) => res.json() as Promise<itemType>)
        .then((json) => {
          if (json === null) {
            router.push(`/404`);
          } else {
            setItem(json);
          }
        });
    }
  }, [id]);

  return item;
};
