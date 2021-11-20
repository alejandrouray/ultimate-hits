import React, { useState, BaseSyntheticEvent } from 'react';
import { FirebaseUser } from 'types';
import IAuthForm from 'interfaces/Auth';
import {
  ToastContainer, toast, ToastContentProps, ToastContent,
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signUpAllMethods } from '../../firebase/client';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import Divider from '@/components/atoms/Divider/Divider';
import Form from '@/components/organisms/Form/Form';
import { IAuth } from '../../interfaces/Auth';

const Auth = (): JSX.Element => {
  const [user, setUser] = useState<FirebaseUser>({});

  const signUp = (props: IAuth, e?: BaseSyntheticEvent): void => {
    if (e) e.preventDefault();

    toast.promise(
      signUpAllMethods(props),
      {
        pending: 'Registering user...',
        success: {
          render(content: ToastContentProps): ToastContent {
            const userData = content.data as FirebaseUser;
            setUser(userData);

            return `You're welcome, ${userData.displayName || userData.email}`;
          },
        },
        error: {
          render(content: ToastContentProps): ToastContent {
            return content.data;
          },
        },
      },
    );
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
          <div className="bg-white px-10 py-20 rounded-r-lg">
            <h1 className="font-bold text-3xl">Get&apos;s started</h1>
            <div className="mt-2 text-md">
              <span className="font-extralight">Already have an account?</span>
              <a className="ml-1 cursor-pointer text-primary" href="https://google.com">Log In</a>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-12">
              <Button
                color="bg-red-400"
                icon="FaGoogle"
                label="Sign up with Google"
                onClick={() => signUp({ provider: 'Google' })}
              />
              <Button
                color="bg-blue-800"
                icon="FaFacebook"
                label="Sign up with Facebook"
                onClick={() => signUp({ provider: 'Facebook' })}
              />
            </div>
            <Divider text="or" />
            <Form onSubmit={signUp}>
              <Input
                icon="FaEnvelope"
                className="mb-5"
                label="Email Address"
                name="emailAddress"
                placeholder="Email Address"
                rules={{
                  pattern: { value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: 'Email is not valid' },
                  required: { value: true, message: 'Email is required' },
                }}
                type="email"
              />
              <Input
                icon="FaLock"
                label="Password"
                name="password"
                placeholder="Password"
                type="password"
                rules={{
                  minLength: { value: 8, message: 'Password length should be more than 7' },
                  required: { value: true, message: 'Password is required' },
                }}
              />
              <div className="grid pt-10">
                <Button color="ripple-bg-primary" label="Register" submit />
              </div>
            </Form>
            <ToastContainer
              position="top-right"
              theme="dark"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
