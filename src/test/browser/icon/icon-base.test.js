import React from 'react';
import {mount} from 'enzyme';

import IconBase from '../../../shared/components/icon/icon-base';

test('IconBase: mount', () => {
  const iconBaseProps = {
    href: 'https://github.com/ardok/jkusuma-com',
    iconClassName: 'icon--github ion-social-github',
    style: {
      width: 20,
    },
  };
  const component = mount(
    <IconBase {...iconBaseProps} />
  );

  expect(component.props().href).toBe('https://github.com/ardok/jkusuma-com');
  expect(component.props().iconClassName).toBe('icon--github ion-social-github');
  expect(component.props().style).toMatchObject({
    width: 20,
  });
});
