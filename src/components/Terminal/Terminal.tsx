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
            themeBGColor: '#000000',
            themeColor: '#00FF00',
            accentColor: '#00FF00',
            promptSymbolColor: '#00FF00',
            commandColor: '#00FF00',
            outputColor: '#00FF00',
            errorOutputColor: '#FF0000',
            fontSize: '1rem',
            spacing: '1%',
            fontFamily: 'monospace',
            width: '100%',
          },
        }}
        theme='linux-terminal-theme'
      />
    </div>
  );
};
export default Terminal;
