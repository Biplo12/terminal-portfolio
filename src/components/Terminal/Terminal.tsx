import React from 'react';
import { ReactTerminal } from 'react-terminal';

import useTerminalController from '@/hooks/useTerminalController';

const Terminal: React.FC = (): JSX.Element => {
  const { commands, welcomeMessage } = useTerminalController();
  return (
    <div className='relative h-full w-full'>
      <ReactTerminal
        commands={commands}
        promptSymbol='👨‍💻'
        prompt='👨‍💻'
        welcomeMessage={welcomeMessage}
        themes={{
          'linux-terminal-theme': {
            themeBGColor: '#272B36',
            themeToolbarColor: '#DBDBDB',
            themeColor: '#FFFEFC',
            themePromptColor: '#d38268',
          },
        }}
        theme='linux-terminal-theme'
      />
    </div>
  );
};
export default Terminal;
