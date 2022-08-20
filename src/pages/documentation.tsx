import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Item = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <li className="list-disc">
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  </li>
);

const Documentation = () => {
  return (
    <Main meta={<Meta title="Documentation" description="Relevant Links" />}>
      <h1>DOCUMENTATION</h1>
      <h3>Links to documentation sites:</h3>
      <div className="pl-5">
        <ul>
          <Item href="https://github.com/iegc71/Nextjs-DaisyUI-Boilerplate">
            This project on Github
          </Item>
          <Item href="https://nextjs.org/docs/getting-started">Next JS</Item>
          <Item href="https://tailwindcss.com/docs/installation">
            Tailwind CSS
          </Item>
          <Item href="https://react-typescript-cheatsheet.netlify.app/docs/basic/setup">
            TypeScript for React
          </Item>
          <Item href="https://react.daisyui.com/?path=/story/welcome--page">
            React DaisyUI
          </Item>
          <Item href="https://daisyui.com/docs/install/">
            DaisyUI Tailwind Plugin
          </Item>
          <Item href="https://themes.ionevolve.com/">
            DaisyUI Theme Builder
          </Item>
          <Item href="https://daisyui.com/theme-generator/">
            DaisyUI Theme Generator
          </Item>
          <Item href="https://react-icons.github.io/react-icons">
            React Icons
          </Item>
        </ul>
      </div>
    </Main>
  );
};
export default Documentation;
