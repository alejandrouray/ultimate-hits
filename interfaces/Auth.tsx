import { Auth, FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';

export interface IAuthForm {
  emailAddress: string;
  password: string;
}

export interface IAuth {
  provider?: string;
  emailAddress?: string;
  password?: string;
}

export interface IAuthMethod extends IAuth {
  auth: Auth,
  authProvider?: '' | FacebookAuthProvider | GoogleAuthProvider
}
