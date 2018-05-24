import * as i from 'app/interfaces';

export interface Colors {
  black: string;
  white: string;
  primary: string;
  text: string;
}

export interface Fonts {
  futura: string;
}

export interface Theme {
  color: Colors;
  font: Fonts;
}

export interface BaseStyled {
  theme?: i.Theme;
  className?: string;
}
