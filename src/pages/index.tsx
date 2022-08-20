import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className="mx-auto max-w-screen-lg px-3 text-center">
        <div className="border-b border-gray-300">
          <div className="pt-16 pb-8">
            <div className="text-3xl font-bold">{AppConfig.title}</div>
            <div className="text-xl">{AppConfig.description}</div>
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <img
          src={`${router.basePath}/assets/images/nextjstarter.jpeg`}
          alt="Nextjs starter banner"
          className="mx-auto my-6"
        />
      </div>
    </Main>
  );
};

export default Index;
