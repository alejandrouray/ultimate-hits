import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from 'firebase/auth';
import { IAuthMethod } from 'interfaces/Auth';
import { FACEBOOK } from '../../constants';
import { ProviderSocial } from '../../types';

export const setAuthProvider = (provider: string): ProviderSocial => (
  provider === FACEBOOK
    ? new FacebookAuthProvider()
    : new GoogleAuthProvider()
);

export const setAuthMethod = (props: IAuthMethod): Promise<UserCredential> | undefined => {
  const {
    auth, authProvider, emailAddress, password,
  } = props;

  if (authProvider) return signInWithPopup(auth, authProvider);
  if (emailAddress && password) return createUserWithEmailAndPassword(auth, emailAddress, password);

  return undefined;
};
