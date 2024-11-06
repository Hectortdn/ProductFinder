import { api } from "../../api/api";
import { LoginProps, UserPropsAPI } from "./authTypes";

async function login(loginData: LoginProps): Promise<UserPropsAPI> {
  const loginResponse = await api.post("auth/login", loginData);

  return loginResponse.data;
}

export const authApi = {
  login,
};
