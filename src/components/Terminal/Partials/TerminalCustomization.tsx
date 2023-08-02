import React from 'react';

import CloseButton from '@/components/Terminal/Partials/CloseButton';

interface ITerminalCustomizationProps {
  handleChangeFontColor: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeBgColor: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeSubColor: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCloseSettings: () => void;
  fontColor: string;
  bgColor: string;
  subColor: string;
}

const TerminalCustomization: React.FC<ITerminalCustomizationProps> = ({
  handleChangeFontColor,
  handleChangeBgColor,
  handleChangeSubColor,
  handleCloseSettings,
  fontColor,
  bgColor,
  subColor,
}): JSX.Element => {
  const colorInputs = [
    {
      label: 'Font Color',
      name: 'fontColor',
      id: 'fontColor',
      value: fontColor,
      onChange: handleChangeFontColor,
    },
    {
      label: 'Sub Color',
      name: 'subColor',
      id: 'subColor',
      value: subColor,
      onChange: handleChangeSubColor,
    },
    {
      label: 'Background',
      name: 'bgColor',
      id: 'bgColor',
      value: bgColor,
      onChange: handleChangeBgColor,
    },
  ];

  return (
    <div className='absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center gap-5 rounded-lg bg-gray-600 bg-opacity-50 p-12 shadow-lg'>
      {colorInputs.map((input) => (
        <div key={input.id} className='flex flex-col gap-1'>
          <label htmlFor={input.id} className='text-md text-white'>
            {input.label}
          </label>
          <input
            type='color'
            name={input.name}
            id={input.id}
            value={input.value}
            onChange={input.onChange}
            className='h-8 w-full'
          />
        </div>
      ))}
      <CloseButton handleCloseSettings={handleCloseSettings} />
    </div>
  );
};
export default TerminalCustomization;
