import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: Props): React.ReactElement => (
  <div className="min-h-screen bg-gray-50 flex flex-col py-12 sm:px-6 lg:px-8">
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md py-8 px-4 sm:px-10 grid gap-y-5">
      {children}
    </div>
  </div>
);

export default Wrapper;
