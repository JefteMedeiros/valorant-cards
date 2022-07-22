import 'styled-component';
import { defaultTheme } from '../styles/Theme/styles';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
