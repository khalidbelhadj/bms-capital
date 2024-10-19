"use client";

import { getAllArticles } from "@/lib/actions";
import { useQuery } from "@tanstack/react-query";

export default function useArticles() {
  return useQuery({
    queryKey: ["articles"],
    queryFn: () => getAllArticles(),
    staleTime: 1000,
  });
}
