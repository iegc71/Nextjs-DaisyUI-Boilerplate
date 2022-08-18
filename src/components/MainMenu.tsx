import Link from 'next/link';
import { useState } from 'react';
import { Button, Modal, Navbar } from 'react-daisyui';
import { twMerge } from 'tailwind-merge';

import MainMenuItems from './MainMenuItems';

type Props = {
  className?: string;
};
const MainMenu: React.FC<Props> = ({ className }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const ToggleButton: React.FC = () => (
    <Button shape="square" color="ghost" onClick={toggleVisible}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-6 w-6 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </Button>
  );

  const Logo: React.FC = () => (
    <Link href="/">
      <a className="border-none text-xl font-bold text-white">DaisyUI</a>
    </Link>
  );

  return (
    <div>
      <Navbar
        className={twMerge(
          className,
          'bg-primary text-primary-content mx-auto max-w-screen-lg'
        )}
      >
        <div className="flex-none pr-2 lg:hidden">
          <ToggleButton />
        </div>
        <div className="flex-1">
          <Logo />
        </div>
        <div className="hidden flex-none lg:block">
          <MainMenuItems />
        </div>
      </Navbar>
      <Modal
        open={visible}
        onClickBackdrop={toggleVisible}
        className="bg-primary"
      >
        <Modal.Header className="mb-3 border-b-2 border-b-white/20 pb-3 font-bold text-white">
          Main Menu
        </Modal.Header>

        <Modal.Body>
          <MainMenuItems horizontal={false} />
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default MainMenu;
