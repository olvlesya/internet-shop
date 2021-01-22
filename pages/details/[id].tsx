import React from "react";
import { useRouter } from "next/router";
import { Spinner } from "../../componets/common/Spinner";
import { Detail } from "../../componets/Detail";
import { PageLayout } from "../../componets/common";
import { useItemLoad } from "../../customHooks/useItemLoad";

export default function Details() {
  const router = useRouter();
  const { id } = router.query;
  const item = useItemLoad(id as string);

  return <PageLayout>{item ? <Detail {...item} /> : <Spinner />}</PageLayout>;
}
