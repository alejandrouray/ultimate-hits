import { FacebookAuthProvider, GoogleAuthProvider, User } from 'firebase/auth';

export type FirebaseUser = Partial<User>;
export type ProviderSocial = FacebookAuthProvider | GoogleAuthProvider;
