import type { NextPage } from 'next';
import { useEffect } from 'react';

import { isDev } from '../common/utils/env';
import { useStyletron } from '../common/utils/styletron';
import { NameClickCount } from '../common/components/NameClickCount';
import { PersonalIcons } from '../common/components/PersonalIcons';
import { NameMine } from '../common/components/NameMine';

const useHttpsPrompt = () => {
  useEffect(() => {
    if (!isDev()) {
      // Production
      const { protocol } = window.location;
      if (!protocol.includes('https')) {
        // No https, prompt user
        const isYes = window.confirm('Would you like to redirect to https?');
        if (isYes) {
          window.location.href = `https${window.location.href.slice(4)}`;
        }
      }
    }
  }, []);
};

const Home: NextPage = () => {
  const [css] = useStyletron();
  useHttpsPrompt();
  return (
    <>
      <div>
        <NameClickCount />
        <PersonalIcons />
        <NameMine />
      </div>
      <div
        className={css({
          position: 'absolute',
          bottom: '10px',
          left: '10px',
          fontSize: '9px',
        })}>
        This website is using Google Analytics
      </div>
    </>
  );
};

export default Home;
