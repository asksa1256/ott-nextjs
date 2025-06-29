import React from "react";
import { useRouter } from "next/router";

export default function Movie() {
  const router = useRouter();
  const { id } = router.query;
  return <>영화 {id} 상세</>;
}
