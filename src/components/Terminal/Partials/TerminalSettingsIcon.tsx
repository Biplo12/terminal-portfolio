/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

interface ITerminalSettingsIconProps {
  setOpenSettings: React.Dispatch<React.SetStateAction<boolean>>;
  openSettings: boolean;
}

const TerminalSettingsIcon: React.FC<ITerminalSettingsIconProps> = ({
  setOpenSettings,
  openSettings,
}): JSX.Element => {
  const [hover, setHover] = useState(false);
  const handleOpenSettings = () => {
    setOpenSettings(true);
  };
  return (
    <button
      className='absolute right-4 top-4 z-10 flex items-center justify-center rounded-lg outline-none focus:outline-none'
      onClick={handleOpenSettings}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`absolute -left-1 -top-1 h-8 w-8 rounded-lg bg-gray-400 transition-all duration-150 ease-in-out ${
          hover || openSettings ? 'bg-opacity-50' : 'bg-opacity-0'
        }`}
      />
      <img
        src='/svg/settings.svg'
        alt='Settings Icon'
        className='z-10 h-6 w-6'
      />
    </button>
  );
};
export default TerminalSettingsIcon;
