import * as i from 'app/types';
import * as styledComponents from '../../../node_modules/styled-components';

const {
  ServerStyleSheet,
  StyleSheetManager,
} = styledComponents;

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<i.Theme>;

export { css, createGlobalStyle, keyframes, ThemeProvider, ServerStyleSheet, StyleSheetManager };
export default styled;
