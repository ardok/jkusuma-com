// @flow
import React from 'react';

import { IconGitHub } from '../IconGitHub';
// $FlowFixMe export *
import { render, screen } from '../../../test-utils/rtl';

describe('IconGithub', () => {
  test('Render icon github', () => {
    render(<IconGitHub />);
    expect(screen.queryByTitle('icon-github')).toBeInTheDocument();

    const link = screen.queryByTestId('link-github');
    expect(link).toBeInTheDocument();
    expect(link.href).toEqual('https://github.com/ardok/jkusuma-com');
  });
});
