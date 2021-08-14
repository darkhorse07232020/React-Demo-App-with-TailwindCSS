import React from 'react';

type Props = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, onClick }: Props): React.ReactElement => (
  <button
    type="button"
    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
