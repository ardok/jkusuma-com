import React from 'react';
import {shallow} from 'enzyme';

import IconBase from '../../../components/icon/IconBase';

test('IconBase: shallow', () => {
  const iconBaseProps = {
    href: 'https://github.com/ardok/jkusuma-com',
    iconClassName: 'icon--github ion-social-github',
  };
  const component = shallow(
    <IconBase {...iconBaseProps} />
  );

  expect(component.find('i.icon--github').length).toBe(1);
  expect(component.find('i.ion-social-github').length).toBe(1);
  expect(component.find('i.icon--github.ion-social-github').length).toBe(1);
  expect(component.find('a').length).toBe(1);
});
