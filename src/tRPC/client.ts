import { createTRPCReact } from "@trpc/react-query"
import type { AppRouter } from "@/tRPC"

export const trpc = createTRPCReact<AppRouter>({})