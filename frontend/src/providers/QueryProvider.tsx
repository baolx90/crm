import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient({
  queryCache: new QueryCache(),
  mutationCache: new MutationCache(),
});

export function QueryProvider({ children }: PropsWithChildren) {  
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
