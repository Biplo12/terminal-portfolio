import React from 'react';

interface ITerminalHelpProps {
  subColor: string;
}

const TerminalHelp: React.FC<ITerminalHelpProps> = ({
  subColor,
}): JSX.Element => {
  return (
    <div className='mt-3 flex flex-col gap-2'>
      <p>Available commands:</p>
      <ul className='list-inside list-disc'>
        <li
          style={{
            color: subColor,
          }}
        >
          help - show this message
        </li>
        <li
          style={{
            color: subColor,
          }}
        >
          about - show information about me
        </li>
        <li
          style={{
            color: subColor,
          }}
        >
          contact - show my contact information
        </li>
        <li
          style={{
            color: subColor,
          }}
        >
          projects - show my projects
        </li>
        <li
          style={{
            color: subColor,
          }}
        >
          clear - clear the terminal
        </li>
      </ul>
    </div>
  );
};
export default TerminalHelp;
