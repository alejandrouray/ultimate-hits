interface Button {
  backgroundColor?: string;
  label: string;
  onClick?: () => void;
  primary?: boolean;
  size: 'small' | 'medium' | 'large';
}

export default Button;
