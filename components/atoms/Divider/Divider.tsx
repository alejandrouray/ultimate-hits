import React from 'react';
import IDivider from './Divider.interface';

const Divider = ({ text }: IDivider): JSX.Element => (
  <div
    className="border-t border-gray-300 border-solid mt-8 text-center w-full"
  >
    {text && (
    <span className="bg-white bottom-4 font-extralight px-2 relative text-sm">
      {text}
    </span>
    )}
  </div>
);

export default Divider;
