import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme{
        title: string,

        colors:{
            primary: string,
            secundary: string,
    
            background: string,
            foreground: string,
            yellow: string,
            red: string,
            green: string,
            orange: string,
            pink: string,
            cyan: string
        },
    }
}