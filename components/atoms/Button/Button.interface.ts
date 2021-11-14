import * as FontAwesomeIcons from 'react-icons/fa';

interface IButton {
  color?: string,
  dark?: boolean,
  icon?: keyof typeof FontAwesomeIcons;
  label: string;
  onClick?: () => void;
  primary?: boolean;
  size: 'small' | 'medium' | 'large';
}

export default IButton;
