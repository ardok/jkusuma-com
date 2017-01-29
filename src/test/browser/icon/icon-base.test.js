import React from 'react';
import {mount} from 'enzyme';

import IconBase from '../../../shared/components/icon/icon-base';

describe('IconBase', () => {
  it('mounts with no click', () => {
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
    expect(component.props().style).toEqual({
      width: 20,
    });
  });

  it('mounts with click', () => {
    const onLinkClickFunc = jest.fn();
    const iconBaseProps = {
      href: 'https://github.com/ardok/jkusuma-com',
      iconClassName: 'icon--github ion-social-github',
      style: {
        width: 20,
      },
      onLinkClick: onLinkClickFunc,
    };
    const component = mount(
      <IconBase {...iconBaseProps} />
    );

    expect(component.props().href).toBe('https://github.com/ardok/jkusuma-com');
    expect(component.props().iconClassName).toBe('icon--github ion-social-github');
    expect(component.props().style).toEqual({
      width: 20,
    });
    component.find('a').simulate('click');
    expect(onLinkClickFunc).toBeCalled();
    expect(onLinkClickFunc.mock.calls.length).toBe(1);
  });
});
