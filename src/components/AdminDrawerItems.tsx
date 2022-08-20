import Link from 'next/link';

const Logo = () => (
  <Link href="/">
    <a className="border-none text-xl font-bold dark:text-white">DaisyUI</a>
  </Link>
);

const AdminsDrawerItems = () => {
  return (
    <div className="w-60 overflow-y-auto bg-base-300 p-4">
      <div className="my-3 text-center">
        <Logo />
      </div>
      <hr className="border-solid-2 pb-4/50 mb-3 border-gray-700" />
      <ul className="menu">
        <li>
          <a>Sidebar Item 1</a>
        </li>
        <li>
          <a>Sidebar Item 2</a>
        </li>
      </ul>
    </div>
  );
};
export default AdminsDrawerItems;
