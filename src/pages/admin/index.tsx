import { useState } from 'react';
import { Button, Drawer, Hero } from 'react-daisyui';

import AdminsDrawerItems from '@/components/AdminDrawerItems';
import AdminNavBar from '@/components/AdminNavBar';

type Props = {
  args?: React.ReactNode;
};

const Index: React.FC<Props> = ({ args }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };
  return (
    <Drawer
      side={<AdminsDrawerItems />}
      open={visible}
      onClickOverlay={toggleVisible}
      mobile={true}
    >
      <div className="bg-primary">
        <AdminNavBar
          className="container mx-auto"
          toggleDrawer={toggleVisible}
        />
      </div>
      <div className="flex items-center justify-center py-8">
        <Hero>
          <Hero.Content className="text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Admin Dashboard</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <Button color="primary">Get Started</Button>
            </div>
          </Hero.Content>
        </Hero>
      </div>
    </Drawer>
  );
};
export default Index;
