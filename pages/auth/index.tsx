import React, { useState } from 'react';
import { FirebaseUser } from 'types';
import { loginWithGoogle } from '../../firebase/client';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';

const Auth = (): JSX.Element => {
  const [user, setUser] = useState<FirebaseUser>({});
  const [error, setError] = useState<string>('');

  const signIn = async (): Promise<void> => {
    try {
      const googleUser = await loginWithGoogle();

      setUser(googleUser as FirebaseUser);
    } catch (err: any) {
      setError(err);
    }
  };

  return (
    <>
      <div className="m-4">
        <Button label="Google Sign In" onClick={signIn} primary />
      </div>
      <Input icon="FaEnvelope" placeholder="Email" type="email" />
      <Input icon="FaLock" placeholder="Email" type="email" />

      {user.uid && (
        <>
          <span>{user.email}</span>
          <span>{user.displayName}</span>
          {user.photoURL && (<img src={user.photoURL} alt="User Avatar" />)}
        </>
      )}

      {error && (<span>{error}</span>)}
    </>
  );
};

export default Auth;
