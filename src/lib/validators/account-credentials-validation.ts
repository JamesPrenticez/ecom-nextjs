import { z } from "zod"

export const AuthCredentialsValidationSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { 
      message: "Password must be at least 8 charaters long"
    }),
})

export type TAuthCredentialsValidationSchema = z.infer<typeof AuthCredentialsValidationSchema>
