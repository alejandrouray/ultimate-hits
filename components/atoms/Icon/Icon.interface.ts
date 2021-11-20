import * as FontAwesomeIcons from 'react-icons/fa';

export default interface IIcon {
  className?: string;
  fill: string;
  size: number;
  type: keyof typeof FontAwesomeIcons;
}
