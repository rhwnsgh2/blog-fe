// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    mainBackground: string;
    // neutral color
    title: string;
    primaryText: string;
    secondaryText: string;
    disable: string;
    border: string;
    divider: string;
    background: string;
    tableHeader: string;
    // point-color
    // point-color
  }
}
