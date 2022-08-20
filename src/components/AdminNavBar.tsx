import React from 'react';
import { Button, Dropdown, Navbar } from 'react-daisyui';
import { twMerge } from 'tailwind-merge';

import LightDarkSelector from './LightDarkSelector';

const Profile = () => (
  <Dropdown vertical="end">
    <Button color="ghost" className="avatar" shape="circle">
      <div className="w-10 rounded-full">
        <img src="https://api.lorem.space/image/face?hash=33791" />
      </div>
    </Button>
    <Dropdown.Menu className="menu-compact w-52 bg-accent">
      <li>
        <a className="justify-between">
          Profile
          <span className="badge">New</span>
        </a>
      </li>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Logout</Dropdown.Item>
      <Button href="/admin">Admin Dashboard</Button>
    </Dropdown.Menu>
  </Dropdown>
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

const AdminNavBar = ({
  className,
  toggleDrawer,
  ...args
}: {
  className?: string;
  args?: React.ReactNode;
  toggleDrawer: any;
}) => {
  const ToggleButton = (tbArgs: any) => (
    <Button
      shape="square"
      color="ghost"
      onClick={() => toggleDrawer()}
      {...tbArgs}
    >
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

  return (
    <div>
      <Navbar
        {...args}
        className={twMerge(className, 'bg-primary text-primary-content')}
      >
        <Navbar.Start>
          <ToggleButton className="mr-3 lg:invisible" />
        </Navbar.Start>

        <Navbar.End className="navbar-end">
          <SearchButton />
          <LightDarkSelector />
          <Profile />
        </Navbar.End>
      </Navbar>
    </div>
  );
};
export default AdminNavBar;
