import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getAllArticles } from "@/lib/actions";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient();

export default async function ArticlesHydration({
  children,
}: PropsWithChildren) {
  await queryClient.prefetchQuery({
    queryKey: ["articles"],
    queryFn: () => getAllArticles(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}
