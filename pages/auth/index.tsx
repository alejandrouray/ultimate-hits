import React, { useState } from 'react';
import { FirebaseUser } from 'types';
import { loginWithGoogle } from '../../firebase/client';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import Divider from '@/components/atoms/Divider/Divider';

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
    <div
      className="bg-cover bg-fixed bg-left bg-no-repeat h-screen w-full"
      style={{ backgroundImage: 'url("background.jpg")' }}
    >
      <div className="grid grid-cols-login place-items-center h-screen">
        <div className="col-start-2 grid grid-cols-2 h-screen75 w-full rounded-lg">
          <img
            alt="Music Concept"
            className="object-cover h-full rounded-l-lg"
            src="music.jpg"
          />
          <div className="bg-white px-12 py-20 rounded-r-lg">
            <h1 className="font-bold text-3xl">Get&apos;s started</h1>
            <div className="mt-2 text-md">
              <span className="font-extralight">Already have an account?</span>
              <a className="ml-1 cursor-pointer text-primary" href="https://google.com">Log In</a>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-12">
              <Button color="bg-red-400" dark icon="FaGoogle" label="Sign up with Google" onClick={signIn} />
              <Button color="bg-gray-800" dark icon="FaApple" label="Sign up with Apple" />
            </div>
            <Divider text="or" />
            <Input className="mb-5" icon="FaEnvelope" placeholder="Email Address" type="email" />
            <Input icon="FaLock" placeholder="Password" type="password" />

            <div className="grid pt-10">
              <Button color="bg-primary" dark label="Register" />
            </div>
          </div>
        </div>
      </div>
      {/* <Button label="Google Sign In" onClick={signIn} primary />

      {user.uid && (
        <>
          <span>{user.email}</span>
          <span>{user.displayName}</span>
          {user.photoURL && (<img src={user.photoURL} alt="User Avatar" />)}
        </>
      )}

      {error && (<span>{error}</span>)} */}
    </div>
  );
};

export default Auth;
