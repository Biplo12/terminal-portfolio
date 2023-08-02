import React from 'react';

interface ITerminalAboutProps {
  subColor: string;
}

const TerminalAbout: React.FC<ITerminalAboutProps> = ({
  subColor,
}): JSX.Element => {
  return (
    <div className='mt-2 flex flex-col gap-2'>
      <h1
        className='text-lg font-bold'
        style={{
          color: subColor,
        }}
      >
        I'm a junior full-stack engineer.
      </h1>
      <ul className='list-inside list-disc'>
        <li>
          A passionate Self-taught full-stack developer. With a strong interest
          in Blockchain, Web3 and backend development.
        </li>
        <li>I`m currently learning T3 Stack and Solidity.</li>
        <li>Currently working in a startup as a Frontend Developer.</li>
      </ul>
    </div>
  );
};
export default TerminalAbout;
