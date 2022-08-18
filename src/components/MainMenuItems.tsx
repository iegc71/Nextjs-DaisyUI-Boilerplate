import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu } from 'react-daisyui';
import { twMerge } from 'tailwind-merge';

const MenuItem = ({ href = '/' }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        className={twMerge(
          router.route === href && 'text-white/[0.6]',
          'border-none transition delay-150'
        )}
      >
        About
      </a>
    </Link>
  );
};

const MainMenuItems = ({ horizontal = true }) => {
  return (
    <Menu horizontal={horizontal}>
      <Menu.Item>
        <MenuItem href="/about" />
      </Menu.Item>
    </Menu>
  );
};
export default MainMenuItems;
