export interface IColor {
    primary: string
    primaryHighlight: string
    primaryMuted: string
    secondary: string
    secondaryHighlight: string
    tertiary: string
    tertiarySoft: string
    ultraRare: string
}

export const color: IColor = {
    primary: "hsla(40, 83%, 70%, 1)",
    primaryHighlight: "hsla(40, 83%, 90%, 1)",
    primaryMuted: "hsla(40, 70%, 70%, 1)",
    secondary: "hsla(271, 84%, 75%, 1)",
    secondaryHighlight: "hsla(271, 98%, 92%, 1)",
    tertiary: "hsla(30, 80%, 90%, 0.8)",
    tertiarySoft: "hsla(30, 80%, 90%, 0.4)",
    ultraRare: "hsla(270, 96%, 57%, 0.82)",
}
