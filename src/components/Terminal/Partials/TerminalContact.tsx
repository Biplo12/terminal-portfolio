import React from 'react';
const TerminalContact: React.FC = (): JSX.Element => {
  return (
    <div className='mt-3 flex flex-col gap-2'>
      <h1>
        If you want to contact me, you can send me an email at{' '}
        <a href='mailto:robert.sinski@outlook.com'>robert.sinski@outlook.com</a>
      </h1>
      <p>Or you can find me on: </p>
      <ul className='list-inside list-disc'>
        <li>
          <a
            href='https://www.linkedin.com/in/robert-si%C5%84ski-037398227/'
            target='_blank'
            rel='noreferrer'
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href='https://www.github.com/Biplo12'
            target='_blank'
            rel='noreferrer'
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};
export default TerminalContact;
