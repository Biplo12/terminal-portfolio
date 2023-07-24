import TerminalAbout from '@/components/Terminal/Partials/TerminalAbout';
import TerminalContact from '@/components/Terminal/Partials/TerminalContact';
import TerminalHelp from '@/components/Terminal/Partials/TerminalHelp';
import TerminalProjects from '@/components/Terminal/Partials/TerminalProjects';
import TerminalWelcomeMessage from '@/components/Terminal/Partials/TerminalWelcomeMessage';

const useTerminalController = () => {
  const welcomeMessage = <TerminalWelcomeMessage />;
  const commands = {
    help: <TerminalHelp />,
    about: <TerminalAbout />,
    contact: <TerminalContact />,
    projects: <TerminalProjects />,
  };
  return { commands, welcomeMessage };
};

export default useTerminalController;
