import React, { Children, createElement } from 'react';
import { useForm } from 'react-hook-form';

interface IForm {
  children: JSX.Element[];
  onSubmit: any;
}

export default function Form({ children, onSubmit }: IForm): JSX.Element {
  const methods = useForm();
  const { handleSubmit, register, formState: { errors } } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Children.map(children, (child) => (child.props.name
        ? createElement(child.type, {
          ...{
            ...child.props,
            register,
            errors: errors[child.props.name],
            key: child.props.name,
          },
        })
        : child))}
    </form>
  );
}
