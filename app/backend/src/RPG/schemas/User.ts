import { z } from 'zod';

const userZodSchema = z.object({
  role: z.string(),
  name: z.string({
    required_error: 'name is required',
    invalid_type_error: 'name must be a string',
  }),
  email: z.string({
    required_error: 'email is required',
    invalid_type_error: 'email must be a string',
  }).email(),
  password: z.string({
    required_error: 'password is required',
    invalid_type_error: 'password must be a string',
  }).min(8)
});


type User = z.infer<typeof userZodSchema>;

export default User;
export { userZodSchema };



