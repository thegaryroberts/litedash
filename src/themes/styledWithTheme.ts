import styled, { CreateStyled } from "react-emotion"
import { IColor } from "./theme.color"
import { IFontFamily } from "./theme.fonts"
import { IMediaQueries } from "./theme.mq"

export interface ITheme {
    color: IColor,
    fontFamily: IFontFamily,
    mq: IMediaQueries,
}

export default styled as CreateStyled<ITheme>
