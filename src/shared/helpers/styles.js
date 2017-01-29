import radium from 'radium';
import isBrowser from 'is-browser';

export function configuredRadium(component) {
  let radiumConfig = {};
  if (!isBrowser) {
    radiumConfig = {
      userAgent: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.2 (KHTML, like Gecko) Chrome/25.0.1216.0 Safari/537.2',
    };
  }
  return radium({
    ...radiumConfig,
    plugins: [
      radium.Plugins.mergeStyleArray,
      radium.Plugins.checkProps,
      radium.Plugins.resolveMediaQueries,
      radium.Plugins.resolveInteractionStyles,
      radium.Plugins.keyframes,
      radium.Plugins.visited,
      radium.Plugins.removeNestedStyles,
      radium.Plugins.prefix,
      radium.Plugins.checkProps,
    ],
  })(component);
}

export const media = {
  portable: '@media (max-width: 768px)',
};

// export const keyframes = {
//   falling: radium.keyframes({
//     '0%': {
//       transform: 'rotate(0deg)',
//     },
//     '30%': {
//       transform: 'rotate(210deg)',
//     },
//     '60%': {
//       transform: 'rotate(150deg)',
//     },
//     '90%': {
//       transform: 'rotate(180deg)',
//       opacity: 1,
//     },
//     '100%': {
//       transform: 'translateY(250px)',
//       opacity: 0,
//     },
//   }),
// };
