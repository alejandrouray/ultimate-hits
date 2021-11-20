import React from 'react';
import Icon from '../Icon/Icon';
import IButton from './Button.interface';
import styles from './Button.styles';

const Button = ({
  color, icon, primary, size, label, submit, ...props
}: IButton): JSX.Element => {
  const mode = primary
    ? styles.primary
    : color || styles.secondary;

  const setIconSize = (el: string) => {
    if (el === 'small') return 12;
    return el === 'medium' ? 18 : 20;
  };

  return (
    <button
      className={[
        styles.button,
        styles.dimensions[size],
        mode,
        icon && 'grid grid-cols-buttonIcon items-center',
      ].join(' ')}
      type={submit ? 'submit' : 'button'}
      {...props}
    >
      {icon && <Icon size={setIconSize(size)} fill="white" type={icon} />}
      <span className="justify-self-start">{label}</span>
    </button>
  );
};

Button.defaultProps = {
  onClick: null,
  primary: false,
  size: 'medium',
  submit: false,
};

export default Button;
