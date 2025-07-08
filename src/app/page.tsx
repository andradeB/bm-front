"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import { selectToken } from "@/features/auth/authSlice";

export default function IndexPage() {
  const token = useAppSelector(selectToken);
  const router = useRouter();

  useEffect(() => {
    router.replace(token ? "/dashboard" : "/login");
  }, [router, token]);

  return null;
}
