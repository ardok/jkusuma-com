// @flow
import React from 'react';

import { PersonalIcons } from '../PersonalIcons';
import { NameMine } from '../NameMine';
import { NameClickCount } from '../NameClickCount';

const RouteIndexContainer = () => {
  return (
    <div>
      <NameClickCount />
      <PersonalIcons />
      <NameMine />
    </div>
  );
};

export { RouteIndexContainer };
