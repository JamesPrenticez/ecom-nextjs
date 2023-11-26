import { publicProcedure, router } from "./b";

export const appRouter = router({
  anyApiRoute: publicProcedure.query(() => {
    return "hello"
  })
});

export type TAppRouter = typeof appRouter;