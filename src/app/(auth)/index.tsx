import { z } from "zod";
import { router } from "expo-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ScrollView, StatusBar, View } from "react-native";

import {
  Box,
  Text,
  Modal,
  Button,
  ModalProps,
  FormTextInput,
  KeyboardAvoiding,
  FormPasswordInput,
} from "@components";
import { useAuthLogin } from "@domain";

export default function LoginScreen() {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormProps>({
    mode: "onChange",
    resolver: zodResolver(formLoginSchema),
  });

  const { login, isLoading } = useAuthLogin({
    onSuccess: () => {
      router.replace("/(tabs)/home");
    },
    onError: () => {
      Modal.set(MODAL_LOGIN_ERROR);
      setValue("password", "");
    },
  });

  const handleLogin = (form: FormProps) => {
    login(form);
  };

  return (
    <KeyboardAvoiding>
      <StatusBar barStyle="light-content" />
      <ScrollView
        bounces={false}
        overScrollMode="never"
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Box
          flex={1}
          bg="primary"
          justifyContent="center"
          backgroundColor="background"
        >
          <Box
            top={0}
            bg="primary"
            height="50%"
            width="100%"
            position="absolute"
          />

          <Box gap="s32" px="s32" width="100%">
            <View>
              <Text size={32} color="background" weight="600">
                Bem-vindo de volta!
              </Text>
              <Text color="background">
                Insira seus dados para entrar na sua conta.
              </Text>
            </View>

            <Box
              px="s24"
              gap="s24"
              width="100%"
              borderWidth={1}
              bg="background"
              borderRadius="s16"
              borderColor="outlines"
              style={{ paddingVertical: 50 }}
            >
              <FormTextInput
                name="username"
                label="Username"
                control={control}
                autoCapitalize="none"
                rules={{ required: "Campo obrigatório" }}
              />
              <FormPasswordInput
                name="password"
                label="Password"
                control={control}
                rules={{ required: "Campo obrigatório" }}
              />

              <Button
                title="Entrar"
                disabled={!isValid}
                isLoading={isLoading}
                onPress={handleSubmit(handleLogin)}
              />
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </KeyboardAvoiding>
  );
}

const MODAL_LOGIN_ERROR: ModalProps = {
  title: "Acesso inválido",
  description:
    "O acesso à essa conta foi negado. Verifique suas credenciais e tente novamente.",
  buttonPrimary: { title: "OK", onPress: Modal.hide },
};

const formLoginSchema = z.object({
  username: z.string().min(1, "Campo obrigatório").trim(),
  password: z.string().min(1, "Campo obrigatório").trim(),
});

type FormProps = z.infer<typeof formLoginSchema>;
