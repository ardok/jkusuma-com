import { css } from '@emotion/css';
import type { NextPage } from 'next';

import { NameClickCount } from '../src/common/components/NameClickCount';
import { NameMine } from '../src/common/components/NameMine';
import { PersonalIcons } from '../src/common/components/PersonalIcons';
import { UseHttpsPrompt } from '../src/common/components/UseHttpsPrompt';

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
