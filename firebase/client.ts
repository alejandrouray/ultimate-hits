/* eslint-disable import/prefer-default-export */
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FirebaseUser } from 'types';
import config from './config';

initializeApp(config);

export const loginWithGoogle = async (): Promise<FirebaseUser | string> => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  try {
    const { user } = await signInWithPopup(auth, googleProvider);
    const {
      uid, displayName, email, emailVerified, photoURL,
    } = user;

    return {
      uid,
      emailVerified,
      ...displayName && { displayName },
      ...email && { email },
      ...photoURL && { photoURL },
    };
  } catch (err: any) {
    return err && err.message;
  }
};
