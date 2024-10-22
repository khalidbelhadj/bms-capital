"use client";

import { QueryClient } from "@tanstack/react-query";
import { PropsWithChildren, useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import dynamic from "next/dynamic";

function Providers({ children }: PropsWithChildren) {
  const [queryClient] = useState(new QueryClient());
  const persister = createSyncStoragePersister({
    storage: null,
  });
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      {children}
      <ReactQueryDevtools initialIsOpen={true} />
    </PersistQueryClientProvider>
  );
}

const ProvidersDynamic = dynamic(() => Promise.resolve(Providers), {
  ssr: false,
});

export default ProvidersDynamic;
