import { PropsWithChildren } from "react";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient } from "@tanstack/react-query";
import { CACHE_TIME } from "@/lib/constants";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: CACHE_TIME,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.sessionStorage,
});

export const TanstackQueryProvider = ({ children }: PropsWithChildren) => (
  <PersistQueryClientProvider
    client={queryClient}
    persistOptions={{ persister }}
  >
    {children}
    <ReactQueryDevtools initialIsOpen={false} />
  </PersistQueryClientProvider>
);
