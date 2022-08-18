import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

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
      <a
        href="https://github.com/ixartz/Next-js-Boilerplate"
        className="grid place-content-center border-none"
      >
        <img
          src={`${router.basePath}/assets/images/nextjstarter.jpeg`}
          alt="Nextjs starter banner"
        />
      </a>
    </Main>
  );
};

export default Index;
