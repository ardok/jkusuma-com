// @flow
import React from 'react';

import { PersonalIcons } from '../icon/PersonalIcons';
import { NameClickCount } from '../name/NameClickCount';
import { NameMine } from '../name/NameMine';

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
