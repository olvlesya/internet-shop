import React from "react";
import { useRouter } from "next/router";
import { Detail } from "../../componets/Detail";
import { PageLayout } from "../../componets/common";

export default function Details() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <PageLayout>
      <Detail />
    </PageLayout>
  );
}
