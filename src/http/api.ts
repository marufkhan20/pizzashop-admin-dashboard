import type { Credentials } from "../types";
import { api } from "./client";

// Auth service
export const login = (userData: Credentials) =>
  api.post("/auth/login", userData);
