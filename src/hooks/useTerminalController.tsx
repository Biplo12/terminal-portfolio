import TerminalAbout from '@/components/Terminal/Partials/TerminalAbout';
import TerminalHelp from '@/components/Terminal/Partials/TerminalHelp';
import TerminalWelcomeMessage from '@/components/Terminal/Partials/TerminalWelcomeMessage';

const useTerminalController = () => {
  const welcomeMessage = <TerminalWelcomeMessage />;
  const commands = {
    help: <TerminalHelp />,
    about: <TerminalAbout />,
  };
  return { commands, welcomeMessage };
};

export default useTerminalController;
