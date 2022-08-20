import type { ReactNode } from 'react';

import MainFooter from '@/components/MainFooter';
import MainMenu from '@/components/MainMenu';

type Props = {
  meta: ReactNode;
  children: ReactNode;
};
const Main = (props: Props) => (
  <div className="w-full">
    {props.meta}
    <div className="bg-primary">
      <MainMenu className="container mx-auto" />
    </div>
    <div className="container mx-auto py-8">{props.children}</div>
    <MainFooter />
  </div>
);

export { Main };
