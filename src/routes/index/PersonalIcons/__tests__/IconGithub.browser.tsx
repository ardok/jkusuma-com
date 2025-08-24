import React from 'react';

import { render, screen } from '../../../../test-utils/rtl';
import { IconGitHub } from '../IconGitHub';

describe('IconGithub', () => {
  test('Render icon github', () => {
    render(<IconGitHub />);
    expect(screen.queryByTitle('icon-github')).toBeInTheDocument();

    const link = screen.queryByTestId('link-github');
    expect(link).toBeInTheDocument();
    // @ts-ignore
    expect(link.href).toEqual('https://github.com/ardok/jkusuma-com');
  });
});
