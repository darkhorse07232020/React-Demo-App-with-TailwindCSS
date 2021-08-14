import React from 'react';

type Props = {
  placeholder?: string;
};

const Input = ({ placeholder }: Props): React.ReactElement => (
  <div className="text-left">
    <label htmlFor="planets">Planets</label>
    <input
      type="text"
      name="planets"
      id="planets"
      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
      placeholder={placeholder}
    />
  </div>
);

export default Input;
