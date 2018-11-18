import { styledWithTheme } from "Themes"

export const Question = styledWithTheme("h4")`
    text-align: left;
    margin: 0 0 20px 20px;
    transform: skewY(-1deg);
    font-size: 0.8em;

    &::after {
        content: '?';
        color: ${(props) => props.theme.color.tertiary};
        font-size: 1em;
        padding-left: 3px;
        display: inline-block;
        text-decoration: none;
    }

    ${(props) => props.theme.mq.phablet} {
        font-size: 1em;

        &::after {
            font-size: 1.1em;
        }
    }

    ${(props) => props.theme.mq.tablet} {
        font-size: 1.2em;
        margin: 0 0 40px 20px;
        &::after {
            font-size: 1.3em;
        }
    }

    ${(props) => props.theme.mq.widescreen} {
        margin: 0 0 50px 30px;
    }
`

export const OpeningGambit = styledWithTheme(Question)`
    margin-top: 10px;
    font-size: 1em;
    text-decoration: overline;
    text-decoration-color: ${(props) => props.theme.color.tertiarySoft};

    &::after {
        font-size: 1.3em;
    }

    ${(props) => props.theme.mq.phablet} {
        font-size: 1.2em;

        &::after {
            font-size: 1.5em;
        }
    }

    ${(props) => props.theme.mq.tablet} {
        font-size: 1.3em;
        margin: 0 0 40px 20px;

        &::after {
            font-size: 1.45em;
        }
    }
`

export const Statement = styledWithTheme(Question)`

    &::after {
        content: '!';
    }
`

export const Exclamation = styledWithTheme(OpeningGambit)`
    margin-top: 10px;
    text-decoration: overline;
    text-decoration-color: ${(props) => props.theme.color.tertiarySoft};
`

export const Interrobang = styledWithTheme(Exclamation)`
    text-decoration: overline;
    text-decoration-color: ${(props) => props.theme.color.tertiarySoft};

    &::after {
        content: '!?';
    }
`

export const Answer = styledWithTheme("ul")`
    font-size: 0.8em;
    margin: 0 10px 10px 10px;
    text-align: left;
    list-type: none;
    transform: skewY(3deg);

    li {
        color: ${(props) => props.theme.color.secondary};
        font-size: 0.8em;
        max-width: 800px;

        u {
            ${(props) => props.theme.color.primary}
        }

        u, strong {
            color: ${(props) => props.theme.color.secondaryHighlight};
        }
    }

    ${(props) => props.theme.mq.tablet} {
        font-size: 1.4em;
        margin: 0 0 20px 40px;
    }

    ${(props) => props.theme.mq.widescreen} {
        transform: skewY(2deg);
    }
`

export const AnswerAbrupt = styledWithTheme(Answer)`
    margin: 0 0 0 40px;
`
