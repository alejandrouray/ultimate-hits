/* eslint-disable import/prefer-default-export */
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { FirebaseUser } from 'types';
import config from './config';
import ERRORS from '../constants/errors';
import { IAuth } from '../interfaces/Auth';
import { setAuthMethod, setAuthProvider } from './utils/Auth';

initializeApp(config);

export const signUpAllMethods = async (props: IAuth): Promise<FirebaseUser | string> => {
  const auth = getAuth();
  const { emailAddress, password, provider } = props;
  const authProvider = provider && setAuthProvider(provider);

  return new Promise((resolve, reject) => {
    const method = setAuthMethod({
      auth, authProvider, emailAddress, password,
    });

    if (!method) throw new Error('Not valid data');

    return method
      .then(({ user }) => {
        const {
          uid, displayName, email, emailVerified, photoURL,
        } = user;

        resolve({
          uid,
          emailVerified,
          ...displayName && { displayName },
          ...email && { email },
          ...photoURL && { photoURL },
        });
      })
      .catch((err) => reject(ERRORS[err.code] || err.code));
  });
};
