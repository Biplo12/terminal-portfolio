import React from 'react';
import { ReactTerminal } from 'react-terminal';

import useTerminalController from '@/hooks/useTerminalController';

import TerminalCustomization from '@/components/Terminal/Partials/TerminalCustomization';
import TerminalSettingsIcon from '@/components/Terminal/Partials/TerminalSettingsIcon';

const Terminal: React.FC = (): JSX.Element => {
  const {
    commands,
    welcomeMessage,
    setOpenSettings,
    openSettings,
    fontColor,
    bgColor,
    subColor,
    handleChangeFontColor,
    handleChangeBgColor,
    handleChangeSubColor,
  } = useTerminalController();

  const handleCloseSettings = () => {
    setOpenSettings(false);
  };

  return (
    <>
      <div
        className={`relative h-full w-full ${openSettings ? 'blur' : ''} `}
        onClick={handleCloseSettings}
      >
        <ReactTerminal
          commands={commands}
          promptSymbol='👨‍💻'
          prompt='👨‍💻'
          welcomeMessage={welcomeMessage}
          themes={{
            'linux-terminal-theme': {
              themeBGColor: bgColor,
              themeColor: fontColor,
              fontSize: '1rem',
              spacing: '1%',
              fontFamily: 'monospace',
              width: '100%',
            },
          }}
          theme='linux-terminal-theme'
        />
      </div>
      <TerminalSettingsIcon
        setOpenSettings={setOpenSettings}
        openSettings={openSettings}
      />
      {openSettings && (
        <TerminalCustomization
          handleChangeFontColor={handleChangeFontColor}
          handleChangeBgColor={handleChangeBgColor}
          handleChangeSubColor={handleChangeSubColor}
          handleCloseSettings={handleCloseSettings}
          fontColor={fontColor}
          bgColor={bgColor}
          subColor={subColor}
        />
      )}
    </>
  );
};
export default Terminal;
