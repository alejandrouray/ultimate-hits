import * as FontAwesomeIcons from 'react-icons/fa';
import { UseFormRegister } from 'react-hook-form';

export default interface IInput {
  className?: string;
  errors?: any;
  icon?: keyof typeof FontAwesomeIcons;
  label?: string;
  name: string;
  placeholder?: string;
  register?: UseFormRegister<any>;
  rules?: any;
  type: 'text' | 'email' | 'number' | 'password';
}
