import { z } from 'zod';

export const userCreateSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
});

export const userUpdateSchema = userCreateSchema.partial();

export type UserCreateDTO = z.infer<typeof userCreateSchema>;
export type UserUpdateDTO = z.infer<typeof userUpdateSchema>;
