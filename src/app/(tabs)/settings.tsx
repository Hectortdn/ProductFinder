import {
  Text,
  Box,
  Screen,
  Button,
  SelectorNavigation,
} from "../../components";
import { Avatar } from "../../components/avatar/avatar";
import { useTabStatusBarStyle } from "../../hooks";
import { userServices } from "../../services";
import { useLogout } from "../../domain";

const AVATAR_SIZE = 150;

export default function Settings() {
  const { logout } = useLogout();
  const { user } = userServices();

  useTabStatusBarStyle("light-content");

  return (
    <Screen
      bgColor="primary"
      headerProps={{ headerShow: false }}
      style={{ justifyContent: "flex-end" }}
    >
      <Box
        height="75%"
        bg="background"
        borderTopLeftRadius="s16"
        borderTopRightRadius="s16"
      >
        <Box gap="s8" alignItems="center" top={-(AVATAR_SIZE / 2)}>
          <Avatar size={AVATAR_SIZE} avatarUri={user.image} />

          <Text size={24} weight="600">
            {user.fullName}
          </Text>
          <Text size={20} color={"slateGray"}>
            {user.email}
          </Text>

          <Box gap="s16" px="s20" mt="s20">
            <SelectorNavigation label="Meus dados" iconName="user" />
            <SelectorNavigation label="Notificações" iconName="bell" />
            <SelectorNavigation label="Termos de uso" iconName="file-edit" />

            <Button
              mt="s16"
              onPress={logout}
              variant="secondary"
              title="Sair da conta"
            />
          </Box>
        </Box>
      </Box>
    </Screen>
  );
}
