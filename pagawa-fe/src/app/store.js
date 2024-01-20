import { create } from "zustand";

const useAWSStore = create((set) => ({
  access_token: "",
  setAccessToken: (token) => set((state) => ({ access_token: token })),
}));

