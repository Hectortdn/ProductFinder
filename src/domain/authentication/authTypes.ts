export interface LoginProps {
  username: string;
  password: string;
}

// 20241104135913
// https://dummyjson.com/c/afe4-4fa0-4648-8496

export interface UserAddress {
  city: string;
  state: string;
  country: string;
  address: string;
  stateCode: string;
  postalCode: string;
  coordinates: { lat: number; lng: number };
}

export interface UserBankProps {
  iban: string;
  currency: string;
  cardType: string;
  cardNumber: string;
  cardExpire: string;
}

export interface UserCompanyProps {
  name: string;
  title: string;
  department: string;
  address: UserAddress;
}

export interface UserPropsAPI {
  id: number;
  email: string;
  image: string;
  gender: string;
  username: string;
  lastName: string;
  firstName: string;
  accessToken: string;
  refreshToken: string;
}

export interface AdaptedUserProps
  extends Pick<
    UserPropsAPI,
    "image" | "gender" | "id" | "accessToken" | "refreshToken" | 'email'
  > {
  fullName: string;
}
