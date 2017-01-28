import radium from 'radium';

export function configuredRadium(component) {
  return radium({
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
