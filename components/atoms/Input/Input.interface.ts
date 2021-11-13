import * as FontAwesomeIcons from 'react-icons/fa';

export default interface IInput {
  icon?: keyof typeof FontAwesomeIcons;
  placeholder?: string;
  type: 'text' | 'email' | 'number' | 'password';
}
