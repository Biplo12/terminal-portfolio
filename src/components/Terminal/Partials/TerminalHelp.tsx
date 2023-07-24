import React from 'react';
const TerminalHelp: React.FC = (): JSX.Element => {
  return (
    <div className='mt-3 flex flex-col gap-2'>
      <p>Available commands:</p>
      <ul className='list-inside list-disc'>
        <li>help - show this message</li>
        <li>about - show information about me</li>
        <li>contact - show my contact information</li>
        <li>projects - show my projects</li>
        <li>clear - clear the terminal</li>
      </ul>
    </div>
  );
};
export default TerminalHelp;
