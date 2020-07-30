// @flow
import { styled } from '../../utils/styletron';
import { MEDIA_QUERY_PHONE } from '../../utils/styles';

const NAME_LETTER_OVERRIDES_ROOT_STYLE_COMMON = {
  position: 'absolute',
  top: '21px',
  fontSize: '120px',
};

export const NAME_LETTER_OVERRIDES_K = {
  Root: {
    style: {
      ...NAME_LETTER_OVERRIDES_ROOT_STYLE_COMMON,
      left: '-65px',
    },
  },
};

export const NAME_LETTER_OVERRIDES_A = {
  Root: {
    style: {
      ...NAME_LETTER_OVERRIDES_ROOT_STYLE_COMMON,
      right: '-60px',
    },
  },
};

export const StyledWrapper = styled('div', {
  position: 'absolute',
  top: 'calc(50% - 40px)',
  left: 'calc(50% - 65px)',
  lineHeight: '40px',
  [MEDIA_QUERY_PHONE]: {
    lineHeight: '20px',
    left: 'calc(50% - 32px)',
  },
});

export const StyledInnerWrapper = styled('div', {
  position: 'relative',
});

export const StyledNameFirst = styled('div', {
  fontSize: '24px',
  marginLeft: '3px',
  [MEDIA_QUERY_PHONE]: {
    fontSize: '12px',
  },
});

export const StyledNameLast = styled('div', {
  fontSize: '60px',
  [MEDIA_QUERY_PHONE]: {
    fontSize: '30px',
  },
});
