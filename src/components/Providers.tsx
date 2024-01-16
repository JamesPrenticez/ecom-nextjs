"use client"
import { PropsWithChildren, useState, createContext, useContext } from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { trpc } from "@/tRPC/client"
import { httpBatchLink } from '@trpc/client'

const Providers = ({children}: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient())
  
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/trpc`,
          fetch(url, options) {
            return fetch(url, {
              ...options,
              credentials: 'include',
            })
          },
        }),
      ],
    })
  )



  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  )
}

export default Providers;

interface RightMenuContext {
  isRightMenuOpen: boolean;
  toggleRightMenu: () => void;
}

const RightMenuContext = createContext<RightMenuContext | undefined>(undefined);

export const useRightMenu = () => {
  const context = useContext(RightMenuContext);
  if (context === undefined) {
    throw new Error('useRightMenu must be used within a RightMenuProvider');
  }
  return context;
};

export const RightMenuProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);

  const toggleRightMenu = (): void => {
    setIsRightMenuOpen(prevState => !prevState);
  };

  return (
    <RightMenuContext.Provider value={{ isRightMenuOpen, toggleRightMenu }}>
      {children}
    </RightMenuContext.Provider>
  );
};