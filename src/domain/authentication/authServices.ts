import { authAdapter } from "./authAdapter";
import { LoginProps } from "./authTypes";
import { authApi } from "./authApi";

async function login(login: LoginProps) {
  const authCredentialsAPI = await authApi.login(login);

  return authAdapter.toUser(authCredentialsAPI);
}

export const authServices = { login };
