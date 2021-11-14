import * as FontAwesomeIcons from 'react-icons/fa';

export default interface IInput {
  className?: string;
  icon?: keyof typeof FontAwesomeIcons;
  label?: string;
  placeholder?: string;
  type: 'text' | 'email' | 'number' | 'password';
}
