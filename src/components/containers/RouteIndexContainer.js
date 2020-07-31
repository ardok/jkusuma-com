// @flow
import React from 'react';

import { PersonalIcons } from '../PersonalIcons/PersonalIcons';
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
