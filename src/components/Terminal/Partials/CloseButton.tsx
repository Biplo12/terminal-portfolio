/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface ICloseButtonProps {
  handleCloseSettings: () => void;
}

const CloseButton: React.FC<ICloseButtonProps> = ({
  handleCloseSettings,
}): JSX.Element => {
  return (
    <button
      className='absolute right-2 top-2 z-10 outline-none focus:outline-none'
      onClick={handleCloseSettings}
    >
      <img src='/svg/close.svg' alt='Close Icon' className='h-6 w-6' />
    </button>
  );
};
export default CloseButton;
