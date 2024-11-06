import { AdaptedUserProps, UserPropsAPI } from "./authTypes";

function toUser(user: UserPropsAPI): AdaptedUserProps {
  const fullName = `${user.firstName} ${user.lastName}`.trim();

  return {
    fullName,
    id: user.id,
    image: user.image,
    email: user.email,
    gender: user.gender,
    accessToken: user.accessToken,
    refreshToken: user.refreshToken,
  };
}

export const authAdapter = {
  toUser,
};
