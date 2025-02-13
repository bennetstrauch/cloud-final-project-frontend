import User from "../models/User";

export type RegisterData = Omit<User, "id"> & {
  password: string;
  image64: string;
};
export type LoginData = { email: string; password: string };
export type AuthResponse = {
  user: User;
  token: string;
};
