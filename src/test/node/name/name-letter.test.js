import React from 'react';
import {shallow} from 'enzyme';

import NameLetter from '../../../shared/components/name/name-letter';

test('NameLetter: shallow', () => {
  const nameLetterProps = {
    style: {
      width: 20,
    },
  };
  const component = shallow(
    <NameLetter {...nameLetterProps} />
  );

  expect(component.find('div.name-letter__container').length).toBe(1);
});