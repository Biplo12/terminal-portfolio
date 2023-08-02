import { useState } from 'react';

import TerminalAbout from '@/components/Terminal/Partials/TerminalAbout';
import TerminalContact from '@/components/Terminal/Partials/TerminalContact';
import TerminalHelp from '@/components/Terminal/Partials/TerminalHelp';
import TerminalProjects from '@/components/Terminal/Partials/TerminalProjects';
import TerminalWelcomeMessage from '@/components/Terminal/Partials/TerminalWelcomeMessage';

const useTerminalController = () => {
  const [openSettings, setOpenSettings] = useState<boolean>(false);
  const [fontColor, setFontColor] = useState<string>('#00FF00');
  const [bgColor, setBgColor] = useState<string>('#000000');
  const [subColor, setSubColor] = useState<string>('#00FF00');
  const handleChangeFontColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontColor(e.target.value);
  };
  const handleChangeBgColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBgColor(e.target.value);
  };
  const handleChangeSubColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubColor(e.target.value);
  };
  const welcomeMessage = <TerminalWelcomeMessage subColor={subColor} />;
  const commands = {
    help: <TerminalHelp subColor={subColor} />,
    about: <TerminalAbout subColor={subColor} />,
    contact: <TerminalContact subColor={subColor} />,
    projects: <TerminalProjects subColor={subColor} />,
  };
  return {
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
  };
};

export default useTerminalController;
