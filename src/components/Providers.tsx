"use client"
import { PropsWithChildren, useState } from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { trpc } from '@/trpc/client'
import { httpBatchLink } from '@trpc/client'
const Providers = () => {
  const [queryClient] = useState(() => new QueryClient())
  
  const [trpcClient] = useState(() => tRPC.createClient({
    links: [
      httpBatchLink: ({
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/trcp`,
      }),
    ]
  }))
}

export default Providers;