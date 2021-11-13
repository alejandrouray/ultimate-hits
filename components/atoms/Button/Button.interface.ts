interface IButton {
  label: string;
  onClick?: () => void;
  primary?: boolean;
  size: 'small' | 'medium' | 'large';
}

export default IButton;
