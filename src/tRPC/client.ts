import { createTRPCReact } from "@trpc/react-query"
import type { TAppRouter } from "@/trpc"

export const trpc = createTRPCReact<TAppRouter>({})