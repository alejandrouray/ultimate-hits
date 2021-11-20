import * as FontAwesomeIcons from 'react-icons/fa';

interface IButton {
  color?: string,
  icon?: keyof typeof FontAwesomeIcons;
  label: string;
  onClick?: () => void;
  primary?: boolean;
  size: 'small' | 'medium' | 'large';
  submit: boolean;
}

export default IButton;
