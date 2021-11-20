import React from 'react';
import * as FontAwesomeIcons from 'react-icons/fa';
import IIcon from './Icon.interface';

const Icon = ({ type, ...props }: IIcon): JSX.Element => {
  const Result = type && FontAwesomeIcons[type];

  return <Result {...props} />;
};

export default Icon;
