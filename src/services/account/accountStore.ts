import { create } from "zustand";
import { AdaptedUserProps } from "../../domain/authentication/authTypes";

interface AccountStore {
  user: AdaptedUserProps;
  logout: () => void;
  setUser: (user: AdaptedUserProps) => void;
}

export const useAccountStore = create<AccountStore>()((set) => ({
  user: {} as AdaptedUserProps,
  setUser: (user) => set({ user }),
  logout: () => set({ user: {} as AdaptedUserProps }),
}));

export const userServices = () => {
  const user = useAccountStore((state) => state.user);
  const setUser = useAccountStore((state) => state.setUser);

  return { user, setUser };
};
