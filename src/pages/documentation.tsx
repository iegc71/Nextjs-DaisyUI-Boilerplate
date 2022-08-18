import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

type Props = {
  href: string;
  children: React.ReactNode;
};
const Item: React.FC<Props> = ({ children, href }) => (
  <li className="list-disc">
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  </li>
);
const Documentation: React.FC = () => {
  return (
    <Main meta={<Meta title="Documentation" description="Relevant Links" />}>
      <h1>Links to documentation sites:</h1>
      <p className="pl-5">
        <ul>
          <Item href="https://github.com/iegc71/Nextjs-DaisyUI-Boilerplate">
            This project on Github
          </Item>
          <Item href="https://nextjs.org/docs/getting-started">Next JS</Item>
          <Item href="https://tailwindcss.com/docs/installation">
            Tailwind CSS
          </Item>
          <Item href="https://react.daisyui.com/?path=/story/welcome--page">
            React DaisyUI
          </Item>
          <Item href="https://themes.ionevolve.com/">
            DaisyUI Theme Builder
          </Item>
          <Item href="https://daisyui.com/theme-generator/">
            DaisyUI Theme Generator
          </Item>
        </ul>
      </p>
    </Main>
  );
};
export default Documentation;
