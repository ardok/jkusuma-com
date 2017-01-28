import React from 'react';
import {mount} from 'enzyme';

import NameLetter from '../../../shared/components/name/name-letter';

jest.useFakeTimers();

test('NameLetter: mount with animation after', () => {
  const onClickFunc = jest.fn();
  const nameLetterProps = {
    style: {
      width: 20,
    },
    onClick: onClickFunc,
  };
  const component = mount(
    <NameLetter {...nameLetterProps} />
  );

  expect(component.find('.name-letter__container').getDOMNode().style._values).toMatchObject({
    width: '20px',
    display: 'inline-block',
    cursor: 'default',
  });
  expect(component.state()).toMatchObject({
    doneAnimating: false,
    divAnimClass: '',
  });

  component.find('.name-letter__container').simulate('click');
  expect(onClickFunc).not.toBeCalled();
  expect(component.state('doneAnimating')).toBe(false);
  expect(component.state('divAnimClass')).toBe('');

  jest.runAllTimers();

  expect(component.state('doneAnimating')).toBe(true);
  expect(component.state('divAnimClass')).toBe('');
  component.find('.name-letter__container').simulate('click');
  expect(onClickFunc).toBeCalled();
  expect(onClickFunc.mock.calls.length).toBe(1);
  expect(component.state('divAnimClass')).toBe('pb--anim-fall');
});

test('NameLetter: mount with no animation after', () => {
  const onClickFunc = jest.fn();
  const nameLetterProps = {
    style: {
      width: 20,
    },
    onClick: onClickFunc,
    noAnimation: true,
  };
  const component = mount(
    <NameLetter {...nameLetterProps} />
  );

  expect(component.find('.name-letter__container').getDOMNode().style._values).toMatchObject({
    width: '20px',
    display: 'inline-block',
    cursor: 'default',
  });
  expect(component.state()).toMatchObject({
    doneAnimating: false,
    divAnimClass: '',
  });

  component.find('.name-letter__container').simulate('click');
  expect(onClickFunc).not.toBeCalled();
  expect(component.state('doneAnimating')).toBe(false);
  expect(component.state('divAnimClass')).toBe('');

  jest.runAllTimers();

  expect(component.state('doneAnimating')).toBe(true);
  expect(component.state('divAnimClass')).toBe('');
  component.find('.name-letter__container').simulate('click');
  expect(onClickFunc).not.toBeCalled();
  expect(onClickFunc.mock.calls.length).toBe(0);
  expect(component.state('divAnimClass')).toBe('');
});
