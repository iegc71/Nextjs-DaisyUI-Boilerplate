import Link from 'next/link';
import React, { useState } from 'react';
import { Button, Modal, Navbar } from 'react-daisyui';
import { twMerge } from 'tailwind-merge';

import LightDarkSelector from './LightDarkSelector';
import MainMenuItems from './MainMenuItems';

const Logo = () => (
  <Link href="/">
    <a className="border-none text-xl font-bold text-white">DaisyUI</a>
  </Link>
);
const SearchButton = () => (
  <Button color="ghost" shape="circle">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  </Button>
);
const SettingButton = () => (
  <Button shape="square" color="ghost">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="inline-block h-5 w-5 stroke-current"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
      />
    </svg>
  </Button>
);

const MainMenu = ({
  className,
  ...args
}: {
  className?: string;
  args?: React.ReactNode;
}) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const ToggleButton = (tbArgs: any) => (
    <Button shape="square" color="ghost" onClick={toggleVisible} {...tbArgs}>
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
  const FloatMenu = () => (
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
  );
  return (
    <div>
      <Navbar
        {...args}
        className={twMerge(className, 'bg-primary text-primary-content')}
      >
        <Navbar.Start>
          <ToggleButton className="mr-3 lg:hidden" />
          <Logo />
        </Navbar.Start>

        <Navbar.Center className="hidden lg:flex">
          <MainMenuItems />
        </Navbar.Center>

        <Navbar.End className="navbar-end">
          <SearchButton />
          <LightDarkSelector />
          <SettingButton />
          {/* <Dropdown {...args} dataTheme={dataTheme}></Dropdown> */}
        </Navbar.End>
      </Navbar>
      <FloatMenu />
    </div>
  );
};
export default MainMenu;
