import React from 'react';

type Props = {
  image?: string;
  label?: string;
};

const Card = ({ image, label }: Props): React.ReactElement => (
  <div className="grid grid-cols-2 h-32 border bg-white border-gray-200 my-4 cursor-pointer">
    <div className="relative">
      <img
        className="absolute top-0 left-0 w-full h-32 object-cover"
        src={`assets/img/${image}.jpeg`}
        alt=""
      />
    </div>
    <p className="text-3xl font-bold text-left p-10">{label}</p>
  </div>
);

export default Card;
