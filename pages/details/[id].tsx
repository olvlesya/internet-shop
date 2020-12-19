import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Spinner } from "../../componets/common/Spinner";
import { Detail } from "../../componets/Detail";
import { PageLayout } from "../../componets/common";
import { item as itemType } from "../../types/item";

export default function Details() {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState<itemType>();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json() as Promise<itemType>)
      .then((json) => setItem(json));
  }, []);

  return <PageLayout>{item ? <Detail {...item} /> : <Spinner />}</PageLayout>;
}
