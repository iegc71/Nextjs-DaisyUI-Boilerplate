import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu } from 'react-daisyui';
import { twMerge } from 'tailwind-merge';

const MenuItem = ({
  href = '/',
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        className={twMerge(
          router.route === href ? 'text-white/[0.6]' : 'text-white',
          'border-none transition delay-150'
        )}
      >
        {children}
      </a>
    </Link>
  );
};

const MainMenuItems = ({ horizontal = true }: { horizontal?: boolean }) => {
  return (
    <Menu horizontal={horizontal}>
      <Menu.Item>
        <MenuItem href="/about">About</MenuItem>
        <MenuItem href="/documentation">Documentation</MenuItem>
      </Menu.Item>
    </Menu>
  );
};
export default MainMenuItems;
