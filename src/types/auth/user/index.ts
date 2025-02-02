import { ReactNode } from "react";

export interface User {
  id: number;
  full_name: string;
  email: string;
  phone_number: string;
  user_type: UserType[];
  profile_picture: string;
  is_verified: boolean;
  is_rejected: boolean;
  actions?: ReactNode;
}
export interface PaginatedResponse {
  data: User[];
  total: number;
  totalPages: number;
  currentPage: number;
  nextPage: number | null;
  previousPage?: number | null;
}

// Define the enums
export enum UserType {
  USER = "user",
  HOST = "host",
}
