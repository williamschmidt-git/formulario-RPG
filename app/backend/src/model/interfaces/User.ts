export interface IUser {
  id: string,
  name: string,
  email: string,
  password: string,
  salt?: string,
  role: string,
  is_active: boolean,
  image: string,
  created_at: Date,
  updated_at: Date,
}
