import React from 'react';

interface ITerminalWelcomeMessageProps {
  subColor: string;
}

const TerminalWelcomeMessage: React.FC<ITerminalWelcomeMessageProps> = ({
  subColor,
}): JSX.Element => {
  return (
    <div className='mb-4 flex flex-col gap-2'>
      <h1 className='text-2xl font-bold'>Welcome to my terminal portfolio!</h1>
      <p className='text-[1.25rem]'>
        Here you can find some of my projects and my contact information.
      </p>
      <p className='text-[1.25rem]'>
        For more information about me, please visit my{' '}
        <a
          href='https://www.github.com/biplo12'
          className='hover:underline'
          style={{ color: subColor }}
          rel='noreferrer'
          target='_blank'
        >
          GitHub
        </a>{' '}
        page.
      </p>
      <p>
        To get started, type:
        <span style={{ color: subColor }}> help</span>
      </p>
    </div>
  );
};
export default TerminalWelcomeMessage;
