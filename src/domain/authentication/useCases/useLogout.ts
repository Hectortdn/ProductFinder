import { router } from "expo-router";

import { Modal, ModalProps } from "../../../components";
import { useAccountStore } from "../../../services";

export function useLogout() {
  const logoutStore = useAccountStore((state) => state.logout);

  const logoutReset = () => {
    logoutStore();
    Modal.hide();
    router.replace("/");
  };

  const logout = () => {
    Modal.set({
      ...MODAL_LOGOUT_CONFIRM,
      buttonPrimary: {
        title: "Sim",
        onPress: logoutReset,
      },
    });
  };

  return { logout };
}

const MODAL_LOGOUT_CONFIRM: ModalProps = {
  title: "Sair da conta",
  description: "Você tem certeza que deseja sair da conta? ",
  buttonSecondary: { title: "Cancelar", onPress: Modal.hide },
};
