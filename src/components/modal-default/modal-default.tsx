import React from "react";

import { Modal as RNModal } from "react-native";

import { Button, ButtonProps } from "../button/button";
import { Text } from "../text/text";
import { Box } from "../box/box";
import { Icon } from "../icon/icon";

export interface ModalProps {
  title: string;
  description: string;
  buttonPrimary?: ButtonProps;
  buttonSecondary?: ButtonProps;
}

type ModalDefaultRef = {
  set: (props: ModalProps) => void;
  hide: () => void;
};

export const ModalDefault = () => {

  const modalRef = React.useRef<ModalDefaultRef>(null);
  const [modalProps, setModalProps] = React.useState<ModalProps>();

  const handleHide = () => {
    setModalProps(undefined);
  };

  React.useImperativeHandle(modalRef, () => ({
    hide: handleHide,
    set(props) {
      setModalProps(props);
    },
  }));

  React.useLayoutEffect(() => {
    Modal.setModalRef(modalRef);
  }, []);

  return (
    <RNModal
      transparent
      animationType="fade"
      statusBarTranslucent
      visible={!!modalProps}
    >
      <Box
        flex={1}
        bg="overlay"
        alignItems="center"
        justifyContent="center"
        paddingHorizontal="s32"
      >
        <Box p="s24" gap="s24" width="100%" borderRadius="s8" bg="background">
          <Box gap="s8" flexDirection="row" justifyContent="space-between">
            <Text size={18} transform="capitalize" weight="600">
              {modalProps?.title ?? ""}
            </Text>

            <Icon name="x" size={14} color="ashGray" onPress={handleHide} />
          </Box>

          <Text size={14} color="ashGray">
            {modalProps?.description ?? ""}
          </Text>

          <Box g="s8" justifyContent="flex-end" flexDirection="row">
            {modalProps?.buttonSecondary && (
              <Button
                variant="outline"
                style={{
                  width: "auto",
                }}
                {...modalProps?.buttonSecondary}
              />
            )}
            {modalProps?.buttonPrimary && (
              <Button
                variant="secondary"
                style={{
                  width: "auto",
                }}
                {...modalProps?.buttonPrimary}
              />
            )}
          </Box>
        </Box>
      </Box>
    </RNModal>
  );
};

export class Modal {
  static modalRef: React.MutableRefObject<ModalDefaultRef>;
  static setModalRef = (ref: any) => {
    this.modalRef = ref;
  };

  static set = (props: ModalProps) => {
    this.modalRef?.current?.set(props);
  };

  static hide = () => {
    this.modalRef?.current?.hide();
  };
}
