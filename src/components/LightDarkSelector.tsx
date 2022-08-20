import { useEffect, useState } from 'react';
import { Button } from 'react-daisyui';
import { AiOutlineHighlight, AiTwotoneHighlight } from 'react-icons/ai';
import { themeChange } from 'theme-change';

const LightDarkSelector = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    themeChange(false);
    const t = localStorage.getItem('theme');
    setTheme(t || 'light');
  }, []);

  return (
    <Button
      data-set-theme={theme === 'light' ? 'dark' : 'light'}
      color="ghost"
      shape="circle"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <span className="text-xl">
        {theme === 'dark' ? <AiTwotoneHighlight /> : <AiOutlineHighlight />}
      </span>
    </Button>
  );
};
export default LightDarkSelector;
