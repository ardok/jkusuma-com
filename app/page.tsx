import { css } from '@emotion/css';
import type { NextPage } from 'next';

import { NameClickCount } from '../src/routes/index/NameClickCount';
import { NameMine } from '../src/routes/index/NameMine';
import { PersonalIcons } from '../src/routes/index/PersonalIcons';
import { UseHttpsPrompt } from '../src/routes/index/UseHttpsPrompt';

const Home: NextPage = () => {
  return (
    <>
      <UseHttpsPrompt />
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
