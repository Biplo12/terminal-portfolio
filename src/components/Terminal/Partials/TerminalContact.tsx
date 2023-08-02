import React from 'react';

interface ITerminalContactProps {
  subColor: string;
}

const TerminalContact: React.FC<ITerminalContactProps> = ({
  subColor,
}): JSX.Element => {
  return (
    <div className='mt-3 flex flex-col gap-2'>
      <h1>
        If you want to contact me, you can send me an email at{' '}
        <a
          href='mailto:robert.sinski@outlook.com'
          style={{
            color: subColor,
          }}
        >
          robert.sinski@outlook.com
        </a>
      </h1>
      <h2>
        Or you can phone me at{' '}
        <a
          href='tel:+48794263449'
          style={{
            color: subColor,
          }}
        >
          +48 794 263 449
        </a>
      </h2>
      <p>Or you can find me on: </p>
      <ul className='list-inside list-disc'>
        <li>
          <a
            href='https://www.linkedin.com/in/robert-si%C5%84ski-037398227/'
            target='_blank'
            rel='noreferrer'
            style={{
              color: subColor,
            }}
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href='https://www.github.com/Biplo12'
            target='_blank'
            rel='noreferrer'
            style={{
              color: subColor,
            }}
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};
export default TerminalContact;
